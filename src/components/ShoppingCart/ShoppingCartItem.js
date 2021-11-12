import React from "react";
import styled from "styled-components";

const Carrinho=styled.div`  
    border: 1px solid black;
    padding: 10px;
    p{
        margin: 2px;
    }
`
const produtosDePreco=styled.p` 
   padding: 20px;
    border: 1px solid black;
`


class ShoppingCartItem extends React.Component {
    state = {
      conta:0,
      carrinho:[]
    }
  
    renderizarCarrinho=()=>{

      let resposta = this.props.produtosCarrinho
      ? this.props.produtosCarrinho.map((produto)=>{
        return (
            <div>
            <p> {`${produto.name}`}</p>   
            <p> {`R$: ${produto.price}`}</p> 
            <button onClick = {()=>this.props.removerCarrinho(produto.id)}>Remove</button>
            </div>
       )
      }) 
      : <p>"sem produtos no carrinho" </p> 
     
      return resposta
    }


    render() {

    console.log("carrinho ",this.props.produtosCarrinho)
    const carrinhoEstado= this.props.produtosCarrinho
    console.log("estado do carrinho ",carrinhoEstado)
    // this.setState({carrinho:[...this.state.carrinho,carrinhoEstado]})
      return (
        <Carrinho>
       {this.renderizarCarrinho()}
       <p>Total a pagar: {this.state.conta}</p>
     
        </Carrinho>
      )
    }  
  }
  
  export default ShoppingCartItem;