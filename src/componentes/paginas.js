import React from "react";
import { Routes, Route } from "react-router-dom";
 // estos para el router
import Inicio from './inicio/Inicio';
import ProductoLista from "./productos/ProductoLista";




const Pagina =  ()=> { // esta es lo mismo que fuction, ya costa le dice funcion flecha 
    return(
        <section>
          <Routes>
            <Route path="/" element = {<Inicio/>}></Route>
            <Route path="/productos" element = {<ProductoLista/>}></Route>
          </Routes>
        </section>
      );
    
}

export default Pagina;