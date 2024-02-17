import React from "react";
import "./navbar.css";
import { MdMenu } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { menuData } from "../data";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="nav-left">
          <MdMenu /> <p>Browse Categories</p>
        </div>
        <div className="nav-links">
          <ul className="links">
            {menuData.map((menuItem, index) => (
              <li key={index}>
                <a href={menuItem.link}>{menuItem.label}</a>
                {menuItem.subMenu && (
                  <IoIosArrowDown className="htmlcss-arrow arrow" />
                )}
                {menuItem.subMenu && (
                  <ul className="htmlCss-sub-menu sub-menu">
                    {menuItem.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.link}>{subItem.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="search-box">
          <i className="bx bx-search"></i>
          <div className="input-box">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
