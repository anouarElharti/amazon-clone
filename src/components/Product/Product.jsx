import React from "react";
import { useStateValue } from "../../StateProvider";
import "./product.css";

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();
  // ADD PRODUCT TO BASKET
  const addToBasket = () => {
    // DISPATCH ACTION: ITEM TO THE DAYA LAYER
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product" key={id} id={id}>
      <div className="productInfo">
        <p>{title}</p>
        <div className="productPrice">
          <small>$</small>
          <b>{price}</b>
        </div>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <img src={image} className="productImg" alt="" />
        <button onClick={addToBasket} className="addToBasket">
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
