import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="title">
        <a href="index.html">Brand</a>
      </div>
      <div className="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="links-parent">
        <li>
          <div className="header">
            <label for="select1">Services</label>
          </div>
        </li>
        <li>
          <div className="header">
            <label for="select2">Contact</label>
          </div>
        </li>
        <li>
          <div className="header">
            <label for="select3">Help</label>
          </div>
        </li>
      </ul>
    </nav>
  );
};
