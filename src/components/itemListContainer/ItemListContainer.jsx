import React from "react";
import "./itemListContainer.scss";
import { useState, useEffect } from "react";
import { getProducts } from "../../mock/vicariaProducts";
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';


export const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (false)
    const {categoryId} = useParams ()


    useEffect (() => {
        setLoading(true)
        getProducts ()
        .then ((res) =>{
            if (categoryId){
                setProducts(res.filter ((products) => products.category === categoryId))
            }else {
                setProducts(res)
            }
        })
        .catch ((error) => console.log(error, "Error"))
        .finally (() => setLoading(false))
    }, [categoryId]) //array de dependencias: solo se ejecuta la promesa cuando aparezca categoryID
    
    if (loading) {
        return <Spinner animation="border"/>;
    }

    return (
        <div className="backgroundContainer">
            <div className="productsTitle"> 
                <h3 id="productos"> NUESTROS PRODUCTOS</h3>
                <h4> Con mas de 70 años de experiencia, hemos desarrollado la formula perfecta para cada producto, adecuandose a la necesidad del comprador. </h4>
            </div>

            {
                categoryId 
                ?  <h1> {greeting} <span> {categoryId}</span></h1>
                : <h1> {greeting} </h1>
            }
           
            <ItemList products = {products}/> 

        </div>
    )
}