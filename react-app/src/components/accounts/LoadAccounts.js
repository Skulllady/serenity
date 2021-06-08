import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { displayAccounts } from "../../store/account.js";
import LoadTransactions from "../transactions/LoadTransactions.js";
import '../stylesheets/dashboard.css';

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
      <div className="dashboardContainer">
        <div className="sidebar">
          <h1>Accounts</h1>
          {accountsList.map((account) => {
            return (
              <div>
                <NavLink to={`/accounts/${account.id}/transactions`} exact={true} activeClassName="active">
                  <h2>{account.account_type}</h2>
                  <div>{account.institution}</div>
                  <div>XXX{account.account_number % 10000}</div>
                  <div>USD ${account.balance}</div>
                </NavLink>
              </div>
            )
          })}
        </div>
        <div className="overview">Overview Table</div>
        <div className="overview_visual">Pie Chart</div>
        <div className="transactions_container">
          <LoadTransactions />
        </div>
      </div>
    </>
  )
}

export default LoadAccounts;
