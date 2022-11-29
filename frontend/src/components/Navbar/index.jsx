import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <nav className="ph">
      <p></p>
      <NavLink to="/" className="navLink">
        Home
      </NavLink>
      <NavLink to="/calculator" className="navLink">
        Calculator
      </NavLink>
      <NavLink to="/rentcar" className="navLink">
        Rentcar
      </NavLink>
      <NavLink to="/contact" className="navLink">
        Contact
      </NavLink>
      <p></p>
    </nav>
  );
};

export default Navbar;
