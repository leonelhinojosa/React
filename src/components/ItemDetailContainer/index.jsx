import React, { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail'
import { useParams } from 'react-router-dom'
//import { getFirestore, doc, getDoc } from 'firebase/firestore'


const oferta = [
    {id:'01',name: 'juego1', juegos: 'Batman Return to Arkham', description:"Batman Return to Arkham", img: 'https://dixgamer.com/wp-content/uploads/2017/09/batman-return-to-arkham-330x419.jpg', price:'$100', stock: 12,tittle: "Grand Theft Auto V Digital", subtittle: "Lo que tenés que saber de este producto", genero: "Genero: Disparos", parrafo: 'Esta entrega de la saga combina historia y jugabilidad de una forma totalmente nueva y permite a los jugadores asumir un rol dentro del juego como estafador callejero, ex convicto o maníaco para construir su propio imperio criminal en una ciudad en decadencia.', peso: 'Peso: 44.86 GB', textos:'Textos en español', idioma:'Idioma: Ingles', juego:'Juego Original y Completo',descarga:'>Descarga desde tu consola', guia:'>incluye guia paso a paso', entrega:'>Entrega inmediata',},
    {id:'02',name: 'juego2', juegos: 'otros',  description:"Battlefield 2042",img: 'https://dixgamer.com/wp-content/uploads/2021/07/battlefield-2042-330x404.jpg',  price:'$150usd', stock: 10,tittle: "Grand Theft Auto V Digital",  subtittle: "Lo que tenés que saber de este producto", genero: "Genero: Disparos", parrafo: 'Esta entrega de la saga combina historia y jugabilidad de una forma totalmente nueva y permite a los jugadores asumir un rol dentro del juego como estafador callejero, ex convicto o maníaco para construir su propio imperio criminal en una ciudad en decadencia.', peso: 'Peso: 44.86 GB', textos:'Textos en español', idioma:'Idioma: Ingles', juego:'Juego Original y Completo',descarga:'>Descarga desde tu consola', guia:'>incluye guia paso a paso', entrega:'>Entrega inmediata',},
    {id:'03',name: 'juego3', juegos: 'God Of War',  description:"God Of War",img: 'https://dixgamer.com/wp-content/uploads/2021/05/god-of-war-ps5.jpg', price:'$400usd', stock: 15,tittle: "Grand Theft Auto V Digital",  subtittle: "Lo que tenés que saber de este producto", genero: "Genero: Disparos", parrafo: 'Esta entrega de la saga combina historia y jugabilidad de una forma totalmente nueva y permite a los jugadores asumir un rol dentro del juego como estafador callejero, ex convicto o maníaco para construir su propio imperio criminal en una ciudad en decadencia.', peso: 'Peso: 44.86 GB', textos:'Textos en español', idioma:'Idioma: Ingles', juego:'Juego Original y Completo',descarga:'>Descarga desde tu consola', guia:'>incluye guia paso a paso', entrega:'>Entrega inmediata',},
    {id:'04',name: 'oferta', juegos: 'otros', description:"Grand Theft Auto Five",   img:'https://dixgamer.com/wp-content/uploads/2016/11/gta-v.jpg', price:'$200usd', stock: 7,tittle: "Grand Theft Auto V Digital",  subtittle: "Lo que tenés que saber de este producto", genero: "Genero: Disparos", parrafo: 'Esta entrega de la saga combina historia y jugabilidad de una forma totalmente nueva y permite a los jugadores asumir un rol dentro del juego como estafador callejero, ex convicto o maníaco para construir su propio imperio criminal en una ciudad en decadencia.', peso: 'Peso: 44.86 GB', textos:'Textos en español', idioma:'Idioma: Ingles', juego:'Juego Original y Completo',descarga:'>Descarga desde tu consola', guia:'>incluye guia paso a paso', entrega:'>Entrega inmediata',},
    {id:'05',name: 'oferta', juegos: 'otros', description:"Combo Battlefield 3-4 y hardline",   img:'https://dixgamer.com/wp-content/uploads/2022/05/combo-battlefield-3-4-y-hardline.jpg', price:'$300usd', stock: 4,tittle: "Grand Theft Auto V Digital",  subtittle: "Lo que tenés que saber de este producto", genero: "Genero: Disparos", parrafo: 'Esta entrega de la saga combina historia y jugabilidad de una forma totalmente nueva y permite a los jugadores asumir un rol dentro del juego como estafador callejero, ex convicto o maníaco para construir su propio imperio criminal en una ciudad en decadencia.', peso: 'Peso: 44.86 GB', textos:'Textos en español', idioma:'Idioma: Ingles', juego:'Juego Original y Completo',descarga:'>Descarga desde tu consola', guia:'>incluye guia paso a paso', entrega:'>Entrega inmediata',},
  ]

export const ItemDetailContainer = () =>{

    const [data, Setdata] =useState({})
    const { detalleId } = useParams();
    useEffect(()=> {
        /*const querydb = getFirestore()
        const queryDoc = doc(querydb, 'products', detalleId)
        getDoc(queryDoc)
        .then(res => Setdata({id: res.id, ...res.data()}))/*/
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(oferta)
            }, 1000);
        })
        getData.then(res => Setdata(res.find(product => product.id === detalleId)) );


    },[detalleId])

    return(

        <ItemDetail data= {data}/>

    )

    }


export default ItemDetailContainer