import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink  to='/'>
        Home
      </NavLink> <br />
      <NavLink to='/movies'>
        Movies
      </NavLink><br />
      <NavLink to='/directors'>
        Directors
      </NavLink><br />
      <NavLink to='/actors'>
        Actors
      </NavLink><br />

    </div>
  )
}

export default NavBar;
