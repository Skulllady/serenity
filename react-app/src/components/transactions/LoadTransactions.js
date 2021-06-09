import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { displayTransactions } from "../../store/transaction";
import "../stylesheets/dashboard.css"
import "../stylesheets/index.css"


function Transaction() {
  const { accountId } = useParams();
  const dispatch = useDispatch();
  const transactionList = useSelector(state => {
    console.log("TRANSACTION STATE...", state.transaction)
    // debugger
    return state.transaction
  })

  useEffect(() => {
    dispatch(displayTransactions(accountId))
  }, [dispatch, accountId])

  let categorySet = new Set();
  transactionList.transactions.map((transaction) => {
    if (!(transaction.category_name in categorySet)) {
      categorySet.add(transaction.category_name);
    }
  })
  let categories = [...categorySet];
  console.log(categories)

  //TODO Customise dates on dashboard based on csv info
  // const convertIntToDate = (int) => {
  //   int.toString().split('',2);

  // }

  return (
    <>
      <h2>ALL TRANSACTIONS</h2>
      <div className="table_container">
        <table>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Transaction</th>
              <th>Amount (USD$)</th>
              <th>Category</th>
            </tr>
            {transactionList.transactions.map((transaction) => {
              return (
                <tr>
                  <td>{transaction.date}</td>
                  <td>{transaction.transaction}</td>
                  <td className="currency">${transaction.amount}</td>
                  <td>  <label for="categories">{transaction.category_name}</label>
                    <select name="categories" id="categories">
                      <option></option>
                      {categories.map((category) => {
                        return <option value="Change">{category}</option>
                      })}
                    </select></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Transaction;
