import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

 const Cart = () => {
  const {cart,deleteAll,deleteOne ,total}= useContext(CartContext);

  if (cart.length === 0) {
      return (<h2> 
        Aun no hay productos en el carrito :C , Ir al <Link to="/">home</Link> 
      </h2>);
  };


  return (
    <div>
          {cart.map((prod) => (
                <div
                    key={prod.id}
                    style={{
                        border: '1px solid black',
                        margin: '10px',
                        display: 'flex',
                    }}
                >
                    <img src={prod.img} width="70px" alt={prod.name} />
                    <div>
                        <h2>{prod.name}</h2>
                        <h2>$ {prod.price}.-</h2>
                    </div>
                    <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
                </div>
            ))}
            <button onClick={deleteAll}>Eliminar todos los productos</button>
            <h3>Total: $ {total} </h3>

      </div>
  );
};


export default Cart;
