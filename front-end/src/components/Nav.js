import React from "react";
import "../App.css";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <img
            className="rounded"
            src={require("../assets/sean.jpg")}
            alt="logo"
            width="129"
            height="40"
          />
        </a>
        <ul className="navbar-nav flex-row">
          <li className="nav-item p-2">
            <a className="nav-link text-dark" href="/about">
              The Team
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link text-dark" href="/contact">
              Contact Us
            </a>
          </li>
          <li className="nav-item p-2 ml-4">
            <img
              className="avatar"
              src={require("../assets/sean.jpg")}
              alt="Avatar"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
