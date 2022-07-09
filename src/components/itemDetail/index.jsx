import React from 'react'
import './itemDetail.css'

export const ItemDetail = ({ data }) => {

    return (

        <div className="container">
            <div className='detail'>
                <img className='detail__image' src={data.image} alt="" />
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
                    <button className='boton'>Comprar</button>
                </div>
            </div>
        </div>

    )


}

export default ItemDetail