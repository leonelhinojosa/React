import React, { useEffect, useState } from 'react'
import ItemList from './ItemList/ItemList'
import { getData } from '../components/mocks/fakeApi'
import {useParams} from 'react-router-dom';
//import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
const Products = [
  {id:'01',name: 'juego1', juegos: 'Batman Return to Arkham', description:"Batman Return to Arkham", img: 'https://dixgamer.com/wp-content/uploads/2017/09/batman-return-to-arkham-330x419.jpg', price:'100', stock: 12},
  {id:'02',name: 'juego2', juegos: 'otros',  description:"Battlefield 2042",img: 'https://dixgamer.com/wp-content/uploads/2021/07/battlefield-2042-330x404.jpg',  price:'150', stock: 10},
  {id:'03',name: 'juego3', juegos: 'God Of War',  description:"God Of War",img: 'https://dixgamer.com/wp-content/uploads/2021/05/god-of-war-ps5.jpg', price:'400', stock: 15},
  {id:'04',name: 'juego4', juegos: 'otros', description:"Grand Theft Auto Five",   img:'https://dixgamer.com/wp-content/uploads/2016/11/gta-v.jpg', price:'200', stock: 7},
  {id:'05',name: 'juego5', juegos: 'otros', description:"Combo Battlefield 3-4 y hardline",   img:'https://dixgamer.com/wp-content/uploads/2022/05/combo-battlefield-3-4-y-hardline.jpg', price:'$300', stock: 4},
]
export const Datos = ({greeting}) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)
  const {juegosId} = useParams();
    const getProducts = async () => {
      try{
        const respuesta = await getData
        setProductList(respuesta)
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
  
  
    useEffect(()=>{
      /*const querydb = getFirestore()
      const queryCollection = collection(querydb, 'products')/*/
      
      const getData = new Promise ((resolve, reject) =>{
        //acciones
        let condition = true
        setTimeout(()=>{
          if(condition){
            resolve(Products)
          }else{
            reject('salio mal :(')
          }
        },1000)
      });
      
      if(juegosId){
        /*const queryFilter = query(queryCollection, where('category', '==', juegosId))
        getDocs(queryFilter)
        .then(res => SetData(res.docs.map(product => ({ id: product.id, ...product.data()}))))/*/
        getData.then(res => setProductList(res.filter(product => product.juegos === juegosId)) );
      }else{
        /*getDocs(queryCollection)
        .then(res => SetData(res.docs.map(product => ({ id: product.id, ...product.data()}))))/*/
        getData.then(res => setProductList(res) );
      }
      getProducts()
    },[juegosId])

    
  
  return (
    <>
      <h1>{greeting}</h1>
      
      {loading ? <p>Cargando...</p> : <ItemList productList={productList}/> }
    </>
  )
}

export default Datos


   