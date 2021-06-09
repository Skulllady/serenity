import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import NavBar from "../NavBar";
import Footer from '../Footer';
import { displayAccounts } from "../../store/account.js";
import LoadTransactions from "../transactions/LoadTransactions.js";
import '../stylesheets/dashboard.css';
import Piechart from "../overview/Piechart"

function LoadAccounts() {
  const dispatch = useDispatch();
  const accountsList = useSelector(state => {
    console.log("STATE.ACCOUNT", state.account)
    // debugger
    return state.account.list
  })

  useEffect(() => {
    dispatch(displayAccounts());
  }, [dispatch]);

  console.log("ACCOUNTSLIST", accountsList)
  return (
    <>
      <NavBar />
      <div className="dashboardContainer">
        <div className="sidebar">
          <h2>Accounts</h2>
          {accountsList.map((account) => {
            return (
              <div>
                <NavLink to={`/accounts/${account.id}/transactions`} exact={true} activeClassName="active">
                  <h3>{account.account_type}</h3>
                  <h5>{account.institution}</h5>
                  <h5>XXX{account.account_number % 10000}</h5>
                  <h5>USD ${account.balance}</h5>
                </NavLink>
              </div>
            )
          })}
        </div>
        <div className="overview">
          <h2>Overview</h2>
          <table>
            <tr><td>Mortgage/Rent</td><td>$1200</td></tr>
            <tr><td>Bills</td><td>$198.63</td></tr>
            <tr><td>Groceries</td><td>$650.92</td></tr>
            <tr><td>Cash/ATM</td><td>$0</td></tr>
            <tr><td>Eating Out</td><td>$155.89</td></tr>
            <tr><td>Shopping</td><td>$189.10</td></tr>
          </table>
        </div>
        <div className="overview_visual">
          <h2>Spending Overview</h2>
          <Piechart />
        </div>
        <div className="transactions_container">
          <h2> All Transactions</h2>
          <LoadTransactions />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LoadAccounts;
