import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./Cart.css" ;

 const Cart = () => {
  const {cart,deleteAll,deleteOne ,suma}= useContext(CartContext);

  if (cart.length === 0) {
      return (<h2> 
        Aun no hay productos en el carrito :C , Ir al <Link to="/">home</Link> 
      </h2>);
  };


  return (
    <div>
          {cart.map((prod) => (
                <div className="cartview"
                    key={prod.id}
                   >
                    <img className="imgcartview" src={prod.img} alt={{}} />
                    <div>
                        <h2>{prod.name}</h2>
                        <p>$ {prod.price}.-</p>
                    </div>
                    <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
                </div>
            ))}
            <button onClick={deleteAll}>Eliminar todos los productos</button>
            <h2>Total: ${suma}</h2>

      </div>
  );
};


export default Cart;
