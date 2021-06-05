import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { displayAccounts } from "../../store/account.js";

function ViewAccounts() {
  const dispatch = useDispatch();
  const accountsList = useSelector(state => {
    // debugger
    console.log(state)
    return state.accounts
  })

  useEffect(() => {
    dispatch(displayAccounts());
  }, [dispatch]);


  return (
    <>
      <h3>Accounts</h3>
      {/* <p>{accountsList}</p> */}
    </>
  )
}

export default ViewAccounts;
