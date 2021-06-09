import { Pie } from 'react-chartjs-2';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { displayTransactions } from "../../store/transaction";

function Piechart() {
  const { accountId } = useParams();
  const dispatch = useDispatch();
  const transactionList = useSelector(state => {
    return state.transaction
  })
  useEffect(() => {
    dispatch(displayTransactions(accountId))
  }, [dispatch, accountId])

  let categoryset = new Set();
  transactionList.transactions.map((transaction) => {
    if (!(transaction.category_name in categoryset)) {
      categoryset.add(transaction.category_name);
    }
  })
  let categories = [...categoryset];
  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Overview',
        data: transactionList.transactions.map((transaction) => {
          return transaction.amount
        }),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1.5,
      },
    ],
  };

  return (
    <>
      <Pie
        data={data}
        id="piechart"
        options={{ maintainAspectRatio: false }}
      />
    </>

  )
}
export default Piechart;
