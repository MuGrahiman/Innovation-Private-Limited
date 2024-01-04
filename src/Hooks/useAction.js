import { useMemo } from "react";
import useAlert from "./useAlert";
import useStateReducer from "./useReducer";

const useContextActions = () => {
  const Alert = useAlert();
  const [state, dispatch] = useStateReducer();
  const contextValue = useMemo(
    () => ({
      ...state,
      clearUser: () => {
        localStorage.removeItem("currentUser");
        dispatch({ type: "CLEAR_USER" });
        Alert("successfully Loged Out", "success");
      },

      addToCart: () => dispatch({ type: "ADD_TO_CART" }),

      setIsAuthenticated: (currentUser) => {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            currentUser,
          })
        );
        dispatch({
          type: "SET_AUTH",
          payload: { currentUser },
        });
        Alert('successfully Loged In', "success")
      },
    }),
    [state]
  );
  return [state, contextValue];
};

export default useContextActions;
