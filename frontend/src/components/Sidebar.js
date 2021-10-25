import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { TiShoppingCart } from 'react-icons/ti'
import { MdDashboard } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import { FaBook } from 'react-icons/fa'
import { listProductCategories } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../actions/userActions'
import styled from 'styled-components'
import Loading from './Loading'
import Message from './Message'
import { FaSearch } from 'react-icons/fa'
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const dispatch = useDispatch()
  const signoutHandler = () => {
    dispatch(signout())
  }

  const productCategoryList = useSelector((state) => state.productCategoryList)
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList
  useEffect(() => {
    dispatch(listProductCategories())
  }, [dispatch])
  return (
    <Wrapper
      className={`${
        isSidebarOpen ? 'sidebar-wrapper open' : 'sidebar-wrapper'
      }`}
    >
      <div className='off-canvas-overlay'></div>
      <div className='off-canvas-inner-content'>
        <div className='btn-close-off-canvas'>
          <FaTimes onClick={closeSidebar} />
        </div>

        <div className='off-canvas-inner'>
          <div className='search-box-offcanvas'>
            <form>
              <input type='text' placeholder='Search product...' />
              <button className='search-btn'>
                <FaSearch />
              </button>
            </form>
          </div>

          <div className='mobile-navigation'>
            <nav>
              <ul className='mobile-menu'>
                <li className='menu-item-has-children'>
                  <a href='#'>Home</a>
                  <ul className='dropdown'>
                    <li>
                      <a href='index.html'>Home Page 1</a>
                    </li>
                    <li>
                      <a href='index-2.html'>Home Page 2</a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <a href='#'>Shop</a>
                  <ul className='megamenu dropdown'>
                    <li className='mega-title has-children'>
                      <a href='#'>Shop Layouts</a>
                      <ul className='dropdown'>
                        <li>
                          <a href='shop.html'>Shop Left Sidebar</a>
                        </li>
                        <li>
                          <a href='shop-right-sidebar.html'>
                            Shop Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href='shop-list-left.html'>
                            Shop List Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href='shop-list-right.html'>
                            Shop List Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href='shop-fullwidth.html'>Shop Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li className='mega-title has-children'>
                      <a href='#'>Product Details</a>
                      <ul className='dropdown'>
                        <li>
                          <a href='product-details.html'>
                            Single Product Details
                          </a>
                        </li>
                        <li>
                          <a href='variable-product-details.html'>
                            Variable Product Details
                          </a>
                        </li>
                        <li>
                          <a href='affiliate-product-details.html'>
                            affiliatel Product Details
                          </a>
                        </li>
                        <li>
                          <a href='gallery-product-details.html'>
                            Gallery Product Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='mega-title has-children'>
                      <a href='#'>Shop Pages</a>
                      <ul className='dropdown'>
                        <li>
                          <a href='error404.html'>Error 404</a>
                        </li>
                        <li>
                          <a href='compare.html'>Compare Page</a>
                        </li>
                        <li>
                          <a href='cart.html'>Cart Page</a>
                        </li>
                        <li>
                          <a href='checkout.html'>Checkout Page</a>
                        </li>
                        <li>
                          <a href='wishlist.html'>Wish List Page</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <a href='#'>Blog</a>
                  <ul className='dropdown'>
                    <li>
                      <a href='blog.html'>Blog Left Sidebar</a>
                    </li>
                    <li>
                      <a href='blog-right-sidebar.html'>Blog Right Sidebar</a>
                    </li>
                    <li>
                      <a href='blog-grid.html'>Blog Grid Page</a>
                    </li>
                    <li>
                      <a href='blog-largeimage.html'>Blog Large Image</a>
                    </li>
                    <li>
                      <a href='blog-details.html'>Blog Details Page</a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <a href='#'>Pages</a>
                  <ul className='dropdown'>
                    <li>
                      <a href='frequently-questions.html'>FAQ</a>
                    </li>
                    <li>
                      <a href='my-account.html'>My Account</a>
                    </li>
                    <li>
                      <a href='login-register.html'>login &amp; register</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='about-us.html'>About Us</a>
                </li>
                <li>
                  <a href='contact-us.html'>Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className='offcanvas-widget-area'>
            <div className='top-info-wrap'>
              <h5>My Account</h5>
              <ul className='offcanvas-account-container'>
                <li>
                  <a href='my-account.html'>My account</a>
                </li>
                <li>
                  <a href='cart.html'>Cart</a>
                </li>
                <li>
                  <a href='wishlist.html'>Wishlist</a>
                </li>
                <li>
                  <a href='checkout.html'>Checkout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.aside`
  .mobile-header .category-toggle {
    padding: 8px 15px;
  }

  .mobile-menu-btn .off-canvas-btn {
    font-size: 22px;
    cursor: pointer;
    padding: 0px 12px;
    line-height: 1;
    padding-right: 0;
    transition: 0.4s;
    margin-top: -3px;
  }

  .mobile-menu li > a {
    font-size: 15px;
    color: #252525;
    text-transform: capitalize;
    line-height: 18px;
    position: relative;
    display: inline-block;
    padding: 10px 0;
  }

  .mobile-menu li > a:hover {
    color: #c89979;
  }

  .mobile-menu li ul li {
    border: none;
  }

  .mobile-menu li ul li a {
    font-size: 14px;
    text-transform: capitalize;
    padding: 10px 15px 8px;
  }

  .mobile-menu .has-children,
  .mobile-menu .menu-item-has-children {
    position: relative;
  }

  .mobile-menu .has-children .menu-expand,
  .mobile-menu .menu-item-has-children .menu-expand {
    line-height: 50;
    top: -5px;
    left: 95%;
    width: 30px;
    position: absolute;
    height: 50px;
    text-align: center;
    cursor: pointer;
  }

  .mobile-menu .has-children .menu-expand i,
  .mobile-menu .menu-item-has-children .menu-expand i {
    display: block;
    position: relative;
    width: 10px;
    margin-top: 25px;
    border-bottom: 1px solid #252525;
    -webkit-transition: all 250ms ease-out;
    -o-transition: all 250ms ease-out;
    transition: all 250ms ease-out;
  }

  .mobile-menu .has-children .menu-expand i:before,
  .mobile-menu .menu-item-has-children .menu-expand i:before {
    top: 0;
    width: 100%;
    content: '';
    display: block;
    position: absolute;
    transform: rotate(90deg);
    border-bottom: 1px solid #252525;
    transition: 0.4s;
  }

  .mobile-menu .has-children.active > .menu-expand i:before,
  .mobile-menu .menu-item-has-children.active > .menu-expand i:before {
    transform: rotate(0);
  }

  .search-box-offcanvas {
    margin-bottom: 10px;
  }
  .search-box-offcanvas form {
    position: relative;
  }
  .search-box-offcanvas form input {
    color: #666;
    font-size: 13px;
    width: 100%;
    height: 40px;
    border: none;
    padding: 0 40px 0 10px;
    background-color: #f2f2f2;
  }
  .search-box-offcanvas form .search-btn {
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    line-height: 42px;
    font-size: 20px;
    color: #fff;
    position: absolute;
    background: #c89979;
    border: none;
  }
  .mobile-navigation {
    overflow: hidden;
    max-height: 250px;
  }

  .mobile-menu {
    height: 100%;
    overflow: auto;
    padding-right: 30px;
    margin-right: -30px;
  }

  .mobile-navigation nav {
    height: 100%;
  }

  .off-canvas-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    content: '';
    cursor: url('../images/icon/cancel.png'), auto;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .off-canvas-inner-content {
    background-color: #fff;
    width: 300px;
    padding: 30px;
    height: 100%;
    position: relative;
    transform: translateX(calc(-100% - 50px));
    transition: 0.4s;
  }

  @media only screen and (max-width: 479.98px) {
    .off-canvas-inner-content {
      width: 260px;
      padding: 15px;
    }
  }
  .btn-close-off-canvas {
    top: 0;
    left: 100%;
    width: 50px;
    height: 50px;
    font-size: 30px;
    background-color: #c89979;
    color: #fff;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }

  @media only screen and (max-width: 479.98px) {
    .btn-close-off-canvas {
      width: 40px;
      height: 40px;
      font-size: 20px;
      line-height: 40px;
    }
  }
  .btn-close-off-canvas svg {
    transform: rotate(0);
    transition: 0.4s;
  }

  .btn-close-off-canvas:hover svg {
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }

  .off-canvas-inner {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    height: 100%;
  }

  .offcanvas-curreny-lang-support {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin: 20px 0;
    justify-content: center;
    padding-top: 15px;
  }
  .offcanvas-curreny-lang-support.header-top-settings ul li {
    color: #333;
    font-size: 14px;
  }

  .offcanvas-account-container li {
    display: inline-block;
    margin-left: 10px;
    padding-left: 10px;
    margin-bottom: 2px;
  }
  .offcanvas-account-container li::before {
    content: '';
    color: #777;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`
