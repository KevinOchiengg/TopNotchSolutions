import React, { useEffect, useState } from 'react'
import { FaAlignRight } from 'react-icons/fa'

import { AiOutlineHeart } from 'react-icons/ai'
import {
  FaSearch,
  FaBars,
  FaShoppingCart,
  FaUser,
  FaAngleDown,
  FaTimes,
} from 'react-icons/fa'
import { Link, Route } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../actions/userActions'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import logo from '../logo.png'
import SearchBar from './SearchBar'
import Sidebar from './Sidebar'
import { listProductCategories } from '../actions/productActions'
import { formatPrice } from '../utils/helpers'
import { addToCart, removeFromCart } from '../actions/cartActions'

const Navbar = (props) => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  const [navbar, setNavbar] = useState(false)
  const productId = props.match.params.id
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1
  const cart = useSelector((state) => state.cart)
  const { cartItems, error } = cart
  const dispatch = useDispatch()
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping')
  }

  const productCategoryList = useSelector((state) => state.productCategoryList)
  const { categories } = productCategoryList
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const wishList = useSelector((state) => state.wishList)
  const { wishListItems } = wishList

  const signoutHandler = () => {
    dispatch(signout())
  }

  useEffect(() => {
    dispatch(listProductCategories())
  }, [dispatch])

  return (
    <>
      <Header className='header-top'>
        <div className='align-items-center section-center'>
          <div className='logo-area'>
            <Link to='/'>
              <img src={logo} className='nav-logo' alt='Topnotchsolutions' />
            </Link>
          </div>

          <SearchBar />

          <div className='right-blok-box '>
            <div className='user-wrap'>
              <Link to='/wishlist'>
                {wishListItems.length >= 0 && (
                  <span className='cart-total'>{wishListItems.length}</span>
                )}

                <AiOutlineHeart className='heart' />
              </Link>
            </div>

            <div className='shopping-cart-wrap'>
              <Link to='/'>
                <FaShoppingCart className='cart' />
                {cartItems.length >= 0 && (
                  <span className='cart-total'>{cartItems.length}</span>
                )}
              </Link>
              <ul className='mini-cart'>
                {cartItems.map((item) => (
                  <li className='cart-item'>
                    <div className='cart-image'>
                      <Link to={'/product/' + item.product}>
                        <img src={item.image} alt='' />
                      </Link>
                    </div>
                    <div className='cart-title'>
                      <Link to={'/product/' + item.product}>
                        <h4>{item.name}</h4>
                      </Link>
                      <div className='quanti-price-wrap'>
                        <span className='quantity'>1 ×</span>
                        <div className='price-box'>
                          <span className='new-price'>
                            {formatPrice(item.price)}
                          </span>
                        </div>
                      </div>
                      <div
                        className='remove_from_cart'
                        onClick={removeFromCartHandler}
                      >
                        <FaTimes />
                      </div>
                    </div>
                  </li>
                ))}

                <li className='mini-cart-btns'>
                  <div className='cart-btns'>
                    <Link to='/cart'>View cart</Link>
                    <Link to='/signin?redirect=shipping'>Checkout</Link>
                  </div>
                </li>
              </ul>
            </div>

            <div className='shopping-cart-wrap'>
              <FaUser className='user-icon' />

              <ul className='mini-cart'>
                <li className='cart-item'>
                  <Link to='/profile'>Profile</Link>
                </li>
                <li className='cart-item'>
                  <Link to='/orderhistory'>Orders</Link>
                </li>

                <li className='mini-cart-btns'>
                  <div className='cart-btns'>
                    {userInfo ? (
                      <span className='signout' onClick={signoutHandler}>
                        Sign out
                      </span>
                    ) : (
                      <Link to='/signin'>Sign in</Link>
                    )}

                    {userInfo ? null : <Link to='/register'>Sign up</Link>}
                  </div>
                </li>
              </ul>
            </div>

            <FaBars className='menu-bars' onClick={openSidebar} />
          </div>
        </div>
      </Header>

      <Navigation className='header-bottom'>
        <div className='align-items-center section-center '>
          <div className='main-menu-area '>
            <nav className='main-navigation'>
              <ul className='menu-items-container'>
                <li className='active'>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/products'>Products</Link>
                </li>
                <li>
                  <Link to='/about'>About Us</Link>
                </li>
                <li>
                  <Link to=''>
                    Category <FaAngleDown />
                  </Link>

                  <ul className='sub-menu'>
                    <li>
                      <Link to={`/`}>hoood</Link>
                    </li>
                  </ul>
                </li>

                {userInfo && userInfo.isAdmin && (
                  <li>
                    <Link to='/'>
                      Admin <FaAngleDown />
                    </Link>

                    <ul className='sub-menu'>
                      <li>
                        <Link to='/dashboard'> Dashboard</Link>
                      </li>
                      <li>
                        <Link to='/productlist'>Products</Link>
                      </li>
                      <li>
                        <Link to='/orderlist'>Orders</Link>
                      </li>
                      <li>
                        <Link to='/userlist'>Users</Link>
                      </li>
                      <li>
                        <Link to='/support'>Support</Link>
                      </li>
                    </ul>
                  </li>
                )}
                {userInfo && userInfo.isSeller && (
                  <li>
                    <Link to='#'>
                      Seller <FaAngleDown />
                    </Link>
                    <ul className='sub-menu'>
                      <li>
                        <Link to='/productlist/seller'>Products</Link>
                      </li>
                      <li>
                        <Link to='/orderlist/seller'>Orders</Link>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </Navigation>
      <Sidebar />
    </>
  )
}

const Header = styled.header`
  top: 0;
  left: 0;
  right: 0;
  height: 9rem;
  width: 100%;
  background: var(--clr-blue);
  border-bottom: 1px solid #fff;
  z-index: 9;
  position: fixed;
  .user-icon {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
    position: relative;
    .menu-bars {
      display: none;
    }
    .user-icon {
      display: block;
    }
  }

  .right-blok-box {
    justify-content: flex-end;
    margin: 0 0;
    padding-top: 4px;
  }

  .cart-total {
    background: #c89979;
    border-radius: 100%;
    color: var(--clr-white);
    float: left;
    font-size: 1.7rem;
    font-weight: 500;
    height: 3rem;
    line-height: 3rem;
    width: 3rem;
    position: absolute;
    text-align: center;
    text-transform: capitalize;
    top: -1.8rem;
    right: -6px;
  }

  .user-wrap.box-user {
    padding: 8px 12px;
    border-radius: 3px;
    background: transparent;
    border: 2px solid #ddd;
    color: #333;
    margin-right: 20px;
  }
  .user-wrap.box-user #cart-total {
    background: #0e7346;
  }

  .box-cart-wrap .shopping-cart-wrap {
    padding: 8px 12px;
    border-radius: 3px;
    border: 2px solid #c89979;
    background: #c89979;
  }
  .shopping-cart-wrap a:hover {
    color: #fff;
  }
  #cart-total {
    background: #0e7346;
  }
  .heart,
  .cart,
  .menu-bars,
  .user-icon {
    font-size: 2.7rem;
    color: var(--clr-white);
  }

  .menu-bars,
  .cart,
  .user-icon {
    margin-left: 1.8rem;
  }
  .shopping-cart-wrap {
    position: relative;
  }
  .shopping-cart-wrap ul.mini-cart {
    position: absolute;
    width: 320px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    right: 0;
    top: 180%;
    border-radius: 5px;
    padding: 30px;
    z-index: 99;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  @media only screen and (max-width: 479px) {
    .shopping-cart-wrap ul.mini-cart {
      padding: 30px 15px;
    }
  }
  .shopping-cart-wrap ul.mini-cart::before {
    content: '';
    position: absolute;
    right: 20px;
    top: -7px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 7px 6px;
    border-color: transparent transparent #ffffff transparent;
  }
  .cart-item {
    display: flex;
    padding-bottom: 15px;
    position: relative;
  }
  .cart-image {
    display: block;
    width: 100px;
  }
  .cart-title {
    padding-left: 15px;
    width: 60%;
  }
  .cart-title h4 {
    font-size: 14px;
    font-weight: 400;
  }
  .quanti-price-wrap {
    display: flex;
  }
  .quantity {
    margin-right: 5px;
    color: #333;
  }
  .price-box {
    color: #333;
    font-weight: 500;
  }
  .shopping-cart-wrap
    ul.mini-cart
    .cart-item
    .cart-title
    .price-box
    .old-price {
    color: var(--clr-blue);
    text-decoration: line-through;
  }
  .remove_from_cart {
    position: absolute;
    right: 0;
    top: 0;
    color: #555;
  }

  .remove_from_cart svg {
    font-size: 2rem;
  }
  .subtotal-box {
    border-top: 1px solid #ddd;
    padding-top: 15px;
  }
  .subtotal-title {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  .subtotal-title h3 {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    line-height: 20px;
    margin: 0;
  }
  @media only screen and (max-width: 767px) {
    .shopping-cart-wrap ul.mini-cart {
      right: -50px;
      width: 280px;
    }
    .shopping-cart-wrap ul.mini-cart::before {
      right: 70px;
    }
  }
  .shopping-cart-wrap:hover ul.mini-cart {
    visibility: visible;
    opacity: 1;
    top: 160%;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .right-blok-box {
      margin: 32px 0px 20px 0;
    }
  }
  @media only screen and (max-width: 767px) {
    .right-blok-box {
      margin: 32px 0px 20px 0;
    }
  }
  .right-blok-box a {
    font-size: 20px;
    display: inline-block;
    position: relative;
    padding-right: 15px;
  }
  .right-blok-box a .cart-total-amunt {
    font-size: 14px;
    font-weight: 500;
    padding-left: 6px;
  }
  @media only screen and (max-width: 479px) {
    .right-blok-box a .cart-total-amunt {
      display: none;
    }
  }

  .mini-cart-btns .cart-btns {
    justify-content: space-between;
    padding-top: 15px;
    width: 100%;
  }

  .mini-cart-btns {
    border-top: 1px solid #ddd;
  }

  .cart-btns a,
  .signout {
    margin-bottom: 10px;
    background: #eef0f1;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    color: #333;
    display: block;
    font-size: 12px;
    font-weight: 500;
    height: 40px;
    line-height: 36px;
    padding: 0 25px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    transition: var(--transition);
  }
  .cart-btns a:hover,
  .signout:hover {
    background: #c89979;
    border: 1px solid #c89979;
    color: #ffffff;
  }
  .align-items-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .nav-logo {
    width: 8rem;
  }

  .right-blok-box {
    display: flex;
  }
`

const Navigation = styled.nav`
  position: sticky;
  top: 0;
  display: none;
  width: 100%;
  height: 6rem;
  background: var(--clr-blue);
  z-index: 5;
  @media screen and (min-width: 768px) {
    display: block;
    .menu-bars {
      display: none;
    }
  }
  .main-menu-area {
    width: 100%;
  }
  .menu-items-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-menu-area ul > li {
    display: inline-block;
    position: relative;
    padding: 15px 0px;
    margin-right: 55px;
  }
  .main-menu-area ul > li:last-child {
    margin-right: 0;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .main-menu-area ul > li {
      margin-right: 40px;
    }
  }
  .main-menu-area ul > li > a {
    display: block;
    font-size: 13px;
    font-weight: 500;
    padding: 0;
    text-transform: uppercase;
    position: relative;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    color: var(--clr-white);
  }
  .main-menu-area ul > li > a i {
    margin-left: 3px;
  }
  .main-menu-area ul > li > a:hover {
    color: #c89979 !important;
  }
  .main-menu-area ul > li > a::before {
    content: '';
    background: #c89979;
    width: 0%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: 0.4s;
  }
  .main-menu-area ul > li:first-child {
    padding-left: 0;
  }
  .main-menu-area ul > li:hover > a::before {
    visibility: visible;
    opacity: 1;
    -ms-filter: 1;
    width: 100%;
  }
  .main-menu-area ul > li:hover .sub-menu,
  .main-menu-area ul > li:hover .mega-menu {
    visibility: visible;
    opacity: 1;
    -ms-filter: 1;
    top: 100%;
  }
  .main-menu-area.white_text ul > li > a {
    color: #ffffff;
  }
  .main-menu-area.menu-two_home ul > li {
    padding: 32px 0px;
  }

  .sub-menu {
    background: #ffffff;
    box-shadow: var(--dark-shadow);
    left: 0;
    padding: 15px;
    position: absolute;
    text-align: left;
    width: 200px;
    z-index: 99;
    top: 6rem;
    visibility: hidden;
    opacity: 0;
    transition: var(--transition);
  }

  .sub-menu > li {
    padding: 0 0 !important;
    margin-right: 0px;
    display: block;
  }
  .sub-menu > li:first-child {
    margin-bottom: 0;
  }
  .sub-menu > li > a {
    padding: 0;
    font-weight: 400;
    margin-bottom: 8px;
    color: #333 !important;
    text-transform: capitalize;
  }
  .sub-menu > li > a::before {
    display: none;
  }

  .hader-mid-right-box {
    display: flex;
  }
`

export default withRouter(Navbar)
