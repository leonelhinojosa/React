import React from "react"

//import { CartContext } from "../App";
import Cart from '../assets/icono.png';

const CartWidget = () => {
//const nombre = useContext(CartContext)
//console.log('Item', nombre)
    return (
        <>
            
           < img src={Cart} style={styles.Cart} alt="shopping cart" />
            

        
        </>
    )
}

export default CartWidget

const styles = {

    Cart:{
        
        width: '20%',

    },


}
