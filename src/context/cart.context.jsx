import {useState, createContext} from 'react'

// value to be accessed
export const CartContext = createContext({
  isOpen: null,
  setIsOpen: () => null
}
)

export const CartProvider = ({children}) => {
  const[isOpen, setIsOpen] = useState(false);

  const value = { isOpen, toggleCart}
  // console.log(products);

  function toggleCart() {
    setIsOpen(!isOpen);
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
