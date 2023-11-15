import React from "react";
import {NavLink} from "react-router-dom"

export const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li> <NavLink exact to="/" activeStyle={{fontWeight:"bold", color:"red"}}> HOME </NavLink></li>
          <li> <NavLink exact to="/about" activeStyle={{fontWeight:"bold", color:"red"}}> ABOUT </NavLink></li>
          <li> <NavLink exact to="/contact" activeStyle={{fontWeight:"bold", color:"red"}}> CONTACT </NavLink></li>
          <li> <NavLink exact to="/allFunctionality" activeStyle={{fontWeight:"bold", color:"red"}}> ALL FUNCTIONALITY </NavLink></li>
        </ul>
      </nav>
    </>
  );
};
