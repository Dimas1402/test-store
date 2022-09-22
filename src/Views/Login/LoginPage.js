import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetUser } from '../../Context/CustomHooks/authHooks'
import { loginUser } from '../../Service/Login/loginService'

const LoginPage = () => {
  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [user, dispatch] = useGetUser()
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  })

  const handleSubmit = async e => {
    e.preventDefault()
    const [result, error] = await loginUser(state)
    localStorage.setItem('token', result.data.token)
    dispatch({ type: 'GET_USER', payload: state })
    if (error) {
      console.log(error)
    }
  }

  if (localStorage.getItem('token')) {
    navigate('/home')
  }
  return (
    <>
      <div className='flex  height h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full shadow-lg p-10  max-w-md space-y-8'>
          <div>
            <img
              className='mx-auto h-12 w-auto'
              src='https://tailwindui.com/img/logos/mark.svg?color=gray&shade=600'
              alt='Your Company'
            />
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
              Sign in to your account
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className='mt-8 space-y-6'
            action='#'
            method='POST'
          >
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='-space-y-px rounded-md shadow-sm'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  defaultValue={state.email}
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm'
                  placeholder='Email address'
                />
              </div>
              <div className='pt-4'>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  defaultValue={state.password}
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm'
                  placeholder='Password'
                />
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-gray-900'
                >
                  Remember me
                </label>
              </div>
              <div className='text-sm'></div>
            </div>
            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
              >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  {/* Heroicon name: mini/lock-closed */}
                  <svg
                    className='h-5 w-5 text-gray-500 group-hover:text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage
