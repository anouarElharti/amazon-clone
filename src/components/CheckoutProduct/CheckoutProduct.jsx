import React from "react";
import { useStateValue } from "../../StateProvider";
import "./checkoutProduct.css";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProductImg" />
      <div className="checkoutProductInfo">
        <h2 className="checkoutProductTitle">{title}</h2>
        <p className="checkoutProductPrice">
          <small>$</small>
          {price}
        </p>
        <span className="checkoutProductRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </span>
        <button onClick={removeFromBasket} className="checkoutProductButton">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
