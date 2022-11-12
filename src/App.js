import React from "react";
import Header from "./componentes/Header/Header";
import ProductoLista from './componentes/productos/ProductoLista';
import 'boxicons'; // Para los iconos
function App() {
  return (
    <div className="App">
     <Header/>
     <ProductoLista/>
    </div>
  );
}

export default App;
