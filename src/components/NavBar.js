import React from "react"

import logo from '../assets/logo.jpg'
import Cartwidget from './CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
    
      
    
    return (
        <>
           <header style={styles.Header}>

            <Link to="/"><img style={styles.imagen} src={logo} alt="" /></Link>
           
            <nav style={styles.navStyle}>
                
                <NavLink style={styles.navStyle}to='/'>Inicio</NavLink>
                <NavLink style={styles.navStyle}to='/juegos/otros'>Ofertas</NavLink>
                <NavLink style={styles.navStyle}to='/juegos/Consultas'>Consultas</NavLink>
               
               <NavLink style={styles.navStyle}to="/Cart"> <Cartwidget /> </NavLink>
            </nav>
            </header>
            
            <h1 style={styles.Tittle}> Ventas de juegos de PS3/PS4/PS5/XBOX </h1>
            
            
            
           
        </>
    )
}
export default NavBar

const styles = {
   
    Header:{
        
        background: '#21889C'


    },

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
        marginRight: '70%',
        width: '10%',

    },

    boton:{

        margin: 'auto',
        display: 'block',
        
       



    },
    
}