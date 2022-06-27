import React from "react"
//import './NavBar.css'
import logo from '../assets/logo.jpg'
import ItemListContainer from '../components/ItemListContainer'
import Cartwidget from '../components/CartWidget'
import  ItemCount  from '../components/ItemCount'


const NavBar = () => {
    
      const onAdd = (mensaje) => {
        alert("Muchas gracias por tu compra")
        console.log(mensaje)}
    
    return (
        <>
           
            <img style={styles.imagen} src={logo} alt="" />
            <nav style={styles.navStyle}>
                <a style={styles.navStyle}href="inicio">Inicio</a>
                <a style={styles.navStyle}href="ofertas">Ofertas</a>
                <a style={styles.navStyle}href="consultas">Consultas</a>
                <Cartwidget />
            </nav>
            
            <h1 style={styles.Tittle}> Ventas de juegos de PS3/PS4/XBOX </h1>
            
            
            <ItemListContainer  numeroTelefono= '1128054858' />

            <ItemCount stock={10} onAdd={onAdd}/>
           
           
        </>
    )
}
export default NavBar

const styles = {
   
    navStyle:{

        background: '#21889C',
        color: '#000',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    
    },
    
   

    Tittle:{
        
        fontSize: '50',
        textAlign: 'center',
    
    },

    imagen:{

        width: '10%',

    },

    boton:{

        margin: 'auto',
        display: 'block',
        
       



    },
    
}