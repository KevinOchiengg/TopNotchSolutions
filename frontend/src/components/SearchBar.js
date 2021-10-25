import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

const SearchBar = (props) => {
  const [name, setName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    props.history.push(`/search/name/${name}`)
  }

  return (
    <Wrapper>
      <form className='search-box-inner' onSubmit={submitHandler}>
        <div className='search-field-wrap'>
          <input
            type='search'
            name='q'
            id='q'
            className='search-field'
            placeholder='Search for products...'
            onChange={(e) => setName(e.target.value)}
          />

          <div className='search-btn'>
            <button>
              <FaSearch />
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: none;
  max-width: 670px;

  @media screen and (min-width: 768px) {
    display: block;
  }
  .search-box-inner {
    position: relative;
  }

  .search-box-inner .search-field {
    width: 100%;
    height: 46px;
    border: none;
    background-color: #fff;
    border-radius: 0 5px 5px 0;
    padding: 0 55px 0 30px;
  }

  .search-field-wrap {
    position: relative;
    width: 415px;
  }
  .search-btn button {
    width: 50px;
    height: 46px;
    font-size: 18px;
    line-height: 50px;
    text-align: center;
    display: block;
    position: absolute;
    top: 50%;
    right: 0px;
    border-radius: 0 3px 3px 0;
    color: #ffffff;
    background: #c89979;
    border: none;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .search-box-inner {
    display: flex;
    border-radius: 3px;
    background: transparent;
    border: 2px solid transparent;
  }
  .search-box-inner.border-2 {
    border: 2px solid #ddd;
  }
  .search-box-inner.border-2 .search-btn button {
    height: 54px;
    right: -2px;
    line-height: 54px;
  }

  .search-field-wrap {
    width: 100%;
  }
`
export default SearchBar
