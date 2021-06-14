import { Doughnut } from 'react-chartjs-2';
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
  let pieLabels = []
  let pieValues = []
  for (const category in totalsByCategory) {
    pieLabels.push(category)
    pieValues.push(totalsByCategory[category])
  }
  const data = {
    labels: pieLabels,
    datasets: [
      {
        data: pieValues,
        backgroundColor: [
          'rgba(0, 51, 102, 0.5)',
          'rgba(0, 153, 153, 0.4)',
          'rgba(0, 102, 102, 0.5)',
          'rgba(51, 204, 204, 0.4)',
          'rgba(0, 102, 153, 0.5)',
          'rgba(0, 204, 255, 0.4)',
          'rgba(0, 153, 204, 0.5)',
          'rgba(0, 102, 204, 0.4)',
          'rgba(0, 153, 255, 0.5)',
        ],
        borderColor: [
          'rgb(226, 226, 226)',
        ],
        borderWidth: 2.5,
      },
    ],
  };

  return (
    <>
      <Doughnut
        data={data}
        id="piechart"
        options={{ maintainAspectRatio: true, plugins: { legend: { position: "left" } } }}
      />
    </>

  )
}
export default Piechart;
