//action
const GET_ACCOUNTS = "accounts/GET_ACCOUNTS"
const POST_ACCOUNT = "accounts/POST_ACCOUNT"

//action creator
const getAccounts = (accounts) => {
  return {
    type: GET_ACCOUNTS,
    accounts
  }
}

const postAccount = (payload) => {
  return {
    type: POST_ACCOUNT,
    payload
  }
}

//thunk action
export const displayAccounts = () => async dispatch => {
  const response = await fetch('/api/accounts/');
  if (response.ok) {
    const data = await response.json();
    console.log("DATA!!!", data)
    dispatch(getAccounts(data.accounts))
  }
}

export const createAccount = (payload) => async dispatch => {
  const { accountNumber, accountName, accountType, institution, balance } = payload;
  const response = await fetch(`/api/accounts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
  if (response.ok) {
    const data = await response.json();
    dispatch(postAccount(data))
  }
}

const initialState = {
  list: []
};

//TODO sort accounts displayed by account type
// const sortList = list => {
//   return list.map(account => account.account_type)
// }

//reducer
export default function accountReducer(state = initialState, action) {
  switch (action.type) {

    case GET_ACCOUNTS:
      const allAccounts = {}
      // debugger
      action.accounts.forEach(account => {
        allAccounts[account.id] = account
      })
      return {
        ...allAccounts,
        ...state,
        list: action.accounts
      }

    case POST_ACCOUNT:
      return { ...state, ...action.payload };

    default:
      return state;
  };
}
