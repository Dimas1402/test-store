import React from 'react'
import Cart from '../../Components/Cart/cart'
import { Navbar } from '../../Components/Navbar/navbar'
import { useCart } from '../../Context/CustomHooks/cartHooks'
import _ from 'lodash'
import Swal from 'sweetalert2'

const CartPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [cart, dispatch] = useCart()

  // remove item data cart
  const handleRemove = res => {
    let newData = [...cart.list_product]
    let newCart = [...cart.data_cart]

    _.forEach(newData, function (item) {
      if (item?.id === res.id) {
        item.selected = false
      }
    })

    dispatch({ type: 'GET_LIST_PRODUCT', payload: newData })
    dispatch({
      type: 'GET_DATA_CART',
      payload: newCart.filter(x => x.id !== res.id)
    })
  }

  // Payment submit
  const onSubmit = e => {
    e.preventDefault()
    Swal.fire({
      icon: 'success',
      title: 'Successful Payment',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <>
      <Navbar />
      <Cart cart={cart} handleRemove={handleRemove} onSubmit={onSubmit} />
    </>
  )
}

export default CartPage
