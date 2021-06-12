import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import NavBar from "../NavBar";
import Footer from '../Footer';
import { displayAccounts } from "../../store/account.js";
import LoadTransactions from "../transactions/LoadTransactions.js";
import '../stylesheets/dashboard.css';
import Piechart from "../overview/Piechart"
import Table from "../overview/Table"
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import CancelPresentationRoundedIcon from '@material-ui/icons/CancelPresentationRounded';
import CreateAccountForm from "./CreateAccountForm"

function LoadAccounts() {
  const dispatch = useDispatch();
  const [showNewAccountForm, setShowNewAccountForm] = useState(false)
  const accountsList = useSelector(state => {
    return state.account.list
  })
  const addAccountButton = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    dispatch(displayAccounts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className="dashboardContainer">
        <div className="sidebar">
          <h2>Accounts</h2>
          <div hidden={showNewAccountForm}>
            <button
              onClick={() => setShowNewAccountForm(true)}
            ><AddBoxOutlinedIcon /> New Account</button>
          </div>
          <div hidden={!showNewAccountForm}>
            <button
              onClick={() => setShowNewAccountForm(false)}
            ><CancelPresentationRoundedIcon /> Cancel</button>
            <CreateAccountForm />
          </div>
          {accountsList.map((account) => {
            return (
              <div className="accounts">
                <h3><AccountBalanceTwoToneIcon />  {account.account_type}</h3>
                <NavLink to={`/accounts/${account.id}/transactions`} exact={true} activeClassName="active">
                  <h5>{account.institution}</h5>
                  <h5>XXX{account.account_number % 10000}</h5>
                  <h5>Balance: USD ${account.balance}</h5>
                </NavLink>
              </div>
            )
          })}
        </div>
        <div className="overview">
          <Table />
        </div>
        <div className="overview_visual">
          <Piechart />
        </div>
        <div className="transactions_container">
          <LoadTransactions />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LoadAccounts;
