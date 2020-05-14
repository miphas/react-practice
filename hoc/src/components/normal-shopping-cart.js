import React from 'react'
import getUserId from '../api/get-user-id'

const ShoppingCart = () => {
  if (getUserId()) {
    return (<div>购物车列表</div>)
  } else {
    return null
  }
}

export default ShoppingCart