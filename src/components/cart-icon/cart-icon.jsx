import {useContext} from 'react'
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { CartContext } from '../../context/cart.context';

export default function CartIcon() {

  const { toggleCart } = useContext(CartContext);

  return (
    <div className='cart-icon-container' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  )
}
