import React from "react";
import { Beneficts } from "../beneficts/Beneficts";
import { CallToAction } from "../call to action/CallToAction";
import { IntroductionText } from "../introductionText/IntroductionText";
import { IndexProducts } from "../indexProducts/IndexProducts";
import "./main.scss";
import { ItemListContainer } from "../itemListContainer/ItemListContainer";

export const Main = () => {
    return (
        <div className="mainContainer">
            <CallToAction> </CallToAction>
            <IntroductionText> </IntroductionText>
            <Beneficts> </Beneficts>
            <ItemListContainer/>
        </div>
    )
}