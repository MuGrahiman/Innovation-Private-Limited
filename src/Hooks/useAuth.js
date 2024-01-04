
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Components/Contex";

const useAuth = () => {
  const { isAuthenticated } = useContext(Context);

  const Auth = ({ component: Component, props }) => {
    return isAuthenticated ? <Component {...props} /> : <Navigate to={'/'}/>;
  };

  return Auth;
};

export default useAuth;
