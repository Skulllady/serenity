import React, { useEffect } from "react";
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { displayAccounts } from "../store/account.js";
import LogoutButton from './auth/LogoutButton';
import logo from '../images/logo/logo_transparent.png';
import '../components/stylesheets/nav.css';
import "../components/stylesheets/index.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const { accountId } = useParams();
  const accounts = useSelector(state => {
    return state.account
  })
  //grab the current account selected
  let currentAccount = accounts[parseInt(accountId)];

  useEffect(() => {
    dispatch(displayAccounts());
  }, [dispatch]);

  return (
    <nav className="auth-nav">
      <div className="nav-items">
        <NavLink to="/accounts/1/transactions" exact={true} activeClassName="active">
          <img src={logo} height="100px" />
        </NavLink>
      </div>
      <div className="nav-items">
        <div id="welcome_message">Welcome, {currentAccount ? currentAccount.account_name : `User`}</div>
        <LogoutButton />
      </div>
    </nav>
  );
}

export default NavBar;
