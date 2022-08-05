import React, { FC } from 'react'
import styled from 'styled-components'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'

const SlideContainer = styled.div`
  height: 250px;
`

interface ProductSliderProps {
  slides: any[]
}

export const ProductSlider: FC<ProductSliderProps> = ({ slides }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      pagination={{ clickable: true }}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <SlideContainer>{slide}</SlideContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
