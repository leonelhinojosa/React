import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import ItemList from '../components/ItemList/ItemList'

import {useParams} from 'react-router-dom';


export const Datos = ({greeting}) => {
  
  const [data, setData] = useState ([])
  const {juegosId} = useParams();
    
  
  
    useEffect(()=>{
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'productos')

      if (juegosId){

        const queryFilter = query(queryCollection, where('category', '==', juegosId))
        getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data()}))))
        
      }else{
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data()}))))
        
      }
      
    },[juegosId])

    
  
  return (
    <>
      <h1>{greeting}</h1>
      <ItemList data={data} />
    </>
  )
}

export default Datos


   