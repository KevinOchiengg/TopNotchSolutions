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
      <div className='overlay'></div>
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
                  <Link to='#'>Home</Link>
                  <ul className='dropdown'>
                    <li>
                      <Link to='index.html'>Home Page 1</Link>
                    </li>
                    <li>
                      <Link to='index-2.html'>Home Page 2</Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <Link to='#'>Shop</Link>
                  <ul className='megamenu dropdown'>
                    <li className='mega-title has-children'>
                      <Link to='#'>Shop Layouts</Link>
                      <ul className='dropdown'>
                        <li>
                          <Link to='shop.html'>Shop Left Sidebar</Link>
                        </li>
                        <li>
                          <Link to='shop-right-sidebar.html'>
                            Shop Right Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to='shop-list-left.html'>
                            Shop List Left Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to='shop-list-right.html'>
                            Shop List Right Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to='shop-fullwidth.html'>Shop Full Width</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='mega-title has-children'>
                      <Link to='#'>Product Details</Link>
                      <ul className='dropdown'>
                        <li>
                          <Link to='product-details.html'>
                            Single Product Details
                          </Link>
                        </li>
                        <li>
                          <Link to='variable-product-details.html'>
                            Variable Product Details
                          </Link>
                        </li>
                        <li>
                          <Link to='affiliate-product-details.html'>
                            affiliatel Product Details
                          </Link>
                        </li>
                        <li>
                          <Link to='gallery-product-details.html'>
                            Gallery Product Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className='mega-title has-children'>
                      <Link to='#'>Shop Pages</Link>
                      <ul className='dropdown'>
                        <li>
                          <Link to='error404.html'>Error 404</Link>
                        </li>
                        <li>
                          <Link to='compare.html'>Compare Page</Link>
                        </li>
                        <li>
                          <Link to='cart.html'>Cart Page</Link>
                        </li>
                        <li>
                          <Link to='checkout.html'>Checkout Page</Link>
                        </li>
                        <li>
                          <Link to='wishlist.html'>Wish List Page</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <Link to='#'>Blog</Link>
                  <ul className='dropdown'>
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
                <li className='menu-item-has-children'>
                  <Link to='#'>Pages</Link>
                  <ul className='dropdown'>
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
                <li>
                  <Link to='about-us.html'>About Us</Link>
                </li>
                <li>
                  <Link to='contact-us.html'>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className='offcanvas-widget-area'>
            <div className='top-info-wrap'>
              <h5>My Account</h5>
              <ul className='offcanvas-account-container dropdown'>
                <li>
                  <Link to='my-account.html'>My account</Link>
                </li>
                <li>
                  <Link to='cart.html'>Cart</Link>
                </li>
                <li>
                  <Link to='wishlist.html'>Wishlist</Link>
                </li>
                <li>
                  <Link to='checkout.html'>Checkout</Link>
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

  .overlay {
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
