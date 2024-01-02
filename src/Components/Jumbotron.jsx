import React from 'react'

const Jumbotron = ({children,Title}) => {
  return (

    <section class="p-5 mb-4 bg-body-tertiary rounded-3 text-center">
      <div class="container-fluid py-5">
        <h2 class="display-5 fw-bold">{Title}</h2>
        {children}
     </div>
    </section>

  )
}

export default Jumbotron