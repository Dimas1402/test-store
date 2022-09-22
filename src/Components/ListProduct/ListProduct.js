import { Link } from 'react-router-dom'

export const ListProduct = ({ listProduct, handleAddToCart }) => {
  return (
    <div
      id='tabs-1-panel-1'
      className='space-y-10 px-4 pt-10 pb-8'
      aria-labelledby='tabs-1-tab-1'
      role='tabpanel'
      tabIndex={0}
    >
      <div className='flex justify-center'>
        {listProduct && listProduct.length > 0
          ? listProduct?.map((res, i) => (
              <div key={i} className='w-1/4 group px-5 relative text-sm'>
                <div className=' aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                  <img
                    src={res?.image}
                    alt='Models sitting back to back, wearing Basic Tee in black and bone.'
                    className='object-cover object-center'
                  />
                </div>
                <Link className='mt-6 block font-medium text-gray-900'>
                  <span className='absolute ' />
                  {res?.name}
                </Link>
                <span className='font-semibold'> ${res?.price}</span>
                {res?.selected ? (
                  <p className='mt-1 z-10 cursor-pointer text-gray-900 cursor-no-drop group-hover:opacity-75'>
                    Sold out
                  </p>
                ) : (
                  <p
                    onClick={() => handleAddToCart(res)}
                    className='mt-1 z-10 cursor-pointer text-pink-900 group-hover:opacity-75'
                  >
                    Add to Cart
                  </p>
                )}
              </div>
            ))
          : 'Item does not exist'}
      </div>
    </div>
  )
}
