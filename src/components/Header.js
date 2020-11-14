import React from "react";
import cart from "../cart1.png";

const Header = (props) => {

  return (
    <div>
      <div className="add-to-cart">
        <img src={cart} />
        <span className="cart-count">{props.data.cartItems.length}</span>
      </div>
    
    </div>
  );
};
export default Header;
