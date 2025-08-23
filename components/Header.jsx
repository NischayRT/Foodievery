// Remove the import and use the public folder for the image
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [LoginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <a href="/">FOODIEVERY </a>
      </div>
      <div className="NavItems">
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <button
            className="Login"
            onClick={() => {
              LoginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {LoginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
