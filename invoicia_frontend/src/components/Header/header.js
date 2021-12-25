import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "All Invoices",
    url: "/all_invoices",
  },
  {
    title: "Profile",
    url: "/profile",
  },
  {
    title: "Login",
    url: "/Login",
  },
  {
    title: "Signin",
    url: "/signin",
  },
];

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Invoicia
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navItems.map((item, index) => {
              return (
                <li key={index} className="nav-item">
                  <NavLink
                    exact
                    to={item.url}
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
