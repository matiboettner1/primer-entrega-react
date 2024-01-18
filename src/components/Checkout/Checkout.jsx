import { useState } from "react";
import { useCart } from "../../context/CartContext/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import ContactForm from "../ContactForm/ContactForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import classes from "../ItemListContainer/ItemListContainer.module.css";

import { addDoc, getDocs, collection, query, where, documentId, writeBatch, } from "firebase/firestore";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const { cart, total, clearCart } = useCart();

  const createOrder = async (userData) => {
    try {
      setLoading(true);
      const objOrder = {
        buyer: {
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
        },
        items: cart,
        total,
      };
      const batch = writeBatch(db);
      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsCollection = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );

      const { docs } = await getDocs(productsCollection);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit();

        const orderCollection = collection(db, "orders");
        const { id } = await addDoc(orderCollection, objOrder);

        clearCart();
        setOrderId(id);
      } else {
        toast.warning("Producto sin stock", {
          position: "bottom-center",
          autoClose: 3000,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.warning("Hubo un problema, intentelo nuevamente", {
        position: "bottom-center",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={classes.tit2}>
        <h1>Creando orden...</h1>
        <div className={classes.loadingcontainer}>
          <ReactLoading type={"spin"} color={"#ac7714"} height={50} width={50} className={classes.loading} />
        </div>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className={classes.title}>
        <h1>Su Nro. de orden es: {orderId}</h1>
      </div>
    );
  }

  return (
    <>
      <div className={classes.title}>
        {" "}
        <h1>Finalizar compra</h1>
      </div>

      <ContactForm createOrder={createOrder} />
    </>
  );
};

export default Checkout;