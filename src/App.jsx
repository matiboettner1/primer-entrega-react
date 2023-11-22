import './App.css'
import Navbar from './components/Navbar/Navbar'
import ProductsList from './components/ProductsList/ProductsList'

function App() {

  return (
    <>
      <Navbar/>
      <ProductsList greeting={'Bienvenidos a mi e-commerce'}/>
    </>
  )
}

export default App
