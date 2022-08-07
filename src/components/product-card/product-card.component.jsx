import {useContext} from 'react'
import { CartContext } from '../../context/cart.context';

import Button from '../button/button.component'
import './product-card.styles.scss'

export default function ProductCard({product}) {
  
  const { name, imageUrl, price, id } = product;

  const {addToCart} = useContext(CartContext)

  const addProductToCart = () => {
    addToCart(id)
  }
  
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
        <Button type='inverted' onClick={addProductToCart}> Add to cart </Button>
    </div>
  )
}
