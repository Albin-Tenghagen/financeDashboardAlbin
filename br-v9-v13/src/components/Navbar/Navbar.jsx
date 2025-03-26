import React from "react";
import { NavLink } from "react-router-dom";
/**
 * This component is a child of the Header components. Here in lies the navigation for the website that includes all the different pages. it uses react-router-dom
 *
 * React Router DOM:
 * - Navlink: is used to navigate through the applications different pages
 */
function Navbar() {
  return (
    <nav className="flex flex-row justify-evenly ">
      <NavLink
        to="/"
        className="button-focus-effect font-text font-semibold rounded-2xl px-4 py-3 m-2 bg-interactive "
      >
        {" "}
        Home
      </NavLink>
      <NavLink
        to="/StocksAndA"
        className="button-focus-effect font-text font-semibold rounded-2xl px-4 py-3 m-2 bg-interactive "
      >
        <span className="hidden sm:inline">Stock Charts</span>
        <span className="inline sm:hidden">Charts</span>
      </NavLink>
      <NavLink
        to="/company"
        className="button-focus-effect rounded-2xl font-text font-semibold px-4 py-3 m-2 bg-interactive  "
      >
        {" "}
        Company
      </NavLink>
    </nav>
  );
}

export default Navbar;
