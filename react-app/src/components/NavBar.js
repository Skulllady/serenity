import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import logo from '../images/logo/logo_transparent.png';
import '../components/stylesheets/nav.css';
import "../components/stylesheets/index.css";

const NavBar = () => {
  return (
    <nav className="auth-nav">
      <div className="nav-items">
        <NavLink to="/accounts/1/transactions" exact={true} activeClassName="active">
          <img src={logo} height="100px" />
        </NavLink>
      </div>
      <div className="nav-items">
        <LogoutButton />
      </div>
    </nav>
  );
}

export default NavBar;
