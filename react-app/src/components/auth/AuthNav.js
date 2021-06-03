import React from 'react';
import { NavLink } from 'react-router-dom';
import DemoUser from './DemoUser';
import logo from "../../images/logo/logo_transparent.png";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" exact={true} activeClassName="active">
        <img src={logo} height="100px" />
      </NavLink>
      <div>
        <NavLink to="/login" exact={true} activeClassName="active">
          <button>Login</button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/sign-up" exact={true} activeClassName="active">
          <button>Sign Up</button>
        </NavLink>
      </div>
      <div>
        <DemoUser />
      </div>
    </nav>
  );
}

export default NavBar;
