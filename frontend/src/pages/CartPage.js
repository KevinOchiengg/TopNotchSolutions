import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { addToCart, removeFromCart } from '../actions/cartActions'
import Message from '../components/Message'
import { formatPrice } from '../utils/helpers'

export default function CartPage(props) {
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

  if (error) {
    return (
      <Wrapper>
        <div className='section-center'>
          <h3 className='heading'>
            <span>your</span>products
          </h3>
          <Message
            variant='danger'
            message='Error fetching cart products...'
            url='/'
            buttonText='Back Home'
          />
        </div>
      </Wrapper>
    )
  }

  if (cartItems.length === 0) {
    return (
      <Wrapper>
        <div className='section-center'>
          <h3 className='heading'>
            <span>your</span>products
          </h3>
          <Message
            message='Oops! Your Cart is Empty...'
            buttonText='Go Shopping'
            url='/products'
          />
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h3 className='heading'>
        <span>your</span>products
      </h3>
      <div class='products-container section-center'>
        <div class='box-container'>
          {cartItems.map((item) => {
            return (
              <div class='box'>
                <FaTimes onClick={() => removeFromCartHandler(item.product)} />
                <img src={item.image} alt='' />
                <div class='content'>
                  <Link to={'/product/' + item.product}>
                    <h3>{item.name}</h3>
                  </Link>
                  <span> quantity : </span>
                  <select
                    className='quantity'
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>

                  <br />
                  <span> price : </span>
                  <span class='price'>{formatPrice(item.price)} </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div class='cart-total section-center'>
        <h3 class='title'> cart total </h3>

        <div class='box'>
          <h3 class='subtotal'>
            total items: <span>{cartItems.reduce((a, c) => a + c.qty, 0)}</span>
          </h3>
          <h3 class='total'>
            total price:{' '}
            <span>{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</span>
          </h3>

          <Link to='/signin?redirect=shipping' class='btn'>
            proceed to checkout
          </Link>
          <br />
          <Link to='/products' class='btn'>
            continue to shopping
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  top: 9rem;
  padding: 8rem 0;

  .title {
    font-size: 2.5rem;
    padding: 1rem;
    color: #130f40;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  .products-container {
    -webkit-animation: fadeUp 0.4s linear;
    animation: fadeUp 0.4s linear;
  }

  .box-container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (minmax(30rem, 1fr)) [auto-fit];
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .box-container .box {
    border-radius: 0.5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
    position: relative;
    box-shadow: var(--dark-shadow);
  }

  .box svg {
    position: absolute;
    top: 0.7rem;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
    color: var(--clr-blue);
  }

  .box svg:hover {
    color: var(--clr-red);
  }

  .box img {
    height: 8rem;
  }

  .content h3 {
    font-size: 2rem;
    color: var(--clr-blue);
  }

  .box-container .box .content span {
    font-size: 1.8rem;
    color: #666;
  }

  .box-container .box .content span.price {
    color: var(--clr-blue);
    font-size: 1.7rem;
  }

  .box-container .box .content select {
    width: 8rem;
    padding: 0.5rem 1.2rem;
    font-size: 1.5rem;
    color: #130f40;
    margin: 0.7rem 0;
  }

  .cart-total {
    margin-top: 2rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;
    -webkit-animation: fadeUp 0.4s linear 0.4s backwards;
    animation: fadeUp 0.4s linear 0.4s backwards;
  }

  .cart-total .box {
    padding: 1.5rem;
  }

  .cart-total .box h3 {
    color: var(--clr-dark-grey);
    font-size: 2rem;
    padding-bottom: 0.7rem;
  }

  .cart-total .box h3 span {
    color: var(--clr-blue);
  }

  .title {
    color: var(--clr-blue);
  }

  @media (min-width: 800px) {
    top: 0;
  }
`
