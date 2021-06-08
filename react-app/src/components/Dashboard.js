import React from 'react';
import { NavLink } from 'react-router-dom';
import LoadAccounts from './accounts/LoadAccounts';
import LoadTransactions from './transactions/LoadTransactions';
import "./stylesheets/index.css";

const Dashboard = () => {
  return (
    <div>
      <LoadAccounts />
    </div>
  );
}

export default Dashboard;
