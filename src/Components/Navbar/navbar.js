import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../Context/CustomHooks/cartHooks'

export const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [cart, dispatch] = useCart()

  const logOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <div>
      <div className='flex flex-wrap place-items-center'>
        <section className='relative mx-auto'>
          {/* navbar */}
          <nav className='flex justify-between bg-gray-800 text-white w-screen'>
            <div className='px-5 xl:px-12 py-6 flex w-full items-center'>
              <Link className='text-3xl font-bold font-heading' to='/home'>
                <div className='flex'>
                  <img
                    className='h-9'
                    src='https://tailwindui.com/img/logos/mark.svg?color=gray&shade=50'
                    alt='logo'
                  />
                  <span className='mx-2'>EX</span>
                </div>
              </Link>
              {/* Nav Links */}
              <ul className='hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12'>
                <li>
                  {/* <a className="hover:text-gray-200" href="#">
                    Home
                  </a> */}
                </li>
                <li>
                  {/* <a className="hover:text-gray-200" href="#">
                    Catagory
                  </a> */}
                </li>
              </ul>
              {/* Header Icons */}
              <div className='hidden xl:flex items-center space-x-5 items-center'>
                <Link
                  to='/cart'
                  className='flex items-center hover:text-gray-200'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                  <span className='flex absolute -mt-5 ml-4'>
                    <span className='animate-ping absolute inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75' />
                    <span className='relative inline-flex rounded-full h-5 w-5 bg-pink-500'>
                      <span className='relative text-xs left-2 top-0.5'>
                        {cart.data_cart.length}
                      </span>
                    </span>
                  </span>
                </Link>
                {/* Sign In / Register      */}
                <Link className='flex items-center hover:text-gray-200'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 hover:text-gray-200'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </Link>
                <div
                  onClick={logOut}
                  className='flex items-center hover:text-gray-200 cursor-pointer'
                >
                  <svg
                    class='h-6 w-6 text-white'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    {' '}
                    <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />{' '}
                    <polyline points='16 17 21 12 16 7' />{' '}
                    <line x1='21' y1='12' x2='9' y2='12' />
                  </svg>
                </div>
              </div>
            </div>
            {/* Responsive navbar */}
            <Link to='/cart' className='xl:hidden flex mr-6 items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 hover:text-gray-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='flex absolute -mt-5 ml-4'>
                <span className='animate-ping absolute inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75' />
                <span className='relative inline-flex rounded-full h-5 w-5 bg-pink-500'>
                  <span className='relative text-xs left-2 top-0.5'>
                    {cart.data_cart.length}
                  </span>
                </span>
              </span>
            </Link>
            <Link className='navbar-burger self-center mr-12 xl:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 hover:text-gray-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </Link>
          </nav>
        </section>
      </div>
    </div>
  )
}
