import React, { useState, useCallback, useEffect, useMemo } from 'react'
import styled from 'styled-components'

import { Product } from './../types/product';
import { useFetching } from './../hooks/useFetching';
import { ProductsService } from './../api/ProductsService';
import { useToggle } from './../hooks/useToggle';
import { ProductCard } from './ProductCard';
import { Title, Loader, Error, Button } from './shared';

const PageTitle = styled(Title)`
  text-indent: 20px;
  margin-bottom: 8px;
`

const PageWrapper = styled.main`
   margin: 0 auto;
   padding-top: 25px;
   padding-bottom: 30px;
   display:flex;
   justify-content: center; 
`

const GridProduct = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media(max-width:${props => props.theme.media.laptops}) {
    grid-template-columns: 1fr 1fr 1fr;
    padding-left: 10px;
    padding-right: 10px;
  }

  @media(max-width:${props => props.theme.media.tablets}) {
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width:${props => props.theme.media.mobile}) {
    grid-template-columns: 1fr;
    padding-left: 25px;
    padding-right: 25px;
  }
`

const ShowMoreButton = styled(Button)`
  margin-top: 12px;
  margin-left: auto;
`

const ArrowDown = styled.span`
  display: inline-block;
  width:10px;
  height:10px;
  position: relative;
  top: -3px;
  border-bottom: 2px solid ${props => props.theme.colors.accent};
  border-right: 2px solid ${props => props.theme.colors.accent};
  transform: rotate(45deg);
  margin-left:5px;
`

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isShowAll, setShowAll] = useToggle(false)
  const [fetchProducts, productsLoading, error] = useFetching(useCallback(async () => {
    const products = await ProductsService.getAll()
    setProducts(products)
  }, []))
  const showProducts = useMemo(() => !isShowAll ? products.slice(0, 16) : products, [products, isShowAll])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  if(error) {
    return <Error>{error}</Error>
  }

  const content = (
    <>
      <GridProduct>
        {showProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </GridProduct>
      {!isShowAll &&
        <ShowMoreButton onClick={() => setShowAll(true)}>
          Показать еще
          <ArrowDown />
        </ShowMoreButton>}
    </>
  )

  return (
    <PageWrapper>
      <section style={{ width: 968 }}>
        <PageTitle>Похожие объявления</PageTitle>
        {productsLoading
          ? <Loader />
          : content
        }
      </section>
    </PageWrapper>
  )
}
