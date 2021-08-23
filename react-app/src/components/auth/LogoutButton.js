import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const account = useSelector(state => {
    return state.account
  })
  const onLogout = async (e) => {
    dispatch(logout());
  };

  return (
    <div id="logged-in-navbar">
      <button onClick={onLogout}> 🔓︎Logout</button>
      {/* {account.list.map((account) => {
        return (
          <div className="account" key={account.id}>
            <h2>Hello, {account.name}</h2>
          </div>
        )
      })
      }; */}
    </div>
  );
}

export default LogoutButton;
