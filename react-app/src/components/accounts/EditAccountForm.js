import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateAccount } from "../../store/account";


const UpdateAccountForm = () => {

  const { accountId } = useParams();
  const account = useSelector(state => state.account[accountId])

  const [accountNumber, setAccountNumber] = useState(account.account_number);
  const [accountName, setAccountName] = useState(account.account_name);
  const [accountType, setAccountType] = useState(account.account_type);
  const [institution, setInstitution] = useState(account.institution);
  const [balance, setBalance] = useState(account.balance);

  const dispatch = useDispatch();

  const updateAccountOnSubmit = (e) => {

    e.preventDefault();

    const payload = {
      accountId,
      accountNumber,
      accountName,
      accountType,
      institution,
      balance
    }

    dispatch(updateAccount(payload));
  }

  const updateAccountNumber = (e) => {
    setAccountNumber(e.target.value);
  }

  const updateAccountName = (e) => {
    setAccountName(e.target.value);
  }

  const updateInstitution = (e) => {
    setInstitution(e.target.value);
  }

  const updateBalance = (e) => {
    setBalance(e.target.value);
  }

  return (
    <form onSubmit={updateAccountOnSubmit}>

      <label>Account Number
        <input
          onChange={updateAccountNumber}
          value={accountNumber}
        ></input></label>

      <label>Account Name
        <input
          onChange={updateAccountName}
          value={accountName}
        ></input></label>

      <label>Account Type
        <select value={accountType} onChange={(e) => setAccountType(e.target.value)}>
          <option value="">---</option>
          <option value="Checking Account">Checking Account</option>
          <option value="Savings Account">Savings Account</option>
          <option value="Loan Account">Loan Account</option>
          <option value="Investment Account">Investment Account</option>
        </select></label>

      <label>Institution
        <input
          onChange={updateInstitution}
          value={institution}
        ></input></label>

      <label>Current Balance: $
        <input
          onChange={updateBalance}
          value={balance}
        ></input></label>

      <button className="cursor-pointer" type="submit">Update Account</button>
    </form>
  )
}

export default UpdateAccountForm;
