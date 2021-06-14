import { Pie } from 'react-chartjs-2';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { displayTransactions } from "../../store/transaction";

function Table() {
  const { accountId } = useParams();
  const dispatch = useDispatch();
  const transactionList = useSelector(state => {
    return state.transaction
  })
  useEffect(() => {
    dispatch(displayTransactions(accountId))
  }, [dispatch, accountId])

  let totalsByCategory = new Object();
  transactionList.transactions.map((transaction) => {
    let eachCategory = transaction.category_name;
    if (!totalsByCategory[eachCategory]) {
      //key: category value starts at 0
      totalsByCategory[eachCategory] = transaction.amount;
    } else {
      totalsByCategory[eachCategory] += transaction.amount;
    }
  })
  console.log("totalsByCategory", totalsByCategory)
  let arrayOfCategoryTotalPairs = Object.entries(totalsByCategory)

  return (
    <table>
      <th>Account Summary</th>
      {arrayOfCategoryTotalPairs.map((eachCategoryTotalPair) => {
        return (
          <>
            <tr><td>{eachCategoryTotalPair[0]}</td><td>${eachCategoryTotalPair[1].toFixed(2)}</td></tr>
          </>
        )
      })}
    </table>
  )
}

export default Table;
