import React from 'react'
import "./itemdetailcontainer.css"


const ItemDetail = ({product}) => {
  return (
    <div className='contenedor-itemdetail' >
        <img  src={product.img} alt="producto" />
        <div className='datos-p'>
            <h2>{product.name}</h2>
            <p>{product.descripcion}</p>
            <p> Precio:{product.precio}</p>
            <p> {product.categoria}</p>
        </div>
    </div>
  )
}

export default ItemDetail