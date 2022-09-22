import React, { useContext, useReducer } from 'react'
import { cartReducer, initialState } from '../Reducers/cartReducer'

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const contextValue = useReducer(cartReducer, initialState)
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export const useCart = () => {
  const contextValue = useContext(CartContext)
  return contextValue
}
