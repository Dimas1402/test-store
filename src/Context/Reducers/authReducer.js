export const initialState = {
  data_user: ''
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return { ...state, data_user: action.payload }
    default:
      return state
  }
}
