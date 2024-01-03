import React, { createContext, useMemo, useState } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [Cart, setCart] = useState(0);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
// let currentUser = localStorage.getItem("currentUser")
  console.log( currentUser);
  console.log(typeof currentUser);
  // console.log(currentUser?.email);
  // console.log(JSON.parse(currentUser));

  const [isAuthenticated, setIsAuthenticated] = useState(
    currentUser ? true : false
  );

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        Cart,
        setCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;
