import { useContext } from 'react'
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'

import { CartContext } from '../../context/cart.context'




export default function CartDropdown() {

  const { isOpen } = useContext(CartContext);

  return (
    <div className={`cart-dropdown-container ${
      isOpen ?
        ('hide') : ('')
     }`} >
      <div className='cart-items'>
        <Button> go to checkout </Button>
      </div>
    </div>
  )
}
