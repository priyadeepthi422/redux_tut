import React from "react";
import cart from "../cart1.png";

const Home = (props) => {
  console.warn("home ", props.data);
  return (
    <div>
     
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="http://fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
        </div>
        <div className="text-wrapper item">
          <span>i-Phone</span>
          <span>Price :$1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "iphone" })
            }
          >
            Add to Cart
          </button>
          <button
            onClick={() =>
              props.removeToCartHandler()
            }
          >
            Remove Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
