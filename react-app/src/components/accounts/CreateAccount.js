import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createAccount, displayAccounts } from "../../store/account";


const CreateAccountForm = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [institution, setInstitution] = useState("");
  const [balance, setBalance] = useState("");

  const account = useSelector(state => state.accounts)
  const dispatch = useDispatch();

  const createAccountOnSubmit = async (e) => {
    e.preventDefault();
    payload = {
      accountNumber,
      accountName,
      accountType,
      institution,
      balance
    }

    await dispatch(createAccount(payload));
    dispatch(displayAccounts());

    setAccountNumber("")
    setAccountName("")
    setAccountType("")
    setInstitution("")
    setBalance("")
  }

  const updateAccountNumber = (e) => {
    setAccountNumber(e.target.value);
  }

  const updateAccountName = (e) => {
    setAccountName(e.target.value);
  }

  const updateAccountType = (e) => {
    setAccountType(e.target.value);
  }

  const updateInstitution = (e) => {
    setInstitution(e.target.value);
  }

  const updateBalance = (e) => {
    setBalance(e.target.value);
  }

  return (
    <form onSubmit={createAccountOnSubmit}>
      <label>Account Number</label><input></input>
      <label>Account Name</label><input></input>
      <label>Account Type</label>
      <div>
        <select>
          <option value="">--</option>
          <option value="Checking Account">--</option>
          <option value="Savings Account"></option>
          <option value="Loan Account"></option>
          <option value="Investment Account"></option>
        </select>
      </div>
      <label>Institution</label><input></input>
      <label>Current Balance</label><input></input>
      <button></button>
    </form>
  )
}
