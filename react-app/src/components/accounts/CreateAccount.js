import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createAccount } from "../../store/account";


const CreateAccountForm = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [institution, setInstitution] = useState("");
  const [balance, setBalance] = useState("");

  const account = useSelector(state => state.accounts)
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(createAccount());
  }, [dispatch]);
}
