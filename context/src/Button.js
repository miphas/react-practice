import React from 'react';
import {ThemeContext} from './ThemeContext'

const Button = (props, context) => {
  return (
    <ThemeContext.Consumer>
    {
      theme => (<button>{theme}</button>)
    }
    </ThemeContext.Consumer>
  )
}

export default Button