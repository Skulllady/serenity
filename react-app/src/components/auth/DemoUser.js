import React from 'react';
import { login } from "../../store/session";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function DemoUser() {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  if (user) {
    history.push('/');
  }

  const onLogin = async (e) => {
    e.preventDefault();
    await dispatch(login("demo@aa.io", "password"));
  }

  return (
    <form onSubmit={onLogin}>
      <button type="submit">Demo User</button>
    </form>
  );
}
