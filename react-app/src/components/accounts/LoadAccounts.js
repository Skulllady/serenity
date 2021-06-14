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
import AddIcon from '@material-ui/icons/Add';
import CancelPresentationRoundedIcon from '@material-ui/icons/CancelPresentationRounded';
import CreateAccountForm from "./CreateAccountForm"
import EditAccountForm from "./EditAccountForm"

function LoadAccounts() {
  const dispatch = useDispatch();
  const [showNewAccountForm, setShowNewAccountForm] = useState(false)
  const [showEditAccountForm, setShowEditAccountForm] = useState(false)
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
          <h1>All Accounts</h1>
          {accountsList.map((account) => {
            return (
              <div className="account">
                <div className="tertiary-heading" style={{ float: "right" }}>${account.balance}</div>
                <NavLink to={`/accounts/${account.id}/transactions`} exact={true} activeClassName="active">
                  <div className="tertiary-heading"> {account.account_type}</div>
                  <div hidden={showEditAccountForm === account.id} style={{ float: "right" }}>
                    <div
                      onClick={() => setShowEditAccountForm(account.id)}
                    ><EditIcon className="material-ui-icon" /></div>
                  </div>
                  <div className="body-text">{account.institution} XXX{account.account_number % 10000}</div>
                </NavLink>
                <div hidden={!(showEditAccountForm === account.id)}>
                  <EditAccountForm />
                  <div className="cancel cursor-pointer"
                    onClick={() => setShowEditAccountForm(false)}
                  >Cancel</div>
                </div>
              </div>
            )
          })}
          <div className="create-account-container">
            <div hidden={showNewAccountForm}>
              <div className="cursor-pointer" onClick={() => setShowNewAccountForm(true)}>
                <AddIcon className="material-ui-icon" style={{ float: "left" }} />
                <div className="body-text">New Account</div>
              </div>
            </div>
            <div hidden={!showNewAccountForm}>
              <CreateAccountForm />
              <div className="cancel cursor-pointer"
                onClick={() => setShowNewAccountForm(false)}
              >Cancel</div>
            </div>
          </div>
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
