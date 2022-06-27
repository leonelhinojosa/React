import React from "react"
import  ItemCount  from './ItemCount'
const Datos = ({ numeroTelefono, comprarJuego}) => {

    return (
        <>
           
           <p style={styles.navStyle}>Numero telefonico:{numeroTelefono}</p>
          
           <a style={styles.navStyle}>

           
           </a>
           
           
        </>
    )

    

}
export default Datos



    const styles = {

        navStyle:{
            color: '#000',
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'center',
    
    
        },
    }
