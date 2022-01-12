import React from "react";
import logo from "/logo.svg";

import "./layout.css";

const Header = () => {
  return (
    <header>
      <img src={logo} className="img-responsive" />
      <nav>
        <ul>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
