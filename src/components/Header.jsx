import React from "react";
import Portal from "../img/portal.png";
import './Header.css';

const Header = () => {
  return (
    <div className="Header-container">
      <h1>Rick and Morty</h1>
      <img src={Portal} alt="portal" className="Portal-picture" />
    </div>
  );
};

export default Header;
