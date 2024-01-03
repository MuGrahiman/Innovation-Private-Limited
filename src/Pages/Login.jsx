import React, { useContext } from "react";
import Jumbotron from "../Components/Jumbotron";
import LoginComponent from "../Components/Login";
import { Context } from "../Components/Contex";

const Login = () => {
  const { setIsAuthenticated } = useContext(Context);
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
      .then((res) => {
        console.log(res);
        const { email, firstName, gender, image, lastName, token, username } =
          res;
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            email,
            firstName,
            gender,
            image,
            lastName,
            token,
            username,
          })
        );
        setIsAuthenticated(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Jumbotron Title={"Login"} />
      <LoginComponent onSubmit={handleSubmit} />
    </>
  );
};

export default Login;
