import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAccount, displayAccounts } from "../../store/account";


const UpdateAccountForm = () => {

  const [accountNumber, setAccountNumber] = useState("account.accountNumber");
  const [accountName, setAccountName] = useState("account.accountName");
  const [accountType, setAccountType] = useState("account.accountType");
  const [institution, setInstitution] = useState("account.institution");
  const [balance, setBalance] = useState("account.balance");

  const { accountId } = useParams();
  const account = useSelector(state => state.accounts)
  const dispatch = useDispatch();

  const updateAccountOnSubmit = async (e) => {

    e.preventDefault();

    const payload = {
      accountNumber,
      accountName,
      accountType,
      institution,
      balance
    }

    await dispatch(updateAccount(payload));
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
    <form onSubmit={updateAccountOnSubmit}>

      <label>Account Number</label>
      <input
        placeholder="enter account number"
        onChange={updateAccountNumber}
        value={accountNumber}
      ></input>

      <label>Account Name</label>
      <input
        placeholder="enter account name"
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
        placeholder="enter financial institution"
        onChange={updateInstitution}
        value={institution}
      ></input>

      <label>Current Balance: $</label>
      <input
        placeholder="enter account balance"
        onChange={updateBalance}
        value={balance}
      ></input>

      <button type="submit">Update Account</button>
    </form>
  )
}

export default UpdateAccountForm;
