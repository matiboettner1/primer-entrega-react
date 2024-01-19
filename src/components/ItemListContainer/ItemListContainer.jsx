import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import classes from "./ItemListContainer.module.css"


const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((querySnapshot) => {

        const productsAdapted = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });

        setProducts(productsAdapted);
      })
      .catch((error) => {
        toast.warning("Ocurrió un problema, reintente en unos momentos", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "dark",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className={classes.loadingcontainer}>
        <ReactLoading type={"spin"} color={"#ac7714"} height={50} width={50} className={classes.loading} />
      </div>
    );
  }

  return (
    <div >
      <h1 className={classes.title}>{greeting}</h1>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer