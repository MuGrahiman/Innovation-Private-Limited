import React, { useContext } from "react";
import Modal from "./Modal";
import { useDispatchContext, useStateContext } from "../Context/Store";

const Profile = React.memo(() => {
  const {  clearUser } = useDispatchContext();
  const { currentUser } =useStateContext()
  return (
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
  );
})
export default Profile;
