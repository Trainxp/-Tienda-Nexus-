import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { celulares } from "../../mock/celulares";
import  ItemList  from "./ItemList";



const ItemListContainer = ({greeting}) => {
    const {categoria} = useParams()
    const [items,setItems]= useState([]);
     useEffect(() => {
        const traerCelulares = new Promise ((res,rej)=>{
            setTimeout(() => {
                res(categoria ?  celulares.filter(obj=>obj.categoria === categoria) : celulares)
            }, 1000 );
        });
        traerCelulares.then((data)=>{
            setItems(data);
        }).catch((error)=>{
            console.log(error)})

     },[categoria]);


    return <div >
        <>
        <h1>{greeting}</h1>
        <div><ItemCount  stock = {15} initial= {1}   /></div>
        <ItemList itemsCelulares ={items} />
        </>
    </div>
}

export default ItemListContainer;
