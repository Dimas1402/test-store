import data from '../../Views/data.json'
export const initialState = {
  data_cart: [],
  list_product: data.list_product
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_CART':
      return { ...state, data_cart: action.payload }
    case 'GET_LIST_PRODUCT':
      return { ...state, list_product: action.payload }
    default:
      return state
  }
}
