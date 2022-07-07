import React from "react"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer  from "./components/ItemDetailContainer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  
  
  
  return (
    <>
    <NavBar   />
    <ItemListContainer  numeroTelefono= '1128054858' />
    <ItemDetailContainer />
    </>
  );
}

export default App;
