import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";

import SplashPage from "./components/SplashPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
import LoadAccounts from '../src/components/accounts/LoadAccounts';
import Dashboard from './components/Dashboard';


function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/" exact={true}>
          <SplashPage />
        </Route>
        <ProtectedRoute path="/home" exact={true} >
          <LoadAccounts />
        </ProtectedRoute>
        <ProtectedRoute path="/accounts/:accountId/transactions" exact={true}>
          <Dashboard />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
