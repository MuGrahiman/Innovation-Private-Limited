import React, { useContext } from "react";
import BrandLogo from "../Img/logo192.png";
import { Context } from "../Context/Contex";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useStateContext } from "../Context/Store";
const Header = () => {
  const { isAuthenticated,cart} = useStateContext();

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-lg">
        <div class="container">
          <Link to={'/home'}
            class="navbar-brand d-flex gap-3 align-items-center justify-content-center"
          >
            <img
              src={BrandLogo}
              alt="Logo"
              width="25"
              height="25"
              class="App-logo d-inline-block align-text-top"
            />
            Bootstrap
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-start" id="navbarNav">
            <div class="offcanvas-header">
              <Link to={'/home'}
                class="navbar-brand d-flex gap-3 align-items-center justify-content-center"
                  >
                <img
                  src={BrandLogo}
                  alt="Logo"
                  width="25"
                  height="25"
                  class="App-logo d-inline-block align-text-top"
                />
                Bootstrap
              </Link>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <ul class="navbar-nav ms-lg-auto align-items-center">
              <li class="nav-item">
                <Link to={'/home'} class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to={'/cart'} class="nav-link">
                  <button
                    type="button"
                    class="btn bg-transparent position-relative"
                  >
                    Cart
                  { cart>0  && <span class="position-absolute small top-0 start-10 translate-middle px-1 m-0 bg-danger border border-light rounded-circle">
                      <small class="text-white">{cart}</small>
                    </span>}
                  </button>
                </Link>
              </li>

              <li class="nav-item">
                {isAuthenticated ? (
                  <Link
                    class="nav-link"
                            data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    proile
                  </Link>
                ) : (
                  <Link to={'/'} class="nav-link">
                    Login
                  </Link>
                )}
               <Profile/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
