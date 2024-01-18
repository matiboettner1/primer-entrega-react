import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import classes from "../ItemListContainer/ItemListContainer.module.css";


const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    const documentRef = doc(db, "products", productId);

    getDoc(documentRef)
      .then((queryDocumentSnapshot) => {
        const fields = queryDocumentSnapshot.data();
        const productAdapted = { id: queryDocumentSnapshot.id, ...fields };
        setProduct(productAdapted);
      })
      .catch((error) => {
        toast.warning("Ocurrió un problema, reintente en unos momentos", {
          position: "bottom-center",
          autoClose: 2000,
          theme: "dark",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <div className={classes.loadingcontainer}>
        <ReactLoading type={"spin"} color={"#ac7714"} height={50} width={50} className={classes.loading} />
      </div>
    );
  }

  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;
