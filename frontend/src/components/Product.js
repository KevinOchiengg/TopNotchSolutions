import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import styled from 'styled-components'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaEye } from 'react-icons/fa'
import { formatPrice } from '../utils/helpers'

export default function Product({ product }) {
  const [qty] = useState(1)

  return (
    <Wrapper>
      <Link to={`/wishlist/${product._id}`} className='heart'>
        <AiOutlineHeart />
      </Link>
      <Link to={`/product/${product._id}`} className='eye'>
        <FaEye />
      </Link>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <Link to={`/product/${product._id}`}>
        <h3>{product.name.substring(0, 20)}</h3>
      </Link>
      <div className='content'>
        <Rating rating={product.rating} numReviews={product.numReviews} />

        <span className='price'>{formatPrice(product.price)}</span>

        <Link className='btn' to={`/cart/${product._id}?qty=${qty}`}>
          add to cart
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 2.5rem;
  background: #fff;
  border-radius: 0.5rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  box-shadow: var(--dark-shadow);
  position: relative;
  overflow: hidden;
  text-align: center;

  &:hover .heart {
    right: 1.5rem;
  }

  &:hover .eye {
    left: 1.5rem;
  }
  .heart,
  .eye {
    position: absolute;
    top: 1.5rem;
    background: #eee;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    line-height: 5rem;
    font-size: 2rem;
    color: var(--black);
  }

  .heart:hover,
  .eye:hover {
    background: var(--green);
    color: #fff;
  }

  .heart {
    right: -15rem;
  }

  .eye {
    left: -15rem;
  }

  img {
    height: 17rem;
    margin: 1rem auto;
  }

  h3 {
    color: var(--clr-blue);
    font-size: 2rem;
  }

  .rating {
    padding: 1rem 0;
    justify-content: center;
  }

  .price {
    color: var(--green);
    font-weight: bolder;
    margin-right: 1rem;
    font-size: 2rem;
  }
`
