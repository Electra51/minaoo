import React from "react";
import "./header.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="header">
        <Link to="/">
          <img src={logo} width={160} />
        </Link>

        <div className="headerSearch">
          <p className="search-text">Search for Products</p>
          <select id="slct" required>
            <option value="" selected>
              All Categories
            </option>
            <option value="Fashion Collection">Fashion Collection</option>
            <option value="Electronices">Electronices</option>
            <option value="Home Applicance"> Home Applicance</option>
            <option value="Kitchen item">Kitchen item</option>
            <option value="Food">Food</option>
          </select>
          <div className="search-icon">
            <BsSearch />
          </div>
        </div>
        <div className="header-right-part">
          <GoGitCompare />
          <FaRegHeart />
          <div className="cart">
            <MdShoppingCartCheckout />
            <p className="cart-number">
              <span className="cart-quantity">5</span>
            </p>
          </div>
          <div className="account">
            <p>Account</p>
            <LuUser2 className="account-icon" />
          </div>
          <div className="amount">$20.00</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
