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
  let currentAccount;
  let account_name
  for (let i = 0; i < accounts.list.length; i++) {
    currentAccount = accounts.list[i];
    console.log("ACCOUNNNNNT ID", accounts.id)
    if (currentAccount.id = accountId) {
      account_name = currentAccount.account_name;
    }
  }

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
        <div key={account_name}>Welcome to Serenity, {account_name}</div>
        <LogoutButton />
      </div>
    </nav>
  );
}

export default NavBar;
