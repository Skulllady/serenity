import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { displayTransactions } from "../../store/transaction"


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

  // TODO Turning integers to currency format (visual purposes only)
  // let amountElement = document.querySelectorAll(".currency");
  // console.log("amount element", amountElement)
  // for (let i = 0; i < amountElement.length; i++) {
  //   let num = Number(amountElement[i].innerHTML)
  //     .toLocaleString('en');
  //   amountElement[i].innerHTML = num;
  // }

  return (
    <>
      <div>Transactions go here</div>
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
    </>
  )
}

export default Transaction;
