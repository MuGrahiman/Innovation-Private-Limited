// contextActions.js
import { useMemo } from "react";
import useAlert from "./useAlert";
import useContextReducer from "./useReducer";

const useContextActions = () => {
  const Alert = useAlert();
  const [state, dispatch] = useContextReducer();

  const contextValue = useMemo(
    () => ({
      ...state,
      clearUser: () => {
        localStorage.removeItem("currentUser");
        dispatch({ type: "CLEAR_USER" });
        Alert("successfully Logged Out", "success");
      },

      addToCart: () => dispatch({ type: "ADD_TO_CART" }),

      setIsAuthenticated: (currentUser) => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        dispatch({
          type: "SET_AUTH",
        });
        Alert("successfully Logged In", "success");
      },
    }),
    [state, Alert]
  );

  return [state, contextValue];
};

export default useContextActions;
