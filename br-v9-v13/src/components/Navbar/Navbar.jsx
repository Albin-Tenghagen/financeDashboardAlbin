import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="">
      <NavLink to="/" className="">
        {" "}
        home
      </NavLink>
      <NavLink to="/StocksAndA" className="">
        StocksAndAnalyses
      </NavLink>
      <NavLink to="/recommend" className="">
        {" "}
        Recommend
      </NavLink>
      <NavLink to="/contact" className="">
        {" "}
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
