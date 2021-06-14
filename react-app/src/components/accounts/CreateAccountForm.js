import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAccount, displayAccounts } from "../../store/account";


const CreateAccountForm = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [institution, setInstitution] = useState("");
  const [balance, setBalance] = useState(0);

  // const account = useSelector(state => state.accounts)
  // const userId = useSelector(state => state.session.user.id)
  const dispatch = useDispatch();

  const createAccountOnSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      accountNumber,
      accountName,
      accountType,
      institution,
      balance
    }

    await dispatch(createAccount(payload));
    dispatch(displayAccounts());
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
    <form onSubmit={createAccountOnSubmit}>

      <label>Account Number
        <input
          placeholder="enter account number"
          onChange={updateAccountNumber}
          value={accountNumber}
        ></input></label>

      <label>Account Name
        <input
          placeholder="enter account name"
          onChange={updateAccountName}
          value={accountName}
        ></input></label>

      <label>Account Type

        <select value="" onChange={(e) => setAccountType(e.target.value)}>
          <option value="">---</option>
          <option value="Checking Account">Checking Account</option>
          <option value="Savings Account">Savings Account</option>
          <option value="Loan Account">Loan Account</option>
          <option value="Investment Account">Investment Account</option>
        </select></label>

      <label>Institution
        <input
          placeholder="enter financial institution"
          onChange={updateInstitution}
          value={institution}
        ></input></label>

      <label>Current Balance: $
        <input
          placeholder="enter account balance"
          onChange={updateBalance}
          value={balance}
        ></input></label>

      <button type="submit" style={{ float: "right" }}>Create Account</button>
    </form>
  )
}

export default CreateAccountForm;
