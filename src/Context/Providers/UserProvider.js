// contextStore.js
import React, { createContext } from "react";
import useContextActions from "../Actions/UserActions";

const StateContext = createContext();
const DispatchContext = createContext();

const Provider = ({ children }) => {
  const [state, contextValue] = useContextActions();

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={contextValue}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

const useUserState = () => React.useContext(StateContext);
const useUserDispatch = () => React.useContext(DispatchContext);

export { Provider, useUserState, useUserDispatch };
