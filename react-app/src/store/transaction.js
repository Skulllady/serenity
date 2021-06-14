//action
const GET_TRANSACTIONS = "transactions/GET_TRANSACTIONS"
const PUT_TRANSACTIONS = "transactions/PUT_TRANSACTIONS"

//action creator
const getTransactions = (transactions) => {
  return {
    type: GET_TRANSACTIONS,
    transactions
  }
}

const putTransactions = (transactions) => {
  return {
    type: PUT_TRANSACTIONS,
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

export const updateTransactions = (payload) => async dispatch => {
  const { accountId, transactionId, categoryId } = payload;
  const response = await fetch(`/api/accounts/${accountId}/transactions/${transactionId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
  if (response.ok) {
    const data = await response.json();
    dispatch(putTransactions(data))
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
    case PUT_TRANSACTIONS:
      const updatedTransaction = action.transactions
      // console.log("STTAAAATE.LIIIST:", state.list)
      let index = state.transactions.findIndex(
        (eachTransaction) => eachTransaction.id === updatedTransaction.id
      )
      return {
        ...state,
        [updatedTransaction.id]: updatedTransaction,
        transactions: [...state.transactions.slice(0, index), updatedTransaction, ...state.transactions.slice(index + 1)]
      };

    default:
      return state;
  }
}
