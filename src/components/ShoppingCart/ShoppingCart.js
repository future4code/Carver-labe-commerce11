import React from "react";
import styled from "styled-components";

const Carrinho=styled.div`  
    border: 1px solid black;
    h3{
        margin: 12px;
    }
`


class ShoppingCart extends React.Component {
    state = {
      carrinho:[]
    }
    renderizarCarrinho=()=>{
      // let produtosCarrinho = this.props.carrinho 
      // ? this.props.carrinho.map((teste) => {
      //   return (
      //     <p>{teste.name}</p>
      //   )
      // }) 
      // : <p>sem produtos</p>
      // console.log(produtosCarrinho)

      // return produtosCarrinho
      let resposta = this.props.carrinho
      ? this.props.carrinho.map((produto)=>{
        return (<p>{produto.name}</p>)
      }) 
      : <p>"sem produtos no carrinho" </p>
      //
      return resposta
    }
    render() {
      // console.log("carrinho",this.props.carrinho)
      return (
        <Carrinho>
            <h3>Carrinho:</h3>
       
       {this.renderizarCarrinho()}
        </Carrinho>
      )
    }  
  }
  
  export default ShoppingCart;
  