import React from "react";
import "./header.scss";
import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
  return (
    <header>
      <h1>TMDB</h1>

      <div>
        <BiShoppingBag className="icon" />
      </div>
    </header>
  );
};

export default Header;
