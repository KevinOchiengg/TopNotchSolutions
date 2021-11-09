import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper'
import styled from 'styled-components'
import data from '../data/heroSlides'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

const Hero = () => {
  const [slides, setPeople] = useState(data)
  SwiperCore.use([Autoplay, Pagination, Navigation])

  return (
    <Wrapper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        navigation={true}
        className='home-slider section-center'
      >
        {slides.map((slide) => {
          const { id, image, title, text } = slide

          return (
            <SwiperSlide key={id} className='wrapper'>
              <div className='swiper-slide slide'>
                <div className='content'>
                  <span>our special offer</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link to='/products' className='btn'>
                    order now
                  </Link>
                </div>
                <div className='image'>
                  <img src={image} alt='' />
                </div>
              </div>
              <div className='swiper-pagination'></div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  .home-slider .slide {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .home-slider .slide .content {
    flex: 1 1 45rem;
  }

  .home-slider .slide .image {
    flex: 1 1 45rem;
  }

  .home-slider .slide .image img {
    width: 100%;
  }

  .home-slider .slide .content span {
    color: var(--green);
    font-size: 2.5rem;
  }

  .home-slider .slide .content h3 {
    color: var(--clr-blue);
    font-size: 7rem;
  }

  .home-slider .slide .content p {
    color: var(--light-color);
    font-size: 2.2rem;
    padding: 0.5rem 0;
    line-height: 1.5;
  }

  .swiper-pagination-bullet-active {
    background: var(--green);
  }
  @media (max-width: 991px) {
    .home-slider .slide .content h3 {
      font-size: 5rem;
    }
    padding-top: 15rem;
  }

  @media (max-width: 450px) {
    .home-slider .slide .content h3 {
      color: var(--black);
      font-size: 5rem;
    }
    padding-top: 15rem;
  }
`
