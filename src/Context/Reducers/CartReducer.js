
import { useReducer } from "react";

const currentUser = localStorage.getItem("currentUser");
const parsedUser = currentUser && JSON.parse(currentUser);
const cartReducer = (state, action) => {
  switch (action.type) {
    case "DLT_FROM_CART":
      return {
        ...state,
        isAuthenticated: parsedUser.token ? true : false,
        currentUser: parsedUser && parsedUser,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: 0,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart:[...state.cart, action.payload],
      };
    default:
      return state;
  }
};

const initialState = {
  cart: [],
};

const useContextReducer = () => useReducer(cartReducer, initialState);
export default useContextReducer;
