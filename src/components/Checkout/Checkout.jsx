import React from "react";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Header from "../Header/Header";
import Subtotal from "../Subtotal/Subtotal";
import "./checkout.css";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("Basket", basket);
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkoutLeft">
          <img
            className="checkoutAd"
            src="https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-aws.jpg.webp"
            alt=""
          />
          <div className="checkoutList">
            {user ? <h1>{user.email}</h1> : ""}
            <h2 className="checkoutTitle">Your shopping Basket</h2>
            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="checkoutRight">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
