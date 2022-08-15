import React from 'react'
import Item from '../item/Item'

const ItemList = ({data}) => {
    
  return (
    <div>
        <div style={{display:'flex',color: 'black', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap'}}>
        {data.map((product)=><Item key={product.id} product={product}/>)}
        </div>
    </div>
  )
}

export default ItemList