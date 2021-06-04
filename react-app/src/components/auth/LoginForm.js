import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import Splash from '../Splash';
import "../stylesheets/index.css";
import "../stylesheets/nav.css";
import "../stylesheets/form.css";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Splash>
        <div className="form-container">
          <div className="main-heading">Welcome back to Serenity</div>
          <div className="secondary-heading">Log In</div>
          <form onSubmit={onLogin}>
            <div className="errors">
              {errors.map((error) => (
                <div>{error}</div>
              ))}
            </div>
            <div className="form-row">
              <label htmlFor="email">E-mail</label>
              <input
                name="email"
                type="text"
                placeholder="enter e-mail"
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div className="form-row">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="enter password"
                value={password}
                onChange={updatePassword}
              />
            </div>
            <div className="form-row">
              <button type="submit" className="auth-form-btn">Login</button>
            </div>
          </form>
        </div>
      </Splash>
    </>
  );
};

export default LoginForm;
