import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #32BF84;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  img{
    border-radius: 9px;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
  button{
    background-color: #64f7ce;
    border:none;
    border-radius: 10px;
    height: 22px;
  }
`

export class ProductCard extends React.Component {
  render() {
    const product = this.props.product
    return <CardContainer>
      <img src={product.photo} alt="imagem do produto"/>
      <CardInfo>
        <p>{product.name}</p>
        <p>R${product.price},00</p>
        <button value={product.id} onClick={this.props.adicionarProduto}>compar</button>
      </CardInfo>
    </CardContainer>
  }
}
