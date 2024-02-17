import React from "react";
import "./banner.css";
import img from "../../../assets/picture.png";
import { IoIosArrowForward } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { bannerMenuData } from "../../../Components/Common/data";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="menu">
        <ul className="menu-list">
          {bannerMenuData.map((menuItem, index) => (
            <li key={index} className="menu-item">
              <button className={`menu-button ${menuItem.color || ""}`}>
                {menuItem.label}
                {menuItem.subMenu && <IoIosArrowForward />}
              </button>
              {menuItem.subMenu && (
                <ul className="menu-sub-list">
                  {menuItem.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="menu-item">
                      <button className="menu-button">{subItem.label}</button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <ul class="menu-list">
          <li class="menu-item">
            <button class="menu-button menu-button--orange">
              View All Categories <LuPlus />
            </button>
          </li>
        </ul>
      </div>

      <div className="banner-right">
        <div>
          <p className="banner-para">
            Up to <span className="banner-percentage">70%</span> of Black Friday
          </p>
          <p className="banner-second">
            TRENDY <span className="banner-fashion">FASHION</span>
          </p>
          <p className="banner-second">COLLECTION</p>
          <button className="buy-button">Buy Now</button>
        </div>
        <img src={img} alt="" width={460} />
      </div>
    </div>
  );
};

export default Banner;
