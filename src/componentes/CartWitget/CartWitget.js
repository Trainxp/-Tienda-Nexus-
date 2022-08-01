import CartShop from "./img/Carshop.png"
import "./CartWitget.css"
import { CartContext } from "../../context/cartContext"
import { useContext } from "react"

const CartWitget = ()=> {
      const {cart} = useContext(CartContext)
      return  ( <>    <img className="ImgShop" src ={CartShop} alt="Cartshop"></img>
      
      <spam className = "cart" >{cart.length}</spam>
      </>
      )

      
        
   
}

export default CartWitget;