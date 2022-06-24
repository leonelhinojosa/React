import React from "react"
//import './NavBar.css'
import logo from '../assets/logo.jpg'
import ItemListContainer from '../Containers/ItemListContainer'
import Cartwidget from '../components/cartWidget/CartWidget'



const NavBar = () => {

    const comprar = () => console.log ('seguir comprando')
    return (
        <>
           
            <img style={styles.imagen} src={logo} alt="" />
            <h1 style={styles.Tittle}> Ventas de juegos de PS3/PS4/XBOX </h1>
            <nav style={styles.navStyle}>
                <a style={styles.navStyle}href="inicio">Inicio</a>
                <a style={styles.navStyle}href="ofertas">Ofertas</a>
                <a style={styles.navStyle}href="consultas">Consultas</a>
                <Cartwidget />
            </nav>
            
            <ItemListContainer  numeroTelefono= '1128054858' comprarJuego={comprar}/>

            
           
           
        </>
    )
}
export default NavBar

const styles = {
   
    navStyle:{

       
        color: '#000',
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'space-between',
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