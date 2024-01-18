import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from "./context/CartContext/CartContext";
import CartView from "./components/CartView/CartView";
import Checkout from "./components/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Listado de Productos'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'} />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>Error</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
