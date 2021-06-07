import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { displayAccounts } from "../../store/account.js";

function ViewAccounts() {
  const dispatch = useDispatch();
  const accountsList = useSelector(state => {
    console.log("STATE", state)
    return state.account.list
  })

  useEffect(() => {
    dispatch(displayAccounts());
  }, [dispatch]);

  console.log("ACCOUNTSLIST", accountsList)
  return (
    <>
      <h3>Accounts</h3>
      <p>{accountsList}</p>
    </>
  )
}

export default ViewAccounts;
