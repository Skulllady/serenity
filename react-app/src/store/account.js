//action
const GET_ACCOUNTS = "accounts/GET_ACCOUNTS"
const POST_ACCOUNT = "accounts/POST_ACCOUNT"
const PUT_ACCOUNT = "accounts/PUT_ACCOUNT"

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

const putAccount = (payload) => {
  return {
    type: PUT_ACCOUNT,
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

export const updateAccount = (payload) => async dispatch => {
  const { accountId, accountNumber, accountName, accountType, institution, balance } = payload;
  const response = await fetch(`/api/accounts/${accountId}/transactions`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })
  if (response.ok) {
    const data = await response.json();
    dispatch(putAccount(data))
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
      action.accounts.forEach(account => {
        allAccounts[account.id] = account
      })
      // state: {"omg": 123}
      // allAccounts{1: {accountname:stuff}, 2:{accountname:morestuff}}
      // newstate {1: {id:1}, 2:{id:2}, "omg": 123, list: [{accountname: stuff}]}
      return {
        ...allAccounts,
        ...state,
        list: action.accounts
      }

    case POST_ACCOUNT:
      const newAccount = action.payload
      //state = {1: {id:1}, list: [{id:1}]}
      //newAccount = {id:2}
      //newState = {1: {id:1}, 2:{id:2}, list: [{id:1}, {id:2}]}
      //[...state.list] creates a copy of the old list then add the new account
      return {
        ...state,
        [newAccount.id]: newAccount,
        list: [...state.list, newAccount]
      };

    case PUT_ACCOUNT:
      const updatedAccount = action.payload
      let accountId = updatedAccount.id
      let accountToEdit = (eachAccount) => eachAccount.id === accountId
      let index = state.list.findIndex(accountToEdit)
      return {
        ...state,
        [updatedAccount.id]: updatedAccount,
        list: [...state.list.slice(0, index), updatedAccount, ...state.list.slice(index + 1)]
      };


    default:
      return state;
  };
}
