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

  let categorySet = new Set();
  let categoryObj = new Object();
  transactionList.transactions.map((transaction) => {
    let eachCategory = transaction.category_name;
    if (!(transaction.category_name in categorySet)) {
      categorySet.add(transaction.category_name);
      //key: category value starts at 0
      if (!categoryObj[eachCategory]) {
        categoryObj[eachCategory] = 0;
      }
    }
    if (eachCategory in categoryObj) {
      categoryObj[eachCategory] += transaction.amount;
      console.log("OBJECT: ", categoryObj, "Category: ", eachCategory, "Amount: ", transaction.amount)
    }
  })
  let pieLabels = []
  let pieValues = []
  for (const category in categoryObj) {
    pieLabels.push(category)
    pieValues.push(categoryObj[category])
  }
  const data = {
    labels: pieLabels,
    datasets: [
      {
        data: pieValues,
        backgroundColor: [
          'rgba(0, 51, 102, 0.2)',
          'rgba(0, 102, 102, 0.2)',
          'rgba(0, 102, 153, 0.2)',
          'rgba(0, 153, 204, 0.2)',
          'rgba(0, 102, 204, 0.2)',
          'rgba(0, 153, 255, 0.2)',
          'rgba(0, 204, 255, 0.2)',
          'rgba(51, 204, 204, 0.2)',
          'rgba(0, 153, 153, 0.2)',
        ],
        borderColor: [
          'rgb(226, 226, 226)',
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
