import React, { useEffect, useState } from 'react'
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
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
const Sidebar = (props) => {
  const [name, setName] = useState('')
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  const [isDropDownItemsOpen, setShowInfo] = useState(false)

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

  const submitHandler = (e) => {
    e.preventDefault()
    props.history.push(`/search/name/${name}`)
  }
  return (
    <Wrapper
      className={`${
        isSidebarOpen ? 'sidebar-wrapper open' : 'sidebar-wrapper'
      }`}
    >
      <div className='overlay'></div>
      <div className='inner-content-container'>
        <div className='btn-close-sidebar'>
          <FaTimes onClick={closeSidebar} />
        </div>

        <form>
          <input
            type='search'
            name='q'
            id='q'
            placeholder='Search product...'
            onChange={(e) => setName(e.target.value)}
          />
          <button className='search-btn'>
            <FaSearch />
          </button>
        </form>

        <ul className='mobile-menu'>
          <li className='menu-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='menu-item'>
            <Link to='/about'>About us</Link>
          </li>
          <li className='menu-item'>
            <Link to='/products'>Products</Link>
          </li>
          <li className='menu-item'>
            <div className='container'>
              <span className='menu-btn'> Admin</span>
              <button
                className='dropdown-btn'
                onClick={() => setShowInfo(!isDropDownItemsOpen)}
              >
                {isDropDownItemsOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
            </div>

            {isDropDownItemsOpen && (
              <ul>
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
            )}
          </li>
          <li className='menu-item'>
            <div className='container'>
              <span className='menu-btn'>Seller</span>
              <button
                className='dropdown-btn'
                onClick={() => setShowInfo(!isDropDownItemsOpen)}
              >
                {isDropDownItemsOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
            </div>

            {isDropDownItemsOpen && (
              <ul>
                <li>
                  <Link to='/productlist/seller'>Products</Link>
                </li>
                <li>
                  <Link to='/orderlist/seller'>Orders</Link>
                </li>
              </ul>
            )}
          </li>
          <li className='menu-item'>
            <div className='container'>
              <span className='menu-btn'>Category</span>
              <button
                className='dropdown-btn'
                onClick={() => setShowInfo(!isDropDownItemsOpen)}
              >
                {isDropDownItemsOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
            </div>

            {isDropDownItemsOpen && (
              <ul>
                <li>
                  <Link to='/'>Home Page 1</Link>
                </li>
                <li>
                  <Link to='/'>Home Page 2</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.aside`
  .inner-content-container {
    background-color: #fff;
    width: 300px;
    padding: 30px;
    height: 100%;
    position: relative;
    transition: 0.4s;
  }
  form {
    position: relative;
    margin-bottom: 10px;
  }
  input {
    color: #666;
    font-size: 13px;
    width: 100%;
    height: 40px;
    border: none;
    padding: 0 40px 0 10px;
    background-color: #f2f2f2;
  }
  .search-btn {
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

  .mobile-menu li > a,
  .menu-btn {
    font-size: 2rem;
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

  .mobile-menu li ul li a {
    font-size: 1.7rem;
    text-transform: capitalize;
    padding: 10px 15px 8px;
  }

  .menu-item {
    position: relative;
    margin: 2rem 0;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 479.98px) {
    .inner-content-container {
      width: 260px;
      padding: 15px;
    }
  }
  .btn-close-sidebar {
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
    transition: 0.4s;
  }

  @media only screen and (max-width: 479.98px) {
    .btn-close-sidebar {
      width: 40px;
      height: 40px;
      font-size: 20px;
      line-height: 40px;
    }
  }
  .btn-close-sidebar svg {
    transform: rotate(0);
    transition: 0.4s;
  }

  .btn-close-sidebar:hover svg {
    transform: rotate(-90deg);
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    width: 3rem;
    height: 3rem;
    background: #eae6eb;
    line-height: 3.5rem;
    border-radius: 50%;
    color: var(--clr-blue);
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
  }
`
