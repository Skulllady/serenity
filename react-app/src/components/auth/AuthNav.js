import React from 'react';
import { NavLink } from 'react-router-dom';
import DemoUser from './DemoUser';
import logo from "../../images/logo/logo_transparent.png";
import '../../components/stylesheets/nav.css';

const NavBar = () => {
  return (
    <nav className="auth-nav">
      <div className="nav-items">
        <NavLink to="/" exact={true} activeClassName="active">
          <img src={logo} height="100px" />
        </NavLink>
      </div>
      <div className="nav-items">
        <div className="auth-options">
          <NavLink to="/login" exact={true} activeClassName="active">
            <button>🔒︎Login</button>
          </NavLink>
        </div>
        <div className="auth-options">
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            <button>🔒︎Sign Up</button>
          </NavLink>
        </div>
        <div className="auth-options">
          <DemoUser />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
