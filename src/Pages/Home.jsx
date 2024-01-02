import React, { useEffect, useState } from "react";
import Jumbotron from "../Components/Jumbotron";
import HomeComponent from "../Components/Home";

const Home = () => {
  const [products, setProducts] = useState({});
  const [category, setCategory] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const getProducts = async () =>
    await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));

  const getSearchData = async (e) => {
    e.preventDefault();
    if (!searchTerm) return getProducts();
    await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  };

  const wipeOut = () => {
    getProducts();
    setSearchTerm("");
  };
  useEffect(() => {
    getProducts();
  }, []);
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

          <form
            class="d-flex col-lg-6 mx-auto justify-content-between "
            onSubmit={getSearchData}
          >
            <div class="input-group my-3 m-md-0">
              <span onClick={wipeOut} className="input-group-text">
                x
              </span>
              <input
                type="text"
                class="form-control"
                id="search_input"
                placeholder="Search Product Name ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                class="btn btn-outline-secondary input-group-text"
              >
                search
              </button>
            </div>
          </form>
          <span className="">
            <div class="dropdown-center">
              <button
                class="btn btn-outline-secondary dropdown-toggle rounded-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort
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
        </div>
      </Jumbotron>

      <HomeComponent products={products} />
    </div>
  );
};

export default Home;
