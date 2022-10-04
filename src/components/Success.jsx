import React from "react";
import logo from '../assets/img/logo.png';


const Success = ({id}) => {
    return (
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <h1>Su compra se ha realizado con éxito</h1>
                <p><img src={logo} alt="guava-plant-shop" width="180" /></p>
                <p>La Orden de Compra se generó con el ID: <b>{id}</b></p>
            </div>
        </div>
    )
}

export default Success;

