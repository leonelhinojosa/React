import React, { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail'


const oferta = {id: 1, image:"https://dixgamer.com/wp-content/uploads/2016/11/gta-v.jpg", tittle: "Grand Theft Auto V Digital", price: "Desde $3500ars", subtittle: "Lo que tenés que saber de este producto", genero: "Genero: Disparos", parrafo: 'Esta entrega de la saga combina historia y jugabilidad de una forma totalmente nueva y permite a los jugadores asumir un rol dentro del juego como estafador callejero, ex convicto o maníaco para construir su propio imperio criminal en una ciudad en decadencia.', peso: 'Peso: 44.86 GB', textos:'Textos en español', idioma:'Idioma: Ingles', juego:'Juego Original y Completo',descarga:'>Descarga desde tu consola', guia:'>incluye guia paso a paso', entrega:'>Entrega inmediata'    }

export const ItemDetailContainer = () =>{

    const [data, Setdata] =useState({})

    useEffect(()=> {

        const getData = new Promise(resolve =>{

            setTimeout(() => {
                resolve(oferta)
            }, 1000);

        })
        getData.then(res => Setdata(res))

    },[])

    return(

        <ItemDetail data= {data}/>

    )


}

export default ItemDetailContainer