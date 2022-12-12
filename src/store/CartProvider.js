import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "CHANGE") {
    let updatedItems = [];
    var indIfExists = state.items?.findIndex(
      (product) => product.unique_id === action.unique_id
    );
    if (action.quantity === 0) {
      if (indIfExists !== -1) {
        updatedItems = state.items?.filter(
          (i) => i.unique_id !== action.unique_id
        );
      }
    } else {
      updatedItems = state.items;
      if (indIfExists !== -1) {
        updatedItems[indIfExists].quantity = action.quantity;
      } else {
        updatedItems.push({ unique_id: action.unique_id, quantity: 1 });
      }
    }

    return {
      items: updatedItems,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const changeItemshandler = (a, b) => {
    dispatchCartAction({ type: "CHANGE", quantity: a, unique_id: b });
  };

  const cartContext = {
    items: cartState.items,
    changeitems: changeItemshandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
