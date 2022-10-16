import {useState, createContext, useEffect} from 'react'
import PRODUCTS from '../shop-data.json'



// value to be accessed
export const ProductsContext = createContext({
  products: [],
  setProducts: () => null
}
)

export const ProductsProvider = ({children}) => {
  const[products, setProducts] = useState([]);
  const value = {products, setProducts}
  console.log('product.context.jsx line 16 ',products);
  useEffect(() => {
    setProducts(PRODUCTS)    
  }, [])

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
