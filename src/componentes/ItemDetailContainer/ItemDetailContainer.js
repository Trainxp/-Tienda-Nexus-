import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"
import { celulares } from "../../mock/celulares";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";


const ItemDetailContainer = () => {
    const [cargando, setCargando] = useState(true);
    const [item, setItem] = useState({})
    const {id} = useParams()
  
    const traerItemPorId = () => {
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(celulares.find(obj => obj.id === id))
        }, 1000)
      });
    };
  
    useEffect(()=>{
      traerItemPorId().then(respuesta=>{
        setItem(respuesta)
        setCargando(false);
      }      
      )
    },[id])
  
  
    return (
       <> {cargando ? <Loader/>  : <ItemDetail item={item}/> }  </> 
     
    )
  }
  
  export default ItemDetailContainer
