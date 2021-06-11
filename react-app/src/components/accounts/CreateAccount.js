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
  }



}
