import React from "react";
 import "./callToAction.scss";

export const CallToAction = () => {
    return (
        <div className="callToAction">
            <div className="content"> 
                <h1> CALIDAD. EXPERIENCIA. RENDIMIENTO.</h1>
                <h2> Sella Grietas Vicaria, desde <b> 1954 </b>, con mas de <b> 70 </b> años en el mercado y con los mejores precios <b> Mayoristas </b> y Minoristas del pais! </h2>
                <button className="contactButton"> PRECIOS MAYORISTAS/MINORISTAS</button>
            </div>
           {/* <img src="./img/callToAction.png" alt="sella grietas vicaria" /> */}
        </div>
    )
}