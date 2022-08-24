import React, {useState} from 'react'
import './itemDetail.css'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext' 

export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext();
    const onAdd = (quantity) =>{
        setGoToCart (true)
        addProduct(data,quantity);
        
  
      }

    return (

        <div className="container">
            <div className='detail'>
                <img className='detail__image' src={data.image} alt="" />
                <div className='content'>
                    <h3>Titulo: {data.description}</h3>
                    <h3>Precio ${data.price}</h3>
                    <h3>Idioma: Ingles</h3>
                    <h3>Descarga: Desde tu consola</h3>
                    
                 
                  
                    
                    {
                        goToCart ? <Link to='/CartWidget'>Terminar Compra</Link>
                        : <ItemCount initial={1} stock={5} onAdd={onAdd} />

                        
                    }
                    

                    
                </div>
            </div>
        </div>

    )


}

export default ItemDetail