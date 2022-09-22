import React from 'react'
import { Link } from 'react-router-dom'

function Cart ({ cart, handleRemove, onSubmit }) {
  return (
    <>
      <div>
        <div className='flex md:flex-row flex-col justify-center' id='cart'>
          <div
            className='lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen'
            id='scroll'
          >
            <div>
              <div className='flex items-center text-gray-500 hover:text-gray-600 cursor-pointer'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-chevron-left'
                  width={16}
                  height={16}
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <polyline points='15 6 9 12 15 18' />
                </svg>
                <Link to='/home'>
                  <p className='text-sm pl-2 leading-none'>Back</p>
                </Link>
              </div>
              <p className='text-5xl font-black leading-10 text-gray-800 pt-3'>
                Bag
              </p>
            </div>
            {cart?.data_cart.length === 0 ? (
              <div className='md:flex items-center justify-center mt-14 py-8 border-t border-gray-200'>
                No items in cart
              </div>
            ) : (
              cart?.data_cart?.map((res, i) => (
                <div
                  key={i}
                  className='md:flex items-center mt-14 py-8 border-t border-gray-200'
                >
                  <div className='w-1/4'>
                    <img
                      src={res?.image}
                      alt=''
                      className='w-full h-full object-center object-cover'
                    />
                  </div>
                  <div className='md:pl-3 md:w-3/4'>
                    <p className='text-xs leading-3 text-gray-800 md:pt-0 pt-4'>
                      {res?.type}
                    </p>
                    <div className='flex items-center justify-between w-full pt-1'>
                      <p className='text-base font-black leading-none text-gray-800'>
                        {res?.name}
                      </p>
                    </div>
                    <p className='text-xs leading-3 text-gray-600 pt-2'>
                      Height: {res?.height}
                    </p>
                    <p className='text-xs leading-3 text-gray-600 py-4'>
                      Color: {res?.black}
                    </p>
                    <p className='w-96 text-xs leading-3 text-gray-600'>
                      Composition:{res?.composition}
                    </p>
                    <div className='flex items-center justify-between pt-5 pr-6'>
                      <div className='flex itemms-center'>
                        <p
                          onClick={() => handleRemove(res)}
                          className='text-xs leading-3 underline text-red-500  cursor-pointer'
                        >
                          Remove
                        </p>
                      </div>
                      <p className='text-base font-black leading-none text-gray-800'>
                        ${res?.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className='xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full'>
            <form onSubmit={onSubmit}>
              <div className='flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto'>
                <div>
                  <p className='text-4xl font-black leading-9 text-gray-800'>
                    Summary
                  </p>
                  <div className='flex items-center justify-between pt-16'>
                    <p className='text-base leading-none text-gray-800'>
                      Subtotal
                    </p>
                    <p className='text-base leading-none text-gray-800'>
                      $
                      {cart?.data_cart.length === 0
                        ? 0
                        : cart?.data_cart
                            .map(item => item?.price)
                            ?.reduce((prev, curr) => prev + curr)}
                    </p>
                  </div>
                  <div className='flex items-center justify-between pt-5'>
                    <p className='text-base leading-none text-gray-800'>
                      Shipping
                    </p>
                    <p className='text-base leading-none text-gray-800'>
                      ${cart?.data_cart?.length === 0 ? 0 : 30}
                    </p>
                  </div>
                  <div className='flex items-center justify-between pt-5'>
                    <p className='text-base leading-none text-gray-800'>Tax</p>
                    <p className='text-base leading-none text-gray-800'>
                      ${cart?.data_cart?.length === 0 ? 0 : 35}
                    </p>
                  </div>
                </div>
                <div>
                  <p className='text-2xl font-black leading-9 text-gray-800'>
                    Select Payment Method
                  </p>
                  <div className='flex py-5'>
                    {[1, 2, 3].map(res => (
                      <div key={res} className='flex items-center mx-3'>
                        <input
                          required
                          id='default-radio-1'
                          type='radio'
                          defaultValue
                          name='default-radio'
                          className='w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                        />
                        <img
                          width={70}
                          height={70}
                          className='mx-1'
                          src={
                            res === 1
                              ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3QPJ8pQbWlbUEaH5ALtr1FWfvCJAq0NwPSI0ySX0hEFebxb7LptglI08JJWTd_WWM1U&usqp=CAU'
                              : res === 2
                              ? 'https://crm.thetempogroup.com/api/v1/media/product_image/image/6'
                              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/LinkAja.svg/2048px-LinkAja.svg.png'
                          }
                          alt=''
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label
                      htmlFor='phone'
                      className='block mb-2 text-sm font-medium font-black'
                    >
                      Phone Number
                    </label>
                    <input
                      type='number'
                      id='phone'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className='flex items-center pb-6 justify-between lg:pt-5 pt-20'>
                    <p className='text-2xl leading-normal text-gray-800'>
                      Total
                    </p>
                    <p className='text-2xl font-bold leading-normal text-right text-gray-800'>
                      $
                      {cart?.data_cart?.length === 0
                        ? 0
                        : cart?.data_cart
                            ?.map(item => item?.price)
                            ?.reduce((prev, curr) => prev + curr) +
                          30 +
                          35}
                    </p>
                  </div>
                  <button
                    disabled={cart?.data_cart?.length === 0 ? true : false}
                    type='submit'
                    className='text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white'
                  >
                    Pay
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
