import React from "react";
import styled from "styled-components";
import ShoppingCartItem from "./ShoppingCartItem";
const Carrinho=styled.div`  
  background-color: #32BF84;
  height: 200px;
  border-radius: 20px;
  margin-top: 26%;
    h3{
        margin: 12px;
    }
`


class ShoppingCart extends React.Component {
    state = {
      carrinho:[]
    }

    render() {
      console.log(this.props.valorTotal)
      return (
        <Carrinho>
            <h3>Carrinho:</h3>
       <ShoppingCartItem
        produtosCarrinho ={this.props.carrinho }
        deletarProdutos={this.props.deletarProdutos}
        valorTotal={this.props.valorTotal}
       />
        </Carrinho>
      )
    }  
  }
  
  export default ShoppingCart;
  