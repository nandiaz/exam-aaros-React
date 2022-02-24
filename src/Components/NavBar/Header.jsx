import { React, useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img className="img-logo" src="/logoaarco.png" alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Inicio
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Quienes Somos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contáctanos
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
