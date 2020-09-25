import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" />
            React Js Calculator
        </div>
    );
}

export default Header;
