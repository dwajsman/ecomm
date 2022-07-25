import React from 'react'
import { Link, Outlet } from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import './navigation.styles.scss'

export default function navigation() {
  return (
    <div>
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        <Logo />
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to="/shop">
          SHOP
        </Link>
        <Link className='nav-link' to="/auth">
          SIGN IN
        </Link>
      </div>
    </div>

      <Outlet />
      </div>
  )
}
