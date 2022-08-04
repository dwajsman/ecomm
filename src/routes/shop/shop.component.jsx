import React from 'react'
import {useContext} from 'react'
// import SHOP_DATA from '../../shop-data.json';

import { ProductsContext } from '../../context/products.context';



export default function Shop() {
  const { products } = useContext(ProductsContext);

  console.log('SHOP SHOW ==', products);

  return (
    <div>
      <p>My shop</p>
      
      {
        products ? (
          products.map(
            ({id, name}) => {
              return(
                <div key={id}>
                  <h1>{name}</h1>
                </div>
              )
          }
        )) : (<p> no product </p>) 
      }

    </div>
  )
}
