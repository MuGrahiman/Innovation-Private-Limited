import React from "react";
import Jumbotron from "../Components/Jumbotron";
import LoginComponent from "../Components/Login";

const Login = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Jumbotron Title={"Login"} />
      <LoginComponent onSubmit={handleSubmit} />
    </>
  );
};

export default Login;
