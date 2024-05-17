import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <div>
            <p className="logo">Khaana App</p>
          </div>
        </Link>
        <Link to="/wishlist">
          <div>
            <p className="logo">WishList</p>
          </div>
        </Link>
      </nav>
    </header>
  );
};
