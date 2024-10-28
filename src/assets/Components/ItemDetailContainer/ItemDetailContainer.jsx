import { useState, useEffect } from "react"
import { getProducts } from "../Data/data.js"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product,setProduct] = useState({})
    const {idProduct} =useParams()

    useEffect(()=>{
        getProducts()
        .then((data)=>{
            const findProduct = data.find( (product)=>product.id === parseInt(idProduct))
            setProduct(findProduct)
        })
    },[idProduct])

    return (
        <ItemDetail  product={product}/>
  )
}

export default ItemDetailContainer