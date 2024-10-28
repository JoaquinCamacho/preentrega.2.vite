import { useState,useEffect } from "react"
import { getProducts} from "../Data/data"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"


const ItemListContainer = () => {
    
    const[products,setProducts] = useState([])
    const {idCategoria}= useParams()
    

    useEffect(()=>{
        3
        
        getProducts()
        .then ((dataProducts)=>{
            if(idCategoria){
                const filterProducts = dataProducts.filter((product)=>product.categoria === idCategoria)
                setProducts(filterProducts)
            }else{
                setProducts(dataProducts)
            }
        })
        .catch((error)=>{
            console.error(error)
        })
        .finally(()=>{
            console.log("Se finalizo la promesa")
        })
    },[idCategoria])




  return (
    <div className="item-list-container">
        <ItemList  products= {products}/>

    </div>
  )
}

export default ItemListContainer