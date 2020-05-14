import React from 'react'
import getUserId from '../api/get-user-id'

const NormalLogoutButton = () => {
  if (getUserId()) {
    return (<div>退出登录</div>)
  } else {
    return null
  }
}

export default NormalLogoutButton