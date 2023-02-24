import React from "react";
import logo from "../../img/lws-logo.svg";

export default function Header() {
  return (
    <div>
      <header id="header">
        <div className="container">
          <img src={logo} alt="logo" className="logo" />
          <div className="flex items-center">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button className="log-btn btn">Login</button>
          </div>
        </div>
      </header>
    </div>
  );
}
