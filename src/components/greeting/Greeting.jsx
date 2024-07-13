import React from "react";
import "./greeting.scss";
import { useParams } from "react-router-dom";
export const Greeting = () => {
    const {pageURL} = useParams ();
    let title;
    let subtitle;

    switch (pageURL) {
        case "Productos":
        title = "Productos";
        subtitle = "Con mas de 70 años de trayectoria a nivel Internacional, Vicaria ofrece productos de alta calidad a un precio accesible para mayoristas como minoristas ";
            break;

        case "Contacto": 
        title = "Contacto";
        subtitle = "Contactanos por nuestras diversas redes sociales y de contacto!";
        break;
        
        case "Acerca de Vicaria":
        title = "Acerca de Vicaria";
        subtitle = "Vicaria es una marca familiar creada en 1954, recorriendo todo el pais y ganando renombre ;tanto en Argentina como en sus paises Limitrofes"
        break;

        case "Canales de Venta": 
        title = "Canales de Venta";
        subtitle = "Podes conseguir nuestros productos en Facebook Marketplace tanto como en Mercado Libre!";
        break;

        default:
            title = "Pagina no encontrada";
            break;
    }
    return (
        <div className="greetingContainer">
            <img src="./img/motor.jpg" alt="motor" /> 
            <h3> {title} </h3>
            <h4> {subtitle} </h4>
        </div>
    )
}