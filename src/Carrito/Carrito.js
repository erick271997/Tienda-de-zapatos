import React from "react";
import Card from '../img/images/img03.jpg';


const Carrito = ()=>{
    return(
        <div className="carritos">
            <div className="carritos">
                <div className="carritp__close">
                    <box-icon name="x"></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className="carrito__center">

                    <div className="carrito__item">
                        <img src={Card} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Carrito