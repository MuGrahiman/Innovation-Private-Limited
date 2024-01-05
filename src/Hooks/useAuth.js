
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/Contex";
import { useStateContext } from "../Context/Store";

const useAuth = () => {
  const { isAuthenticated } = useStateContext();
 console.log(isAuthenticated)
  const Auth = ({ component: Component, props }) => {
    return isAuthenticated ? <Component {...props} /> : <Navigate to={'/login'}/>;
  };

  return Auth;
};

export default useAuth;
