import React, { useEffect, useState } from "react";
import Jumbotron from "../Components/Jumbotron";
import { useStateContext } from "../Context/Store";
import { Link } from "react-router-dom";

const Cart = React.memo(() => {
  const { cart } = useStateContext();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(cart);
  }, [cart]);
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
        <>
          <tr key={id}>
            <td>
              <img
                src={thumbnail}
                height={"10px"}
                width={"100"}
                alt=""
                class="img-fluid"
              />
            </td>
            <td>
                <p className="lead ">{title}</p>
            </td>
            <td>
              <h5>{price}</h5>
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
              <h5>{price}</h5>
            </td>
          </tr>
        </>
      );
    })
  ) : (
    <tr className="display-4 lead text-center text-danger">
      No Product Found !...
    </tr>
  );
  const subTotal=products.length && products.reduce((total,product) => total + product.price,0);

  return (
    <div>
      <Jumbotron Title={"Cart List"}></Jumbotron>

      <section class="container my-3 mb-5">
        <div class="cart_inner">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col"></th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>

              <tbody>
                {content}
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td>
                    <h5>${subTotal}</h5>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between float-right">
              <Link to={'/'} class="btn btn-outline-secondary" >
                Continue Shopping
              </Link>
              <Link class="btn btn-outline-secondary" >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Cart;
