import { Route, Routes } from 'react-router-dom'
import { CartPage, HomePage, LoginPage } from '../Views'
import ProtectedRoute from './protectedRoute'

export const Routers = () => {
  return (
    <Routes>
      <Route exact path='/' element={<LoginPage />} />
      <Route
        exact
        path='/home'
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        exact
        path='/cart'
        element={
          <ProtectedRoute>
            {' '}
            <CartPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
