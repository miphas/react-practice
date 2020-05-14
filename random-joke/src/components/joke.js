import React from 'react'
import logo from '../assets/logo192.png'

const Joke = React.memo(({value}) => {
  return (
    <div>
      <img alt="simle pic" src={logo}/>
      {value || 'loading...'}
    </div>
  )
})

export default Joke