import React from "react";
import "./item.scss";
import { NavLink } from "react-router-dom";

export const Item = ({ product }) => {
    return (
        <div>
            <NavLink to={`/item/${product.id}`} className= "itemCard">
                <div>
                    <img src={product.image} alt={product.name}/>
                    <h3> {product.class}</h3>
                    <h2> {product.name}</h2>
                    <button> VER MÁS</button>
                </div>
            </NavLink>

        </div>
    )
}
