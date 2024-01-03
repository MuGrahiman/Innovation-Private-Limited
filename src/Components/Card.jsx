import React, { useContext } from 'react'
import { Context } from './Contex';

const Card = ({thumbnail,title,brand,category,description,price}) => {
  const { addToCart } = useContext(Context);
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
                <a href="#" class="btn btn-outline-primary" onClick={addToCart}>Add To Cart</a>

            </div>
          </div>
        </div>
      );
}

export default Card