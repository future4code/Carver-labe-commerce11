import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`

export class ProductCard extends React.Component {
  render() {
    const product = this.props.product
    // console.log(props.adicionar)
    return <CardContainer>
      <img src={product.photo}/>
      <CardInfo>
        <p>{product.name}</p>
        <p>R${product.price},00</p>
        <button onClick={()=>this.props.adicionarProduto(product)}>{product.id}</button>
      </CardInfo>
    </CardContainer>
  }
}
