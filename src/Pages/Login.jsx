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
        username: data.name,
        password: data.password,
        expiresInMins: 60,
      }),
    })
      .then(async(res) => { 
        let response =await res.json()
        if (res.ok) return response;
        else throw response;
      })
      .then((res) => {
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
