import React, { useContext } from 'react'
import { useDispatchContext } from '../Context/Store';

const Card =React.memo(({Product}) => {
  const { addToCart } = useDispatchContext();
  const {thumbnail,title,brand,category,description,price} = Product
  return ( 
        <div class="col">
          <div class="card h-100"> 
            <img src={thumbnail} class="card-img-top" alt="..." height="200" />
            <div class="card-body">
              <div class="card-header bg-transparent text-start p-0 mb-3">
                <h4>{title}</h4>
              </div>
              <h6 class="card-title p-0 m-0">Brand:{brand}</h6>
              <p class="card-text ">
                <small class="text-body-secondary">{category}</small>
              </p>
              <p class="card-text  text-truncate p-0 m-0">{description}</p>
              <p class="text-body-secondary p-0 py-2 m-0 ">
                Price: <b className="text-warning">${price}</b> 
                </p>
                <button href="#" class="btn btn-outline-primary" onClick={()=>addToCart(Product)}>Add To Cart</button>

            </div>
          </div>
        </div>
      ); 
})

export default Card