import React, { createContext, useMemo, useState } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [isAuthenticated, setIsAuthenticated] = useState(
    currentUser ? true : false
  );
  console.log(cart);
  console.log(typeof currentUser);
  const clearUser = () => {
    localStorage.removeItem("currentUser");
    setIsAuthenticated(false);
    setCart(0)
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
