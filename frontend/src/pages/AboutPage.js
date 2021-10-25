import React from 'react'
import styled from 'styled-components'

const AboutPage = () => {
  return (
    <Wrapper>
      <section class='about section-center'>
        <div class='image'>
          <img src='images/about-img.jpg' alt='' />
        </div>

        <div class='content'>
          <span>welcome to our shop</span>
          <h3>we make your home more astonishing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            officiis, reiciendis veniam incidunt architecto quam velit dolorum
            exercitationem cum aliquam ab quas dicta dolores ad earum quasis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            adipisci totam, nam voluptates quis delectus. Ea quo repudiandae.
          </p>
        </div>
      </section>

      <section class='services section-center'>
        <h1 class='title'>
          <span>our services</span> <a href='#'>view all </a>
        </h1>

        <div class='box-container'>
          <div class='box'>
            <img src='images/serv-1.svg' alt='' />
            <h3>computer selling</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quod.
            </p>
          </div>

          <div class='box'>
            <img src='images/serv-2.svg' alt='' />
            <h3>computer repair</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quod.
            </p>
          </div>

          <div class='box'>
            <img src='images/serv-3.svg' alt='' />
            <h3>24 / 7 support</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quod.
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .about {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .about .image {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 40rem;
    flex: 1 1 40rem;
  }

  .about .image img {
    width: 100%;
  }

  .about .content {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 40rem;
    flex: 1 1 40rem;
  }

  .about .content span {
    font-size: 2rem;
    color: #779;
  }

  .about .content h3 {
    font-size: 2.5rem;
    color: #244d4d;
    padding-top: 1rem;
  }

  .about .content p {
    font-size: 1.4rem;
    color: #779;
    padding: 1rem 0;
    line-height: 2;
  }

  .services .box-container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (minmax(30rem, 1fr)) [auto-fit];
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1.5rem;
  }

  .services .box-container .box {
    padding: 2rem;
    text-align: center;
    border: 0.1rem solid #244d4d;
  }

  .services .box-container .box img {
    height: 8rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }

  .services .box-container .box h3 {
    font-size: 2.2rem;
    color: #244d4d;
  }

  .services .box-container .box p {
    font-size: 1.4rem;
    color: #779;
    line-height: 2;
    padding: 1rem 0;
  }
`
export default AboutPage
