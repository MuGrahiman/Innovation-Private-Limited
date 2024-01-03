import React, { useContext } from "react";
import Jumbotron from "../Components/Jumbotron";
import LoginComponent from "../Components/Login";
import { Context } from "../Components/Contex";
import useAlert from "../Hooks/useAlert";

const Login = () => {
  const { setIsAuthenticated } = useContext(Context);
  const Alert = useAlert();
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
      .then(async (res) => {
        let response = await res.json();
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
        Alert('successfully Loged In', "success")
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
