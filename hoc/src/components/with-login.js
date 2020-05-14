import React from 'react';
import getUserId from '../api/get-user-id'

const withLogin = (Component) => {
  const NewComponent = (props) => {
    if (getUserId()) {
      return <Component {...props} />
    } else {
      return null
    }
  }
  return NewComponent;
}

export default withLogin;