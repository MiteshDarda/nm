import { useState } from "react";
import cartLogo from "../../img/shopping-cart.png";

const Header = (props) => {
  function toggleCartHandler() {
    props.setShowCart((prev) => !prev);
  }

  return (
    <>
      <header className="flex-row header">
        <h1>Ninja Mart</h1>
        <img
          src={cartLogo}
          alt="Lol"
          className="cart-logo"
          onClick={toggleCartHandler}
        />
      </header>
    </>
  );
};

export default Header;
