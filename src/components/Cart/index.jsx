import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { Link } from "react-router-dom";
import ItemCart from '../ItemCart'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Cart = () => {
    const {cart, totalPrice} = useCartContext();
    const MySwal = withReactContent(Swal)
    const order = {
        buyer: {
            name: 'pablo',
            email: 'pablo@gmail.com',
            phone: '1128054858',
        },
        items: cart.map(product => ({id: product.id, description: product.description, price: product.price,quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const orderCollection = collection(db,'orders');
        addDoc(orderCollection,order)
        .then(({id})=>console.log(id))

        MySwal.fire({
            title: <strong>Compra exitosa!</strong>,
            html: <i>Gracias por elegirnos!</i>,
            icon: 'success'
          })

    }


 

    if(cart.length === 0){
    return(
        <div className='centrar'>
            <p style={styles.Elementos}>No hay elementos en el carrito</p>
            <Link to='/'><button style={styles.Comprar}>Comprar Juegos</button></Link>
        </div>
    );
    }
    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <div className='centrar'>
                <p style={styles.Precio}>Total: ${totalPrice()}</p>
                <button style={styles.Boton} onClick={handleClick}>Emitir compra</button>
            </div>
        </>
    )
}



export default Cart

const styles = {

    Precio:{
        marginLeft: '47.5%',
        fontFamily: 'Times New Roman, Times, Garamond, Georgia, CambriaTim',
        fontSize: '150%',

    },

    Boton:{

        borderRadius: '10px',
        width: '140px',
        marginLeft: '47%'

    },

    Comprar:{
        width: '170px',
        borderRadius: '10px',
        marginLeft: '43%',
    },
    
    Elementos:{

       
        marginLeft: '39%',
        fontSize: '150%',
    }

}