import React from "react";
 import "./callToAction.scss";

export const CallToAction = () => {
    return (
        <div className="callToAction">
            <div className="callToActionImg"><img src="../img/LOGO VICARIA PNG.png" alt="productos vicaria" /></div>

            <div className="callToActionText"> 
                <div className="text"><h1> Vicaria, 70 años de experiencia</h1></div>
                <div>
                  <a className="contactButton"> CONTACTANOS</a>  
                </div>
            </div>

        </div>
    )
}