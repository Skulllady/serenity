import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { displayAccounts } from "../store/account.js";
import LogoutButton from './auth/LogoutButton';
import logo from '../images/logo/logo_transparent.png';
import '../components/stylesheets/nav.css';
import "../components/stylesheets/index.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const account = useSelector(state => {
    return state.account
  })

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
        {account.list.map((account) => {
          console.log("ACCOUNNNNNT", account)
          if (true) {
            let account_name = account.account_name;
            return (
              <div key={account_name}>Welcome to Serenity, {account_name}</div>
            )
          }
        })}

        <LogoutButton />
      </div>
    </nav>
  );
}

export default NavBar;
