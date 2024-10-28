import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <div className='item'>
              <img src={product.img} className='img-item' alt="" />
              <h2 className='text-item'>{product.nombre}</h2>
              <p className='text-item' > ${product.precio}</p>
          
             <Link className="link-detalles" to={"/detail/"+ product.id}> Ver detalles</Link> 
          </div>
  )
}

export default Item