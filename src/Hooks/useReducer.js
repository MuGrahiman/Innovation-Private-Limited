// contextReducer.js
import { useReducer } from "react";

const currentUser = localStorage.getItem("currentUser");
console.log(currentUser)
const parsedUser = currentUser && JSON.parse(currentUser);
console.log(parsedUser)
const contextReducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return {
        ...state,
        isAuthenticated: parsedUser.token ? true : false,
        currentUser: parsedUser && parsedUser,
      };
    case "CLEAR_USER":
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null,
        cart: 0,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart + 1,
      };
    default:
      return state;
  }
};

const initialState = {
  isAuthenticated: parsedUser.token ? true : false,
  currentUser: parsedUser && parsedUser,
  cart: 0,
};

const useContextReducer = () => useReducer(contextReducer, initialState);
export default useContextReducer;
