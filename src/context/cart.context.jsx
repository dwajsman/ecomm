import { useEffect } from 'react';
import {useState, createContext} from 'react'

// value to be accessed
export const CartContext = createContext({
  isOpen: null,
  setIsOpen: () => null,
  cartItems: null,
  addToCart: () => null
}
)

export const CartProvider = ({children}) => {
  const[isOpen, setIsOpen] = useState(false);
  const[cartItems, setCartItems] = useState({});

  function addToCart(id) {
    if (cartItems[`${id}`]){
      const currentQuantity = cartItems[`${id}`]
    setCartItems({...cartItems, id:(currentQuantity+1)} )
  } else {
    setCartItems({...cartItems, id:1 } )
  }
  }


  const value = { isOpen, toggleCart, addToCart}
  // console.log(products);

  // FOR TESTING PURPOSES
  // useEffect(
  //   () => {
  //     setCartItems({1:1, 2:3})
  //   }, []
  // )

  function toggleCart() {
    setIsOpen(!isOpen);
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
