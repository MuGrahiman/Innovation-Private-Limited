import { useReducer } from "react";

const useContextReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_AUTH":
        return {
          ...state,
          isAuthenticated: true,
          currentUser: action.payload.currentUser,
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
    isAuthenticated: false,
    currentUser: null,
    cart: 0,
  };
  return useReducer(reducer, initialState);
};
export default useContextReducer;
