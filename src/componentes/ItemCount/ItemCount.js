import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stock,initial, }) => {
    
const  [contador, setnuevoval] = useState (initial);
    
   if(contador >= 15) alert ("no hay stock") ;
   const OnAdd = () => {if (contador < stock) console.log("producto añadido")  }  
const Sumar = () => { if(contador < stock)  {setnuevoval (contador +1)  }} ;
const Restar = () => {contador > 0   ? setnuevoval (contador-1) : setnuevoval(contador)};

 return (
    <div className="ItemCount" >
        
        <p>{contador}</p>
        <button onClick={Sumar} >+</button>
        <button onClick={Restar} >-</button>
        <button onClick={OnAdd} >AÑADIR</button>
    </div>
 )

}

export default ItemCount;