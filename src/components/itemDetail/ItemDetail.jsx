import React from "react";
import "./itemDetail.scss"

export const ItemDetail = ({ producto }) => {

    
    return (
        <div className="itemDetailContainer">

            <div className="itemDetailImage">
                <img src={producto.image} alt={producto.name} />
            </div>

            <div className="itemDetail">
                <div className="itemNamePrice">
                    <h3>  {producto.name} </h3>
                </div>

                <div className="itemDetailDescription">
                    <p className="itemDescriptionTitle"> DETALLE DEL PRODUCTO</p>
                    <p>  {producto.description} </p>
                    
                </div>
            </div>



        </div>

    )
}
