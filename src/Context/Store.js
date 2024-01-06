import React from "react";

import * as Cart from "./Providers/CartProvider.js";
import * as User from "./Providers/UserProvider.js";
const Provider = ({ children }) => {
  return (
    <Cart.Provider>
      <User.Provider>{children}</User.Provider>
    </Cart.Provider>
  );
};

const useStateContext = () => ({
  ...Cart.useCartState(),
  ...User.useUserState(),
});

const useDispatchContext = () => ({
  ...Cart.useCartDispatch(),
  ...User.useUserDispatch(),
});
export default Provider;
export { useStateContext, useDispatchContext };
