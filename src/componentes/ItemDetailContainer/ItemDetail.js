import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
// import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
  
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

        <div><ItemCount  stock = {15} initial= {1}   /></div>
        
        <p className="p-container">
          {item.description}
        </p>
        
       
      </div>
    </div>
  );
};






export default ItemDetail;