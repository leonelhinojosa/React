import React from "react"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer  from "./components/ItemDetailContainer";
import './App.css';
import Cart from './components/Cart/Cart'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route,} from "react-router-dom";
import CartProvider from "./cartContext/cartContext";


function App() {
  
  
  
  
  return (
  
    <BrowserRouter>
    <CartProvider>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/juegos/:juegosId' element = {<ItemListContainer/>}/>
      <Route path='/detalle/:detalleId' element = {<ItemDetailContainer/>}/>
      <Route path='/juegos/:juegosId/detalle/:detalleId' element = {<ItemDetailContainer/>}/>
      <Route path='/Cart' element={<Cart />} />
    
      
    </Routes>
   
   </CartProvider>
    
    </BrowserRouter>
    
  );
}

export default App;
