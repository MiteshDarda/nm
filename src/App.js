import { useEffect, useState } from "react";
import Body from "./components/body/Body";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import data from "./API/data";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [quantities, setQuantities] = useState([]);

  return (
    <CartProvider>
      <Header setShowCart={setShowCart} />
      <Body quantities={quantities} setQuantities={setQuantities} />

      <Cart
        showCart={showCart}
        setShowCart={setShowCart}
        quantities={quantities}
      />
      <Footer />
    </CartProvider>
  );
}

export default App;
