import React from "react";
import BrandLogo  from '../../public/logo192.png'
const Header = () => {
  return (<>
   

    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-lg">
    <div class="container">
    <a class="navbar-brand" href="#">
          <img
            src={BrandLogo}
            alt="Logo"
            width="24"
            height="24"
            class="App-logo d-inline-block align-text-top"
          />
          Bootstrap
        </a>    
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-start" id="navbarNav">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Bootstrap</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
        <ul class="navbar-nav ms-lg-auto align-items-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
         
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#">
          <button type="button" class="btn bg-transparent position-relative">
            Cart
            <span class="position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded-circle">
              <span class="visually-hidden">New alerts</span>
            </span>
          </button>
        </a>       
           </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
     
        </ul>
      </div>
    </div>
  </nav>
  </>
  );
};

export default Header;
