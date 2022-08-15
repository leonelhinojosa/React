import React from 'react'
//import {ItemCount} from '../ItemCount'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
 
  
  console.log(product)
  const {image, name, description,price}= product
  
  return (
    
    <div className="card" style={{width:'20rem', margin:'.5rem'}}>
     <img src={image}className="card-img-top" alt={name}/>
     <div className="card-body">
         <p className="card-text">{name}</p>
         <p className="card-text">{description}</p>
         <p>{price}</p>
     </div>
     
    

    <Link to = { `detalle/${product.id}`} className = "product">
    
    <button className='btn btn-primary'>Ver detalle</button>

    </Link>
    </div>
  )
}

export default Item