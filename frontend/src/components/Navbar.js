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

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  const [navbar, setNavbar] = useState(false)
  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, { center, bottom })
  }

  const handleScroll = () => {
    if (Window.scrollY < 300) setNavbar(true)
    else setNavbar(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }
  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const wishList = useSelector((state) => state.wishList)
  const { wishListItems } = wishList
  const dispatch = useDispatch()

  const signoutHandler = () => {
    dispatch(signout())
  }

  return (
    <Wrapper>
      <div className='header-top'>
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
                <span className='cart-total'>22</span>
                <AiOutlineHeart className='heart' />
              </Link>
            </div>

            <div className='shopping-cart-wrap'>
              <Link to='/'>
                <FaShoppingCart className='cart' />
                <span className='cart-total'>76</span>
              </Link>
              <ul className='mini-cart'>
                <li className='cart-item'>
                  <div className='cart-image'>
                    <Link to='product-details.html'>
                      <img alt='' src='images/hood3.png' />
                    </Link>
                  </div>
                  <div className='cart-title'>
                    <Link to='product-details.html'>
                      <h4>Product Name 01</h4>
                    </Link>
                    <div className='quanti-price-wrap'>
                      <span className='quantity'>1 ×</span>
                      <div className='price-box'>
                        <span className='new-price'>$130.00</span>
                      </div>
                    </div>
                    <Link className='remove_from_cart' to='#'>
                      <FaTimes />
                    </Link>
                  </div>
                </li>
                <li className='cart-item'>
                  <div className='cart-image'>
                    <Link to='product-details.html'>
                      <img alt='' src='images/hood3.png' />
                    </Link>
                  </div>
                  <div className='cart-title'>
                    <Link to='product-details.html'>
                      <h4>Product Name 03</h4>
                    </Link>
                    <div className='quanti-price-wrap'>
                      <span className='quantity'>1 ×</span>
                      <div className='price-box'>
                        <span className='new-price'>$130.00</span>
                      </div>
                    </div>
                    <Link to='#' className='remove_from_cart'>
                      <FaTimes />
                    </Link>
                  </div>
                </li>
                <li className='subtotal-box'>
                  <div className='subtotal-title'>
                    <h3>Sub-Total :</h3>
                    <span>$ 260.99</span>
                  </div>
                </li>
                <li className='mini-cart-btns'>
                  <div className='cart-btns'>
                    <Link to='/cart'>View cart</Link>
                    <Link to='/'>Checkout</Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className='user-wrap'>
              <FaBars className='heart' onClick={openSidebar} />
            </div>
          </div>
        </div>
      </div>

      <nav className={'header-bottom'}>
        <div className='align-items-center section-center'>
          <div className='main-menu-area '>
            <nav className='main-navigation'>
              <ul className='menu-items-container'>
                <li className='active'>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='about-us.html'>About Us</Link>
                </li>
                <li>
                  <Link to='blog.html'>
                    Category <FaAngleDown />
                  </Link>

                  <ul className='sub-menu'>
                    <li>
                      <Link to='blog.html'>Blog Left Sidebar</Link>
                    </li>
                    <li>
                      <Link to='blog-right-sidebar.html'>
                        Blog Right Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link to='blog-grid.html'>Blog Grid Page</Link>
                    </li>
                    <li>
                      <Link to='blog-largeimage.html'>Blog Large Image</Link>
                    </li>
                    <li>
                      <Link to='blog-details.html'>Blog Details Page</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='blog.html'>
                    Admin <FaAngleDown />
                  </Link>

                  <ul className='sub-menu'>
                    <li>
                      <Link to='blog.html'>Blog Left Sidebar</Link>
                    </li>
                    <li>
                      <Link to='blog-right-sidebar.html'>
                        Blog Right Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link to='blog-grid.html'>Blog Grid Page</Link>
                    </li>
                    <li>
                      <Link to='blog-largeimage.html'>Blog Large Image</Link>
                    </li>
                    <li>
                      <Link to='blog-details.html'>Blog Details Page</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to='#'>
                    Account <FaAngleDown />
                  </Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='frequently-questions.html'>FAQ</Link>
                    </li>
                    <li>
                      <Link to='my-account.html'>My Account</Link>
                    </li>
                    <li>
                      <Link to='login-register.html'>login &amp; register</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
      <Sidebar />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: relative;
  left: 0;
  right: 0;
  .header-top {
    width: 100%;
    background: var(--clr-blue);
    border-bottom: 1px solid #fff;
  }

  .header-bottom {
    width: 100%;
    background: var(--clr-blue);
  }

  .right-blok-box {
    justify-content: flex-end;
    margin: 0 0;
    padding-top: 4px;
  }

  .cart-total {
    background: #c89979;
    border-radius: 100%;
    color: #ffffff;
    float: left;
    font-size: 8px;
    font-weight: 500;
    height: 20px;
    line-height: 22px;
    width: 20px;
    position: absolute;
    text-align: center;
    text-transform: capitalize;
    top: -10px;
    right: -0px;
  }
  .user-wrap {
    padding-right: 10px;
    font-size: 20px;
    position: relative;
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
  .box-cart-wrap .shopping-cart-wrap a:hover {
    color: #fff;
  }
  .box-cart-wrap #cart-total {
    background: #0e7346;
  }
  .heart,
  .cart {
    color: var(--clr-white);
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
    -ms-filter: 0;
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
    background: none;
    color: #666 !important;
    display: block;
    font-size: 0;
    height: auto;
    left: auto;
    margin: 0;
    position: absolute;
    right: 0;
    top: 0;
    padding-right: 0;
    width: auto;
    z-index: 1;
  }
  .shopping-cart-wrap
    ul.mini-cart
    .cart-item
    .cart-title
    .remove_from_cart::before {
    content: '';
    font-size: 18px;
    font-family: simple-line-icons;
    color: #555;
    right: 0;
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
    -ms-filter: 1;
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
  .mini-cart-btns .cart-btns a {
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
  }
  .mini-cart-btns .cart-btns a:hover {
    background: #c89979;
    border: 1px solid #c89979;
    color: #ffffff;
  }
  .align-items-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-logo {
    width: 8rem;
  }

  .right-blok-box {
    display: flex;
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
    -ms-filter: 0;
    -webkit-transition: 0.4s;
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

  .main-menu-area .sub-menu {
    background: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    left: 0;
    padding: 15px;
    position: absolute;
    text-align: left;
    width: 200px;
    z-index: 99;
    top: 120%;
    visibility: hidden;
    opacity: 0;
    -ms-filter: 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border: 2px solid red;
  }

  .main-menu-area .mega-menu {
    background: #ffffff;
    left: 0;
    padding: 30px 20px;
    position: absolute;
    text-align: left;
    width: 640px;
    z-index: 99;
    top: 120%;
    visibility: hidden;
    opacity: 0;
    -ms-filter: 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .main-menu-area .sub-menu > li {
    padding: 0 0 !important;
    margin-right: 0px;
    display: block;
  }
  .main-menu-area .sub-menu > li:first-child {
    margin-bottom: 0;
  }
  .main-menu-area .sub-menu > li > a {
    padding: 0;
    font-weight: 400;
    margin-bottom: 8px;
    color: #333 !important;
    text-transform: capitalize;
  }
  .main-menu-area .sub-menu > li > a::before {
    display: none;
  }

  .main-menu-area .mega-menu > li {
    width: 33.333%;
    float: left;
    padding: 0 !important;
    margin-right: 0px;
  }
  .main-menu-area .mega-menu > li > a {
    padding: 0;
    margin-bottom: 10px;
    padding-bottom: 5px;
    color: #333 !important;
  }
  .main-menu-area .mega-menu > li > a::before {
    display: none;
  }
  .main-menu-area .mega-menu > li ul > li {
    display: block;
    padding: 0;
    margin-right: 0;
  }
  .main-menu-area .mega-menu > li ul > li a {
    padding: 0;
    color: #333 !important;
    text-transform: capitalize;
    display: block;
    font-weight: 400;
    margin-top: 8px;
  }
  .main-menu-area .mega-menu > li ul > li a::before {
    display: none;
  }

  .hader-mid-right-box {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    .header-bottom {
      display: block;
    }
  }
`

export default withRouter(Navbar)
