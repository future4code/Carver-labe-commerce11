import React from 'react'
import { ProductCard } from './ProductCard'
import styled from 'styled-components';

const ProductsContainer = styled.div`

`;

const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`

export class Products extends React.Component {

  state = {
  }

  getFilteredAndOrderedList = () => {
    return this.props.products

  }

  render() {
    const filteredAndOrderedList = this.getFilteredAndOrderedList()
    
    return <ProductsContainer>
      <ProductsHeader>
      </ProductsHeader>
      <ProductsGrid>
        {filteredAndOrderedList.map((product) => {
          return <ProductCard
            product={product}
            adicionarProduto={this.props.adicionarProduto}
          />
        })}
      </ProductsGrid>
    </ProductsContainer>
  }
}
