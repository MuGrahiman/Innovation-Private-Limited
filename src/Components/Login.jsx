import React, { useState } from "react";

const Login = ({onSubmit}) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name||!password)return alert('Please Valid Credentials');
    onSubmit({name,password})
  };
  return (

    <section class="login_part section-padding">
      <div class="container">
        <div class="row align-items-center justify-content-center">
   
          <div class="col-lg-6 col-md-6 card m-5">
            <div class=" card-body ">
              <div className=" card-header mb-5 text-center">
                <h3 className="card-title">Welcome Back ! </h3>
                <p className="card-text lead">Please Sign in .</p>
              </div>
              <form class="row g-3 " onSubmit={handleSubmit}>
                <div class="col-md-12 form-group">
                  <label for="name" class="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="Username"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div class="col-md-12 form-group">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <div class="col-md-12 form-group text-center">
                  <a class="lost-pass" href="#">
                    Forgot password?
                  </a>
                </div>
                <button type="submit" class="btn btn-primary mb-3">
                  Log In
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
