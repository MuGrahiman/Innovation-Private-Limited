import React, { useEffect, useState } from "react";
import Jumbotron from "../Components/Jumbotron";
import HomeComponent from "../Components/Home";

const Home = () => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);
  console.log(products);

  return (
    <div>
      <Jumbotron Title={"Home"}>
        <div class="container d-flex flex-column-reverse flex-md-row justify-content-between mt-5">
          <span className="">
            <div class="dropdown-center">
              <button
                class="btn btn-outline-secondary dropdown-toggle rounded-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    High
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Low
                  </a>
                </li>
              </ul>
            </div>
          </span>

          <form class="d-flex col-lg-6 mx-auto justify-content-between ">
            <div class="input-group mb-3 ">
              <input
                type="text"
                class="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button
                type="submit"
                class="btn btn-outline-secondary input-group-text"
              >
                search
              </button>
            </div>
          </form>
        </div>
      </Jumbotron>

   <HomeComponent products={products}/> 
    </div>
  );
};

export default Home;
