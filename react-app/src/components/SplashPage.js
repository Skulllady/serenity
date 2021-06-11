import React from 'react';
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import SplashContainer from './SplashContainer';
import DemoUser from './auth/DemoUser'

function SplashPage() {
  const user = useSelector(state => state.session.user);

  if (user) {
    return <Redirect to="/accounts/1/transactions" />;
  }

  return (
    <>
      <SplashContainer >
        <h1>Welcome to Serenity</h1>
        <h2></h2>
        <p>"Do not tell me what you value, show me your budget, and I will tell you what you value.” --Joe Biden</p>
        <DemoUser />
      </SplashContainer >
    </>
  )
}

export default SplashPage;
