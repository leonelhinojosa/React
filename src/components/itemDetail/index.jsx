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
                <img className='detail__image' src={data.img} alt="" />
                <div className='content'>
                    <h1>{data.tittle}</h1>
                    <h2>{data.price}</h2>
                    <p className='genero'>{data.genero}</p>
                    <p className='peso'>{data.peso}</p>
                    <p className='idioma'>{data.idioma}</p>
                    <p className='textos'>{data.textos}</p>
                    <p className='juego'>{data.juego}</p>
                    <p className='descarga'>{data.descarga}</p>
                    <p className='guia'>{data.guia}</p>
                    <p className='entrega'>{data.entrega}</p>
                    
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