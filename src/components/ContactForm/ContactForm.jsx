import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "../ItemListContainer/ItemListContainer.module.css";

const ContactForm = ({ createOrder }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name && userData.email && userData.phone) {
      createOrder(userData);
    } else {
      toast.warning("Complete Todos los campos", {
        position: "bottom-right",
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <label> Nombre:
          <input type="text" name="name" placeholder="Nombre completo" value={userData.name} onChange={handleInputChange} />
        </label>
        <label> Email:
          <input type="email" name="email" placeholder="ejemplo@email.com" value={userData.email} onChange={handleInputChange} />
        </label>
        <label> Teléfono:
          <input type="tel" name="phone" placeholder="Nro. de telefono" value={userData.phone} onChange={handleInputChange} />
        </label>
        <button type="submit">Generar Orden</button>
      </form>
    </div>
  );
};

export default ContactForm;
