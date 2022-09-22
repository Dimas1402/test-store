import React, { useState } from 'react'
import { ListProduct } from '../../Components/ListProduct/ListProduct'
import { Navbar } from '../../Components/Navbar/navbar'
import { useCart } from '../../Context/CustomHooks/cartHooks'
import _ from 'lodash'
import { Search } from '../../Components/Search/search'

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [cart, dispatch] = useCart()
  const [searchValue, setSearchValue] = useState('')

  //func add to cart
  const handleAddToCart = res => {
    let newData = [...cart.list_product]
    _.forEach(newData, function (item) {
      if (item?.id === res.id) {
        item.selected = true
      }
    })
    dispatch({ type: 'GET_LIST_PRODUCT', payload: newData })
    dispatch({ type: 'GET_DATA_CART', payload: [...cart.data_cart, res] })
  }

  // search list product
  const onChangeSearch = event => {
    setSearchValue(event.target.value)
  }
  // filter array
  var query = searchValue
  var data = cart.list_product
  const lowercasedFilter = query.toLowerCase()
  const filteredData = data.filter(item => {
    return item?.name?.toLowerCase().includes(lowercasedFilter)
  })

  return (
    <>
      <Navbar />
      <Search onChange={onChangeSearch} />
      <ListProduct
        listProduct={filteredData}
        handleAddToCart={handleAddToCart}
      />
    </>
  )
}

export default Home
