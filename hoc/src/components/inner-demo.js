import React from 'react';
import withLogin from './with-login'
import InnerLogoutButton from './inner-logout-button'
import InnerShoppingCart from './inner-shopping-cart'

const WapperLogoutButton = withLogin(InnerLogoutButton)
const WapperShoppingCart = withLogin(InnerShoppingCart)

const InnerDemo = () => {
  return (
    <div>
      <h2>InnerDemo</h2>
      <WapperLogoutButton />
      <WapperShoppingCart />
    </div>
  );
}

export default InnerDemo;