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

      <label>Account Number</label>
      <input
        onChange={updateAccountNumber}
        value={accountNumber}
      ></input>

      <label>Account Name</label>
      <input
        onChange={updateAccountName}
        value={accountName}
      ></input>

      <label>Account Type</label>
      <div>
        <select onChange={(e) => setAccountType(e.target.value)}>
          <option value="">---</option>
          <option value="Checking Account">Checking Account</option>
          <option value="Savings Account">Savings Account</option>
          <option value="Loan Account">Loan Account</option>
          <option value="Investment Account">Investment Account</option>
        </select>
      </div>

      <label>Institution</label>
      <input
        onChange={updateInstitution}
        value={institution}
      ></input>

      <label>Current Balance: $</label>
      <input
        onChange={updateBalance}
        value={balance}
      ></input>

      <button type="submit">Update Account</button>
    </form>
  )
}

export default UpdateAccountForm;
