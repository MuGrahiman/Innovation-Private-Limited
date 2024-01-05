// contextStore.js
import React, { createContext } from "react";
import useContextActions from "../Hooks/useAction";

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

const useStateContext = () => React.useContext(StateContext);
const useDispatchContext = () => React.useContext(DispatchContext);

export { Provider, useStateContext, useDispatchContext };
