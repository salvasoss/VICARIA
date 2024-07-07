import React from "react";
import "./callToAction.scss";
import Carousel from "../carousel/Carousel";


export const CallToAction = () => {
    return (

        <div className="introduction">

            <div className="callToAction">
                <div className="content">
                    <h2> CALIDAD. EXPERIENCIA. RENDIMIENTO.</h2>
                    <h3> <b> Sella Grietas</b> Vicaria, desde <b> 1954 </b>, con mas de <b> 70 </b> años en el mercado y con los mejores precios <b> Mayoristas </b> y <b>Minoristas </b> del pais! Productos elaborados con materia prima importada de alta calidad  </h3>
                    <button className="contactButton"> PRECIOS MAYORISTAS/MINORISTAS</button>
                </div>


            </div>

            <div className="carousel">
                <Carousel />
            </div>




        </div>


    )
}