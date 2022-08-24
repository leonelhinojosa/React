import React, {useState} from 'react'
import './item/Item'


 export const  ItemCount = ({stock,onAdd, initial= 1}) => {
  
  const [contador, setContador] = useState(initial)

  
    
  const agregar = () => {
    if(contador < stock){
      setContador(contador + 1)
    }
    if(contador >= stock){ 
       alert("No hay stock")
    }
  }
  const quitar = () => {
    if(contador > 0){
      setContador(contador - 1)
    }
  }
  return (
    <>
    <div style={styles.Div}>
        
        <button style={styles.Quitar} onClick={quitar}>-</button>
        <h1>{contador}</h1>
        <button style={styles.Agregar}onClick={agregar}>+</button>
        
       
    </div>
    <button style={styles.Comprar} onClick={() =>{onAdd(contador);}}>Comprar</button>

    </>
  )
}

export default ItemCount

const styles={

    Div:{
        display: 'flex',
        alignItems: 'center',
        JustifyContent: 'space-between',
        marginTop: '2%',
        marginLeft: '15.5%',
        
        
       
    } ,

    Quitar:{
      borderRadius: '10px',
        width: '80px'
    },

    Agregar:{
      borderRadius: '10px',
      width: '80px'
    },
    Comprar:{ 
      width: '80px',
        marginTop: '1%',
        marginLeft: '24%',
        background: '#33E0FF',
        borderRadius: '10px',

    }
    

}