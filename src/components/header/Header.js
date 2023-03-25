import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <div>
        <ul className="navbar">
          <li>
            <img src="./E-commerce.png"></img>
          </li>
          <li className="home">
            <a href="/">HOME</a>
          </li>
          <li className="faq">
            <a href="/faq">FAQ</a>
          </li>
          <li className="about-us">
            <a href="/about">ABOUTUS</a>
          </li>
          <li className="sign">
            <div className="signin">
              <a href="/signin">SIGNUP</a>:
            </div>
            <div>
              <button className="signup" type="button">
                <a href="/signup">SIGNIN</a>
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
