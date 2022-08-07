import React from 'react'
import './cart-item.styles.scss'

export default function CartItem({cartItem}) {
  const { name, quantity, imageUrl } = cartItem;

  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  )
}
