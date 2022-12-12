import React from "react";

const CartContext = React.createContext({
  items: [],
  changeitems: () => {},
});

export default CartContext;
