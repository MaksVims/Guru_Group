import React, { FC } from 'react'
import styled from 'styled-components'

import { Product } from '../../types/product'
import { Title } from '../shared'

import { getFormatDate } from '../../helpers/getFormatDate';
import { getSlicingString } from '../../helpers/getSlicingString';

import { ProductIconsContent } from './ProductIconsContent';

interface ProductContentProps {
  product: Product
}

const Container = styled.div`
  margin-top: 5px;
  padding: 12px;
  padding-top: 2px;
`

const ProductTitle = styled.h2`
  font-weight: 500;
  line-height: 16px;
  font-style: normal;
  font-size: ${props => props.theme.fontSize.default};
  margin-bottom: 14px;
`
const GreyText = styled.span`
  color: ${props => props.theme.colors.textGrey};
  font-size: ${props => props.theme.fontSize.small};
  line-height: 14px;
  font-weight: 400;
`
const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductContentHeader = styled.header`
  display:flex;
  justify-content: space-between;
  margin-bottom: 8px;
`
const PricesBox = styled.div`
  display:flex;
  flex-direction:column;
  gap: 2px;
`
const OldPrice = styled.span`
  text-decoration: line-through;
  color: ${props => props.theme.colors.darkGrey};
  line-height: 16px;
  font-weight: 400;
`

export const ProductContent: FC<ProductContentProps> = ({ product }) => {
  return (
    <Container>
      <ProductContentHeader>
        <PricesBox>
          <OldPrice>{product.oldPrice}</OldPrice>
          <Title as='span'>{product.price}</Title>
        </PricesBox>
        <ProductIconsContent seen={product.seen} />
      </ProductContentHeader>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductInfo>
        <GreyText>{getSlicingString(product.locality, 15)}</GreyText>
        <GreyText>{getFormatDate(product.date)}</GreyText>
      </ProductInfo>
    </Container>
  )
}
