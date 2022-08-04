import React from 'react'
import {useContext} from 'react'
import ProductCard from '../../components/product-card/product-card.component';
import { ProductsContext } from '../../context/products.context';

import './shop.styles.scss'


export default function Shop() {
  const { products } = useContext(ProductsContext);

  console.log('SHOP SHOW ==', products);

  return (
    <div className='products-container'>
      
      {
        products ? (
          products.map(
            (product) => {
              return(
                  <ProductCard product={product} key={product.id}/>
              )
          }
        )) : (<p> no product </p>) 
      }

    </div>
  )
}
