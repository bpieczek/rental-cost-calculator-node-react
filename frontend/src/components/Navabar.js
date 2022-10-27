import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
      <nav>
          <NavLink to="/">
            Home
          </NavLink>
          {" "}|{" "} 
          <NavLink to="/calculator">
            Calculator
          </NavLink>
          {" "}|{" "} 
          <NavLink to="/rentcar">
            Rentcar
          </NavLink>
      </nav>
  );
};
  
export default Navbar;