import React from "react";
import Header from "./componentes/Header/Header";
import 'boxicons'; // Para los iconos
import { BrowserRouter as Router } from "react-router-dom";
import Pagina from './componentes/Paginas';
import Carrito from "./Carrito/Carrito";
import {DataProvider} from './Context/Dataprovider';
function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header/>
       <Carrito/>
      <Pagina/>
      </Router>
     
    </div>
    </DataProvider>
  );
}

export default App;
