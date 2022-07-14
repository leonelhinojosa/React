import React from "react"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer  from "./components/ItemDetailContainer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  
  
  
  return (
  
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path='/juegos/:juegosId' element = {<ItemListContainer/>}/>
      <Route path='/juegos/:juegosId' element = {<ItemListContainer/>}/>
        <Route path='/detalle/:detalleId' element = {<ItemDetailContainer/>}/>
      
    
      
    </Routes>
   {/* <ItemListContainer  /> */}
    
    </BrowserRouter>
    
  );
}

export default App;
