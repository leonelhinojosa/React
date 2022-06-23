import React from "react"

const Datos = ({ numeroTelefono, comprarJuego, NavBar, name}) => {

    return (
        <>
           
           <p>Numero telefonico:{numeroTelefono}</p>
          

           <button onClick={comprarJuego}>Comprar</button>
           
           
        </>
    )
}
export default Datos