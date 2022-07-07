import React, { useState, useEffect } from 'react'
import ItemDetail from '../itemDetail'


const film = {id: 1, image:"https://dixgamer.com/wp-content/uploads/2016/11/gta-v.jpg", tittle: "Grand Theft Auto V", price: "$200"  }

export const ItemDetailContainer = () =>{

    const [data, Setdata] =useState({})

    useEffect(()=> {

        const getData = new Promise(resolve =>{

            setTimeout(() => {
                resolve(film)
            }, 3000);

        })
        getData.then(res => Setdata(res))

    },[])

    return(

        <ItemDetail data= {data}/>

    )


}

export default ItemDetailContainer