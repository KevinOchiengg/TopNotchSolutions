import React from 'react'
import styled from 'styled-components'

const Newsletter = () => {
  return (
    <Wrapper>
      <h3>subscribe us for latest updates</h3>

      <form action=''>
        <input class='box' type='email' placeholder='enter your email' />
        <input type='submit' value='subscribe' class='btn' />
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: url(../images/newsletter-bg.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 5rem 2rem;

  form {
    max-width: 55rem;
    display: flex;
    align-items: center;
    margin: 1rem auto;
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.1);
  }
  form .box {
    width: 100%;
    padding: 0.7rem 1.5rem;
    font-size: 1.7rem;
    color: #333;
    text-transform: none;
  }
`
export default Newsletter
