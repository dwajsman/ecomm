import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { ProductsContext } from '../../context/products.context'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'



export default function CartDropdown() {

  //get cart from context
  const { cartItems } = useContext(CartContext);
  //import products.context.jsx from context folder and get products from it 
  const { products } = useContext(ProductsContext);



  //CONSOLE LOG THE CART ITEMS
  console.log('CART ITEMS ==', cartItems);


  return (

    <div className={`cart-dropdown-container`} >
      <div className='cart-items'>
        {cartItems && 
          Object.entries(cartItems).map(([key,value]) => (
            // const prod_name = products.find(product => product.id === key).name;
            <div>
              <CartItem key={key} name='prod_name' quantity="2" />
            </div>
            )

            // <CartItem key={key} id={key} quantity={value}/>
            //const { name, quantity, imageUrl } = cartItem;
          )
        }

        
        
        <Button> go to checkout </Button>
      </div>
    </div>
  )
}


// REFERENCE:  https://stackoverflow.com/questions/38465005/accessing-key-name-in-key-value-pairs-on-props-object-in-react

// const petList = Object.entries(fido).map(([key,value])=>{
//   return (
//       <div>{key} : {value.toString()}</div>
//   );
// })
