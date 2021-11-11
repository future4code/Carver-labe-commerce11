import React from "react";
import styled from "styled-components";

const Carrinho=styled.div`  
    border: 1px solid black;
    h3{
        margin: 12px;
    }
`
const RenderizarCarrinho=()=>{
  this.props.carinho.map=((produto)=>{
    return <p>produto</p>
  })
}

class ShoppingCart extends React.Component {
    state = {
      carrinho:[]
    }
  
    render() {
      return (
        <Carrinho>
            <h3>Carrinho:</h3>
       
        {this.props.Carrinho}
        </Carrinho>
      )
    }  
  }
  
  export default ShoppingCart;
  