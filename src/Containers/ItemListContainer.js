import React from "react"

const Datos = ({ numeroTelefono, comprarJuego}) => {

    return (
        <>
           
           <p style={styles.navStyle}>Numero telefonico:{numeroTelefono}</p>
          
           <a style={styles.navStyle}>

           <button  onClick={comprarJuego}>Comprar</button>
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
