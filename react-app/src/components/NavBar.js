import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import logo from '../images/logo/logo_transparent.png';


const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/" exact={true} activeClassName="active">
          <img src={logo} height="100px" />
        </NavLink>
      </div>
      <div>
        <LogoutButton />
      </div>
    </nav>
  );
}

export default NavBar;
