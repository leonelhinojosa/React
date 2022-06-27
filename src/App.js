import React from "react"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  const onAdd = (mensaje) => {
    alert("Muchas gracias por tu compra")
    console.log(mensaje)}
  
  
  return (
    <>
    <NavBar   />
    <ItemListContainer  numeroTelefono= '1128054858' />
    <ItemCount stock={10} onAdd={onAdd}/>
    </>
  );
}

export default App;
