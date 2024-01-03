import React from "react";
import Card from "./Card";

const Home = ({ products }) => {
  const content = "";
  return (
    <section className="container my-3 ">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {products[0] ? (
          products.map((product) => <Card key={product.id} {...product} />)
        ) : (
          <div className="col m-auto">
          <p className="display-4 lead text-center text-danger">
            No Products Found !...
          </p>
        </div>
        )}
      
      </div>
    </section>
  );
};

export default Home;
