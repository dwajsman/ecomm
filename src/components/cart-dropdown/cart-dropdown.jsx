import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'





export default function CartDropdown() {

  const {cartItems, setCartItems } = useContext(CartContext)


  console.log('ITEMS', JSON.stringify(cartItems));

  return (

    <div className={`cart-dropdown-container`} >
      <div className='cart-items'>
        {cartItems && 
          cartItems.map((item) => (
            <CartItem key={item.key} cartItem={item} />          
          ))
        }
        
        
        <Button> go to checkout </Button>
      </div>
    </div>
  )
}
