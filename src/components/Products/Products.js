import React from 'react'
import { ProductCard } from './ProductCard'
import styled from 'styled-components';

const ProductsContainer = styled.div`

`;

const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: flex-end;
  p{

 margin-right: 49%;
  }
  span{
    margin-right: 2%;
  }
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
   let product = this.props.products.map((product)=>{
     return (
      <ProductCard
        product={product}
        adicionarProduto={this.props.adicionarProduto}
      />
     )
   })

   return product

  }

  render() {
    const filteredAndOrderedList = this.getFilteredAndOrderedList()
    
    return <ProductsContainer>
      <ProductsHeader>
      <p>Quantidade de produtos:</p>
      <span>Ordenação:</span>
      
      <select>
        <option>crescente</option>
        <option>descrescente</option>
      </select>
      </ProductsHeader>
      <ProductsGrid>
      
        {filteredAndOrderedList}
      </ProductsGrid>
    </ProductsContainer>
  }
}
