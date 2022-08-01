import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { celulares } from "../../mock/celulares";
import  ItemList  from "./ItemList";
// import {doc,getDoc, getFirestore} from "firebase/firestore"



const ItemListContainer = ({greeting}) => {
    const {categoria} = useParams()
    const [cargando, setCargando] = useState(true);
    const [items,setItems]= useState([]);
     useEffect(() => {
        const traerCelulares = new Promise ((res,rej)=>{
            setCargando(true)
            setTimeout(() => {
                res(categoria ?  celulares.filter(obj=>obj.categoria === categoria) : celulares)
            }, 1000 );
        });
        traerCelulares.then((data)=>{
            setItems(data);
            setCargando(false);
        }).catch((error)=>{
            console.log(error)})

     },[categoria]);


    return <div >
        <>
        <h1>{greeting}</h1>
        {cargando ? <Loader/>  : <ItemList itemsCelulares ={items} /> }        
        </>
    </div>
}




export default ItemListContainer;
