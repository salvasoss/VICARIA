import React from "react"
import { useState, useEffect } from "react"
import { ItemDetail } from "../itemDetail/ItemDetail"
import { getProducts, getOneProduct } from "../../mock/vicariaProducts"
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap"


 const ItemDetailContainer = () => {
        const {itemId} = useParams()
    const [loading, setLoading] = useState (false)
      const [producto, setProducto] = useState ({}) 

     useEffect (() => {
        setLoading(true)
         getOneProduct (itemId)
         .then((res) => setProducto(res))
         .catch ((error) => console.log(error))
         .finally (() => setLoading(false))
         
     }, [])

     if (loading) {
        <Spinner animation="border"/>
    }

    return (
        <div>
            <ItemDetail producto = {producto} />
        </div>
    )
}

export default ItemDetailContainer
