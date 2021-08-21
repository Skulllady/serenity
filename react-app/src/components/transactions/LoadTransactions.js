import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { displayTransactions, updateTransactions } from "../../store/transaction";
import UploadTransactions from "./UploadTransactions";
import "../stylesheets/dashboard.css"
import "../stylesheets/index.css"


function Transaction() {
  const { accountId } = useParams();
  const dispatch = useDispatch();
  const transactionList = useSelector(state => {
    console.log("TRANSACTION STATE...", state.transaction)
    return state.transaction
  })

  useEffect(() => {
    dispatch(displayTransactions(accountId))
  }, [dispatch, accountId])

  //TODO use category model instead of hardcoding when users are allowed to add and delete categories
  // let categorySet = new Set();
  // transactionList.transactions.map((transaction) => {
  //   if (transaction.category_name && !(transaction.category_name in categorySet)) {
  //     categorySet.add(transaction.category_name);
  //   }
  // })

  let categories = [
    { id: 1, categoryName: "Rent/Mortgage" },
    { id: 2, categoryName: "Bills" },
    { id: 3, categoryName: "Groceries" },
    { id: 4, categoryName: "Shopping" },
    { id: 5, categoryName: "Eating Out" },
    { id: 6, categoryName: "Medical" },
    { id: 7, categoryName: "Gym" },
    { id: 8, categoryName: "Transport" },
    { id: 9, categoryName: "Entertainment" },
    { id: 10, categoryName: "Subscription" },
    { id: 11, categoryName: "Bank Fees" },
    { id: 12, categoryName: "Transfer" },
    { id: 13, categoryName: "Loan Payment" },
    { id: 14, categoryName: "Other" },
    { id: 15, categoryName: "Uncategorized" }
  ];

  const updateCategoryOnTransaction = (e, transactionId, categoryId) => {
    e.preventDefault();
    const payload = {
      accountId,
      transactionId,
      categoryId
    }
    dispatch(updateTransactions(payload))
  }

  //TODO Allow user to sort each column

  return (
    <>
      <h2>ALL TRANSACTIONS</h2>
      <UploadTransactions />
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction</th>
              <th>Amount (USD$)</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {transactionList.transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.date}</td>
                  <td>{transaction.transaction}</td>
                  <td className="currency">${transaction.amount}</td>
                  <td>
                    <select name="categories" id="categories" value={transaction.category_id || ""} onChange={(e) => updateCategoryOnTransaction(e, transaction.id, e.target.value)}>
                      <option>---</option>
                      {categories.map((category) => {
                        return (<option key={category.id} value={category.id}>{category.categoryName}</option>)
                      })}
                    </select>
                    <label htmlFor="categories">{transaction.category_name}</label>
                  </td>
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
