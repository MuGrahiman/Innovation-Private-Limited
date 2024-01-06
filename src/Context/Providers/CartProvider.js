// contextStore.js
import React, { createContext } from "react";
import useContextActions from "../Actions/CartActions";

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

const useCartState = () => React.useContext(StateContext);
const useCartDispatch = () => React.useContext(DispatchContext);

export { Provider, useCartState, useCartDispatch };
