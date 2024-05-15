import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="title">
        <a href="/">Brand</a>
      </div>
      <div className="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="links-parent">
        {/* <li>
          <div className="header">
            <label>Services</label>
          </div>
        </li>
        <li>
          <div className="header">
            <label>Contact</label>
          </div>
        </li> */}
        <Link to="/wishlist"><li>
          <div className="header">
            <label>WishList</label>
          </div>
        </li>
        </Link>
      </ul>
    </nav>
  );
};
