//action
const GET_TRANSACTIONS = "transactions/GET_TRANSACTIONS"

//action creator
const getTransactions = (transactions) => {
  return {
    type: GET_TRANSACTIONS,
    transactions
  }
}

//thunk action
export const displayTransactions = (id) => {
  // debugger
  return async (dispatch) => {
    // debugger
    const response = await fetch(`/api/accounts/${id}/transactions`)
    console.log("RESPOSE OKAY?", response)
    if (response.ok) {
      const data = await response.json();
      // console.log("DATA", data)
      dispatch(getTransactions(data.transactions))
    }
  }
}


const initialState = {
  transactions: []
}

//reducer
export default function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTIONS:
      const nextState = {}
      action.transactions.forEach(transaction => {
        nextState[transaction.id] = transaction
      })
      return {
        ...state,
        ...nextState,
        transactions: action.transactions
      };
    default:
      return state;
  }
}
