// cartActions.js
import { useMemo } from "react";
import cartReducer from "../Reducers/CartReducer";

const useCartActions = () => {
  const [state, dispatch] = cartReducer();

  const contextValue = useMemo(
    () => ({
      cart: state.cart,
      addToCart: (data) => {

        dispatch({ type: "ADD_TO_CART",payload: data, });
      },
    }),
    [dispatch, state] 
  );

  return [state, contextValue];
};

export default useCartActions;
