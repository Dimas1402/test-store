import React, { useContext, useReducer } from 'react'
import { authReducer, initialState } from '../Reducers/authReducer'

const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const contextValue = useReducer(authReducer, initialState)
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useGetUser = () => {
  const contextValue = useContext(AuthContext)
  return contextValue
}
