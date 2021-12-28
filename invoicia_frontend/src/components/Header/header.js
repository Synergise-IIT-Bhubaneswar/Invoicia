import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
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
    title: "Signup",
    url: "/signup",
  },
  {
    title: "Logout",
    url: "/",
  },
];

const Header = () => {
  const [click, setClick] = useState(false);

  const authCtx = useContext(AuthContext);
  const handleClick = (event) => {
    // if (event.target.innerHTML === "Logout");
    // authCtx.onLogout();
    return setClick(!click);
  };

  const { isLoggedIn } = authCtx;

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Invoicia
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navItems.map((item, index) => {
              return item.title === "Profile" || item.title === "Logout" ? (
                isLoggedIn && (
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
                )
              ) : item.title === "Signup" || item.title === "Login" ? (
                !isLoggedIn && (
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
                )
              ) : item.title === "Home" || item.title === "All Invoices" ? (
                isLoggedIn && (
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
                )
              ) : item.title === "Home" || item.title === "All Invoices" ? (
                !isLoggedIn && (
                  <li key={index} className="nav-item">
                    
                  </li>
                )
              ) : (
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
