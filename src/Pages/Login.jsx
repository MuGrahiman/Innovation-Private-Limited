import React from "react";
import Jumbotron from "../Components/Jumbotron";
import LoginComponent from "../Components/Login";

const Login = () => {
  const handleSubmit = (data) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
        expiresInMins: 60,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <>
      <Jumbotron Title={"Login"} />
      <LoginComponent onSubmit={handleSubmit} />
    </>
  );
};

export default Login;
