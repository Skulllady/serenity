//action
const GET_ACCOUNTS = "accounts/GET_ACCOUNTS"

//action creator
const getAccounts = (list) => {
  return {
    type: GET_ACCOUNTS,
    list
  }
}

//thunk action
export const displayAccounts = () => async dispatch => {
  const response = await fetch('/api/accounts/');
  if (response.ok) {
    const data = await response.json();
    console.log("DATA!!!", data)
    dispatch(getAccounts(data))
  }
}

const initialState = {
  list: []
};

const sortList = list => {
  return list.map(account => account.account_type)
}

//reducer
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNTS:
      const allAccounts = {}
      action.accounts.forEach(account => {
        allAccounts[account.id] = account
      })
      return {
        ...allAccounts,
        ...state,
        list: sortList(action.accounts)
      }
    default:
      return state;
  };
}
