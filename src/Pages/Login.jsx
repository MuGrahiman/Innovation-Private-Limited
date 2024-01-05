import React from "react";
import Jumbotron from "../Components/Jumbotron";
import LoginComponent from "../Components/Login";
import { Context } from "../Context/Contex";
import useAlert from "../Hooks/useAlert";
import { useNavigate } from "react-router-dom";
import { useDispatchContext, useStateContext } from "../Context/Store";

const Login = () => {
  const { setIsAuthenticated } = useDispatchContext();
  const Alert = useAlert();
  const navigate = useNavigate()
  const handleSubmit = (data) => { 
    fetch("https://dummyjson.com/auth/login", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.name,
        password: data.password,
      }),
    })
      .then(async (res) => {
        let response = await res.json();
        if (res.ok) return response;
        else throw response;
      })
      .then((res) => {
        const { email, firstName, gender, image, lastName, token, username } =
          res;
     
        setIsAuthenticated({ email, firstName, gender, image, lastName, token, username });
        navigate('/')
      })
      .catch((err) => Alert(err.message, "danger"));
  };

  return (
    <>
      <Jumbotron Title={"Login"} />
      <LoginComponent onSubmit={handleSubmit} />
    </>
  );
};

export default Login;
