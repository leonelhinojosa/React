
const Products = [
    {name: 'Batman Return to Arkham', id: 1,  img: 'https://dixgamer.com/wp-content/uploads/2017/09/batman-return-to-arkham-330x419.jpg', price:'100', stock: 12},
    {name: 'Battlefield 2042', id: 2, img: 'https://dixgamer.com/wp-content/uploads/2021/07/battlefield-2042-330x404.jpg',  price:'150', stock: 10},
    {name: 'God Of War', id: 3, img: 'https://dixgamer.com/wp-content/uploads/2021/05/god-of-war-ps5.jpg', price:'400', stock: 15},
    {name: 'Grand Theft Auto Five', id: 4,  img:'https://dixgamer.com/wp-content/uploads/2016/11/gta-v.jpg', price:'200', stock: 7},
  ]
  export const getData = new Promise ((resolve, reject) =>{
    //acciones
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(Products)
      }else{
        reject('salio mal :(')
      }
    },2000)
  })