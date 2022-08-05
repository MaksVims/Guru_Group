import React, { FC } from 'react'
import styled from 'styled-components';

import { Product } from '../../types/product'

import { ProductTop } from './ProductTop';
import { ProductContent } from './ProductContent';

interface ProductCardProps {
  product: Product,
}

interface ContainerProductProps {
  seen: boolean
}

const ContainerProduct = styled.a<ContainerProductProps>`
  cursor:pointer;
  height: 368px;
  border-radius: 8px;
  overflow: hidden;
  &:hover {
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.6));
  }
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
  background: ${props => props.seen ? props.theme.colors.bg.seen : 'white'};
`

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <ContainerProduct seen={product.seen}>
      <ProductTop
        product={product}
        img={'https://source.unsplash.com/random'}
      />
      <ProductContent product={product} />
    </ContainerProduct>
  )
}
