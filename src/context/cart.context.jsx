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
    // console.log('BEFORE adding item', JSON.stringify(cartItems));
    const currentQuantity = cartItems[`${id}`]
      // console.log("my ID is?", id, currentQuantity);
    setCartItems(
      (cartItems) => ({...cartItems, [`${id}`]:(Number([`${currentQuantity}`])+1) })
    )
      //`${{...cartItems, id:(currentQuantity+1) }}`)
    // console.log('after adding item', JSON.stringify(cartItems));
  } else {
    // console.log(JSON.stringify(cartItems));
    // console.log("else ID is?", id);
    setCartItems((cartItems) => ({...cartItems, [`${id}`]:1}))
    // console.log('hello', JSON.stringify(cartItems));

  }
  }


  const value = { isOpen, toggleCart, cartItems, addToCart}
  // console.log(products);

  // FOR TESTING PURPOSES
  // useEffect(
  //   () => {
  //     setCartItems({1:1, 2:3})
  //   }, []
  // )

  function toggleCart() {
    //log cart items
    console.log('cart items', cartItems);
    setIsOpen(!isOpen);
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}


// create a context provider for cart items
// import { useContext } from 'react' 
// import { CartContext } from '../../context/cart.context'
//  

// export const CartProvider = ({children}) => {
//   const[cartItems, setCartItems] = useState({});
//   const[isOpen, setIsOpen] = useState(false);
//   const[cartItems, setCartItems] = useState({});


//   function addToCart(id) {
//     if (cartItems[`${id}`]){


