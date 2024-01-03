import React from 'react'

const Home = ({products}) => {
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
    <section className="container my-3 ">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {content}

      {/* <div class="col">
        <div class="card h-100">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a short card.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  </section>
  )
}

export default Home