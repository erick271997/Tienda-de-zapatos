import React,{useContext} from 'react';
import IMG from '../../img/images/img01.jpg';
import {DataContext} from '../../Context/Dataprovider'
import ProductoItem from './ProductoItem';


function ProductoLista() {

  const value = useContext(DataContext)
  const [productos] = value.productos


  console.log(productos);
  return (
    <>
  <h1 className='title'>PRODUCTOS</h1>
    <div className='productos'>
      {
        productos.map(productos=>(
           <ProductoItem 
           key={productos.id}
           id={productos.id}
           title={productos.title}
           price={productos.price}
           image={productos.image}
           category={productos.gategory}
           cantidad={productos.cantidad}

           
           />
        ))
      }
      
   
    </div>
 </>

  );
}

export default ProductoLista;
