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
      <div class="label-input-container">
        <label>Account Number</label>
        <input
          placeholder="enter account number"
          onChange={updateAccountNumber}
          value={accountNumber}
        ></input>
      </div>
      <div class="label-input-container">
        <label>Account Name</label>
        <input
          placeholder="enter account name"
          onChange={updateAccountName}
          value={accountName}
        ></input>
      </div>
      <div class="label-input-container">
        <label>Account Type</label>
        <select value="" onChange={(e) => setAccountType(e.target.value)}>
          <option value="">---</option>
          <option value="Checking Account">Checking Account</option>
          <option value="Savings Account">Savings Account</option>
          <option value="Loan Account">Loan Account</option>
          <option value="Investment Account">Investment Account</option>
        </select>
      </div>

      <div class="label-input-container">
        <label>Institution</label>
        <input
          placeholder="enter financial institution"
          onChange={updateInstitution}
          value={institution}
        ></input>
      </div>
      <div class="label-input-container">
        <label>Current Balance: $</label>
        <input
          placeholder="enter account balance"
          onChange={updateBalance}
          value={balance}
        ></input>
      </div>

      <button type="submit" style={{ float: "right" }}>Create Account</button>
    </form>
  )
}

export default CreateAccountForm;
