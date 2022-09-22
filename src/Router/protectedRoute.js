import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute ({ children }) {
  const isAuthenticated = localStorage.getItem('token')

  return isAuthenticated ? children : <Navigate to='/' replace />
}

export default ProtectedRoute
