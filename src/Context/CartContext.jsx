import React,{useState,useContext} from "react";

export const CartContext = React.createContext ([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {


    const [cart, setCart] = useState([]);

    const addProduct = (item, quantity) => {
      
        if(isInCart(item.id)) {
            setCart(cart.map(producto => {
                return producto.id === item.id ? { ...producto, quantity: producto.quantity + quantity}: producto
            }));
        }else {
            setCart([...cart, {...item, quantity}]);
        }
    }

    console.log('carrito:',cart);

    const clearCart = () => setCart([]);
    const isInCart = (id) => cart.find(producto => producto.id === id) ?true : false;
    const removeProduct =(id) => setCart([cart.filter(producto => producto.id !== id)]);


    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct 
        }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider