import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { displayAccounts } from "../../store/account.js";

function ViewAccounts() {
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
      <h1>Accounts</h1>

      {accountsList.map((account) => {
        return (
          <div>
            <h2>{account.account_type}</h2>
            <div>{account.institution}</div>
            <div>XXX{account.account_number % 10000}</div>
            <div>USD$ {account.balance}</div>
          </div>
        )
      })}

    </>
  )
}

export default ViewAccounts;
