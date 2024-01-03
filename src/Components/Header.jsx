import React, { useContext } from "react";
import BrandLogo from "../Img/logo192.png";
import { Context } from "./Contex";
import userImage from "../Img/josephgreyuser.png";
import Modal from "./Modal";
const Header = () => {
  const { isAuthenticated, currentUser, clearUser } = useContext(Context);
  // console.log(Object.keys(currentUser).length)
  // console.log(JSON.parse(currentUser))

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-lg">
        <div class="container">
          <a
            class="navbar-brand d-flex gap-3 align-items-center justify-content-center"
            href="#"
          >
            <img
              src={BrandLogo}
              alt="Logo"
              width="25"
              height="25"
              class="App-logo d-inline-block align-text-top"
            />
            Bootstrap
          </a>
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
              {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Bootstrap</h5> */}
              <a
                class="navbar-brand d-flex gap-3 align-items-center justify-content-center"
                href="#"
              >
                <img
                  src={BrandLogo}
                  alt="Logo"
                  width="25"
                  height="25"
                  class="App-logo d-inline-block align-text-top"
                />
                Bootstrap
              </a>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <ul class="navbar-nav ms-lg-auto align-items-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <button
                    type="button"
                    class="btn bg-transparent position-relative"
                  >
                    Cart
                    <span class="position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded-circle">
                      <span class="visually-hidden">New alerts</span>
                    </span>
                  </button>
                </a>
              </li>

              <li class="nav-item">
                {isAuthenticated ? (
                  <a
                    class="nav-link"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    proile
                  </a>
                ) : (
                  <a class="nav-link" href="#">
                    Login
                  </a>
                )}
                <Modal>
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <small className="lead"> User Name:</small>{" "}
                        <b> {currentUser?.username}</b>
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body ">
                      <div class="modal-header">
                        <img
                          src={currentUser?.image}
                          class="img-fluid rounded-circle mx-auto"
                          alt="..."
                        ></img>
                      </div>
                      <div class="row g-2">
                        <div class="col-md">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              id="floatingInputGrid"
                              placeholder="name"
                              value={currentUser?.firstName}
                            />
                            <label for="floatingInputGrid">First Name</label>
                          </div>
                        </div>
                        <div class="col-md">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              id="floatingInputGrid"
                              placeholder="name"
                              value={currentUser?.lastName}
                            />
                            <label for="floatingInputGrid">Last Name</label>
                          </div>
                        </div>
                      </div>
                      <div class="row g-2">
                        <div class="col-md">
                          <div class="form-floating">
                            <input
                              type="email"
                              class="form-control"
                              id="floatingInputGrid"
                              placeholder="name@example.com"
                              value={currentUser?.email}
                            />
                            <label for="floatingInputGrid">Email</label>
                          </div>
                        </div>
                        <div class="col-md">
                          <div class="form-floating">
                            <input
                              type="text"
                              class="form-control"
                              id="floatingInputGrid"
                              placeholder="Gender"
                              value={currentUser?.gender}
                            />
                            <label for="floatingInputGrid">Gender</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-outline-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        onClick={clearUser}
                        data-bs-dismiss="modal"
                        type="button"
                        class="btn btn-outline-danger"
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </Modal>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
