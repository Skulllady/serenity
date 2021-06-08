import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { displayTransactions } from "../../store/transaction";
import "../stylesheets/dashboard.css"


function Transaction() {
  const { accountId } = useParams();
  const dispatch = useDispatch();
  const transactionList = useSelector(state => {
    console.log("TRANSACTION STATE...", state.transaction.transactions[0])
    // debugger
    return state.transaction
  })

  useEffect(() => {
    dispatch(displayTransactions(accountId))
  }, [dispatch, accountId])


  return (
    <>
      <h2>All Transactions</h2>
      <div className="table_container">
        <table>
          <tr>
            <th>Date</th>
            <th>Transaction</th>
            <th>Amount (USD$)</th>
          </tr>
          {transactionList.transactions.map((transaction) => {
            return (
              <tr>
                <td>{transaction.date}</td>
                <td>{transaction.transaction}</td>
                <td className="currency">${transaction.amount}</td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  )
}

export default Transaction;
