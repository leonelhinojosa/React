import React from "react"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer  from "./components/ItemDetailContainer";
import './App.css';
import Cart from '../src/components/Cart/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route,} from "react-router-dom";
import CartProvider from "./Context/CartContext";


function App() {
  
  
  
  
  return (
  
    <BrowserRouter>
    <CartProvider>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/juegos/:juegosId' element = {<ItemListContainer/>}/>
      <Route path='/detalle/:detalleId' element = {<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart />} />
    
      
    </Routes>
   
   </CartProvider>
    
    </BrowserRouter>
    
  );
}

export default App;
