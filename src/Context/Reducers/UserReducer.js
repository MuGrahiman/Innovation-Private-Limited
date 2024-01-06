import { useReducer } from "react";

const currentUser = localStorage.getItem("currentUser");
const parsedUser = currentUser && JSON.parse(currentUser);
const userReducer = (state, action) => {
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
        // cart: 0,
      };
 
    default:
      return state;
  }
};

const initialState = {
  isAuthenticated: parsedUser.token ? true : false,
  currentUser: parsedUser && parsedUser,
};

const useContextReducer = () => useReducer(userReducer, initialState);
export default useContextReducer;
