import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
// import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {

    const OnAdd = (cantidad) => { console.log ( `  "La cantidad añadidad de ${item.name}  es`, cantidad  )   }
  
 return (
    <div className="itemDetail">
      <div className="img-detail-cont">
        <img src={item.img} alt="" className="img-detail" />
      </div>
      <div className="text-container">
        <div className="titulo-container">
            <h1>{item.name}</h1>
            
            <h3 className="precio-container" >${item.price}</h3>
        </div>

        <div><ItemCount  stock = {item.stock} initial= {1} OnAdd = {OnAdd}  /></div>
        
        <p className="p-container">
          {item.description}
        </p>
        
       
      </div>
    </div>
  );
};






export default ItemDetail;