import React from "react";
import Header from "./componentes/Header/Header";
import 'boxicons'; // Para los iconos
import { BrowserRouter as Router } from "react-router-dom";
import Pagina from './componentes/Paginas';
import Carrito from "./Carrito/Carrito";
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Pagina/>
     <Carrito/>
      </Router>
     
    </div>
  );
}

export default App;
