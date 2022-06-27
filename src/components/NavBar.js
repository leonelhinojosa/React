import React from "react"
//import './NavBar.css'
import logo from '../assets/logo.jpg'
import Cartwidget from '../components/CartWidget'



const NavBar = () => {
    
      
    
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