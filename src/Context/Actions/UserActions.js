// userActions.js
import { useMemo } from "react";
import useAlert from "../../Hooks/useAlert";
import userReducer from "../Reducers/UserReducer";

const useUserActions = () => {
  const Alert = useAlert();
  const [state, dispatch] = userReducer();

  const contextValue = useMemo(
    () => ({
      isAuthenticated: state.isAuthenticated,
      currentUser: state.currentUser,
      clearUser: () => {
        localStorage.removeItem("currentUser");
        dispatch({ type: "CLEAR_USER" });
        Alert("Successfully Logged Out", "success");
      },
      setIsAuthenticated: (currentUser) => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        dispatch({
          type: "SET_AUTH",
          payload: currentUser,
        });
        Alert("Successfully Logged In", "success");
      },
    }),
    []
  );

  return [state, contextValue];
};

export default useUserActions;
