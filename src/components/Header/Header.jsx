import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

const Header = () => {
  const [state] = useStateValue();
  const history = useNavigate();
  const handleAuthentication = () => {
    if (state.user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          alt="Logo"
          src="https://i0.wp.com/amzadvisers.com/wp-content/uploads/2020/09/amazon-amz-advisers.png?fit=768%2C293&ssl=1"
          className="headerLogo"
        />
      </Link>

      <div className="headerSearch">
        <input type="text" className="headerSearchInput" />
        <FontAwesomeIcon icon={faSearch} className="headerSearchIcon" />
      </div>
      <div className="headerNav">
        <Link to={!state.user && "/login"}>
          <div onClick={handleAuthentication} className="headerOption">
            {state.user !== null ? (
              <>
                <span className="headerOptionLineOne">
                  Hello, {state.user.displayName}
                </span>
                <span className="headerOptionLineTwo">Sign Out</span>
              </>
            ) : (
              <>
                <span className="headerOptionLineOne">Hello, Guest</span>
                <span className="headerOptionLineTwo">Sign In</span>
              </>
            )}
          </div>
        </Link>
        <div className="headerOption">
          <span className="headerOptionLineOne">Returns</span>
          <span className="headerOptionLineTwo">& Orders</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="headerOptionBasket">
            <FontAwesomeIcon icon={faCartShopping} className="headerCartIcon" />
            <span className="headerOptionLineTwo headerBasketCount">
              {state.basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
