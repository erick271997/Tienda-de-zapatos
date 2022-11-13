 import React, { createContext, useState, useEffect } from "react";
//Para la API
 import Data from '../Data.js'; 



 export const DataContext = createContext();

 export const DataProvider = (props)=>{
     const [productos, setProductos] = useState([])
 

useEffect(()=>{
    const productos=Data.items
if (productos){
    setProductos(productos)
}else{
    setProductos([])
}
},[])
    const value ={
        productos: [productos]
    }

    return(
        <DataContext.Provider value={value}>

            {props.children}
        </DataContext.Provider>
    )
 }