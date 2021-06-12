import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAccount, displayAccounts } from "../../store/account";


const UpdateAccountForm = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [institution, setInstitution] = useState("");
  const [balance, setBalance] = useState(0);

  // const account = useSelector(state => state.accounts)
  // const userId = useSelector(state => state.session.user.id)
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
