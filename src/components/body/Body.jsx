import React from "react";
import { NavBar } from "../navbar/NavBar"
import { Introduction } from "../introduction/Introduction";
import { IndexProducts } from "../indexProducts/IndexProducts";

export const Body = () => {
    return (
        <div>
            <NavBar> </NavBar>
            <Introduction/> 
            <IndexProducts/> 
        </div>
    )
}