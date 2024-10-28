import React from 'react'
import Carrito from "../../img/carrito.png"


const CartWidget = () => {
  return (
    <div>
        <img className='carrito' src={Carrito} alt="" />
        <p className='prd'>0</p>
    </div>
  )
}

export default CartWidget