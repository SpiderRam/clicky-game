import React from "react";
import "./Header.css";

const Header = () => (
    <div id="headerContainer" className="container">
        <div>Clicky-Game</div>
        <div>Click an image to begin!</div>
        <div id="scoreDiv"></div>
    </div>
);

export default Header;