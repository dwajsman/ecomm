import {useContext} from 'react'
import { Link, Outlet } from 'react-router-dom';

import { UserContext } from '../../context/user.context';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import './navigation.styles.scss'

import { signOutUser } from '../../utils/firebase/firebase'
import ProductCard from '../../components/product-card/product-card.component';
import CartIcon from '../../components/cart-icon/cart-icon';

export default function Navigation() {

  const { currentUser } = useContext(UserContext);
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
    </div>
      <Outlet />
      </div>
  )
}
