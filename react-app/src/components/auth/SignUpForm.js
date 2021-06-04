import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import SplashContainer from '../SplashContainer';
import "../stylesheets/index.css";
import "../stylesheets/nav.css";
import "../stylesheets/form.css";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    const data = await dispatch(signUp())
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <SplashContainer>
        <div className="form-container">
          <div className="main-heading">Welcome to Serenity</div>
          <div className="secondary-heading">Sign Up</div>
          <form onSubmit={onSignUp}>
            <div className="form-row">
              <label>User Name</label>
              <input
                type="text"
                name="username"
                placeholder="enter username"
                onChange={updateUsername}
                value={username}
              ></input>
            </div>
            <div className="form-row">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="enter email"
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
            <div className="form-row">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="enter password"
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
            <div className="form-row">
              <label>Re-Enter Password</label>
              <input
                type="password"
                name="repeat_password"
                placeholder="re-enter password"
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
            <div className="form-row">
              <button type="submit" className="auth-form-btn">Sign Up</button>
            </div>
          </form>
        </div>
      </SplashContainer>
    </>
  );
};

export default SignUpForm;
