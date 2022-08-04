import {useContext} from 'react'
import { Link, Outlet } from 'react-router-dom';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import './navigation.styles.scss'

import { signOutUser } from '../../utils/firebase/firebase'
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';

export default function Navigation() {

  const { currentUser } = useContext(UserContext);
  const { isOpen } = useContext(CartContext);


  console.log("USER - NAV -> ", currentUser);

  const signOutHelper = async () => {
    await signOutUser();
  }

  return (
    <div>
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        <Logo />
      </Link>
      <div className='nav-links-container'>
        {/* <h3>{currentUser ? currentUser[email] : ""}</h3>  */}
        <Link className='nav-link' to="/shop">
          SHOP
        </Link>

        {
          currentUser ? (
            <span className='nav-link' onClick={signOutHelper}> SIGN OUT </span>
          ) : (
            <Link className='nav-link' to="/auth"> SIGN IN </Link>
          )

        }

        <CartIcon />
      </div>
      { isOpen && <CartDropdown /> }
    </div>
      <Outlet />
      </div>
  )
}
//8591