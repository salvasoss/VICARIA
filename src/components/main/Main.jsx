import React from "react";
import { Beneficts } from "../beneficts/Beneficts";
import { CallToAction } from "../call to action/CallToAction";
import { IntroductionText } from "../introductionText/IntroductionText";
import { IndexProducts } from "../indexProducts/IndexProducts";
import "./main.scss";

export const Main = () => {
    return (
        <div className="mainContainer">
            <CallToAction> </CallToAction>
            <IntroductionText> </IntroductionText>
            <Beneficts> </Beneficts>
            <IndexProducts/>
        </div>
    )
}