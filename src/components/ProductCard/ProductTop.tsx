import React, { FC } from 'react'
import styled from 'styled-components'

import { Product } from '../../types/product'

import { ProductIconsTop } from './ProductIconsTop';

interface ProductTopProps {
  product: Product
  img: string,
}

const Container = styled.div`
  height: 70%;
  position: relative;   
`

const ImageProduct = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const CardBanner = styled.div`
  position: absolute;
  padding: 8px 5px;
  background: ${props => props.theme.colors.dark};
  line-height: 14px;
  font-weight: 400;
  text-aling:center;
  color: white;
  letter-spacing: 1px;

  left: 50%;
  top:17px;
  transform: translateX(-50%);
  border-radius: 8px;
`

export const ProductTop: FC<ProductTopProps> = ({ product, img }) => {
  return (
    <Container>
      {product.seen && <CardBanner>Просмотрено</CardBanner>}
      <ImageProduct src={img} alt={product.title} />
      <ProductIconsTop />
    </Container>
  )
}
