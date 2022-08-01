
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext ()

const Provider = (props) =>{
    const [cart,setCart]= useState ([]);
    const [total,setTotal] = useState(0)

    useEffect(()=>{console.log(cart);},[cart])

    const totalCart =()=>{
        let total = 0
        cart.forEach(item => total += (item.price * item.stock ))
        setTotal (total)

    }
    useEffect(() => {
        console.log(cart)
        totalCart()
    }, [cart])



const addToCart = (item,cantidad) => {
    if (isInCart(item.id)) {
        alert ("esta en el carrito")
        
    } else {
        setCart ([...cart,{item,cantidad}])
    }
    
  

}

const deleteOne =(id) =>{
   const productosFiltrodos=cart.filter((prod)=>prod.id !==id);
   setCart(productosFiltrodos)
};


const deleteAll = () =>{
    setCart([])
}


const isInCart = (id) => {
    return cart.some (prod => prod.id === id)
}


    return (
        <CartContext.Provider value = {{cart, addToCart, deleteAll , deleteOne, total }}  >
            {props.children}

        </CartContext.Provider>
    )



}



export default Provider