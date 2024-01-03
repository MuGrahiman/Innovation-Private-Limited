import React, { useEffect, useState } from "react";
import Jumbotron from "../Components/Jumbotron";

const Cart = () => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);
  console.log(products);
  const content = products[0] ? (
    products.map((product) => {
      const {
        brand,
        category,
        description,
        discountPercentage,
        id,
        images,
        price,
        rating,
        stock,
        thumbnail,
        title,
      } = product;
      return (
        <div class="col" key={id}>
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
              <p class="card-text  text-truncate">{description}</p>
              <p class="text-body-secondary p-0 py-2 m-0 ">
                Price: <b className="text-warning">${price}</b>
              </p>
              {/* <div class="card-footer bg-transparent p-0 m-0">
                
              </div> */}
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <p className="display-4 lead text-center text-danger">
      No Product Found !...
    </p>
  );
  return (
    <div>
      <Jumbotron Title={"Cart List"}>
    
      </Jumbotron>

      <section class="container my-3 mb-5">
        <div class="cart_inner">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="media">
                      <div class="d-flex">
                        <img
                          src="img/arrivel/arrivel_1.png"
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                      <div class="media-body">
                        <p>Minimalistic shop for multipurpose use</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h5>$360.00</h5>
                  </td>
                  <td>
                    <div class="input-group w-25">
                      <span class=" btn btn-outline-secondary" type="button">
                        +
                      </span>
                      <input
                        type="text"
                        value="1"
                        min="0"
                        max="10"
                        title="Quantity:"
                        class="form-control input-number"
                      />

                      <span class="btn btn-outline-secondary" type="button">
                        -
                      </span>
                    </div>
                  </td>
                  <td>
                    <h5>$720.00</h5>
                  </td>
                </tr>
                <tr class="bottom_button">
                <td>
                  <a class="btn_1" href="#">Update Cart</a>
                </td>
                <td></td>
                <td></td>
                <td>
                  <div class="cupon_text float-right">
                    <a class="btn_1" href="#">Close Coupon</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>
                  <h5>Subtotal</h5>
                </td>
                <td>
                  <h5>$2160.00</h5>
                </td>
              </tr>
              </tbody>
            </table>
            <div class="checkout_btn_inner float-right">
              <a class="btn btn-outline-secondary" href="#">
                Continue Shopping
              </a>
              <a class="btn btn-outline-secondary" href="#">
                Proceed to checkout
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;