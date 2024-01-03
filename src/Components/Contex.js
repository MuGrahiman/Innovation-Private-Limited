import React, { createContext, useMemo, useState } from "react";
import useAlert from "../Hooks/useAlert";

export const Context = createContext();

const Provider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const Alert = useAlert();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [isAuthenticated, setIsAuthenticated] = useState(
    currentUser ? true : false
  );
  const clearUser = () => {
    localStorage.removeItem("currentUser");
    setIsAuthenticated(false);
    setCart(0)
    Alert('successfully Loged Out', "success")
  };
  const addToCart = () => setCart(cart + 1);

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        cart,
        setCart,
        clearUser,addToCart
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;
