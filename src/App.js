import React from 'react';
import { Products } from './components/Products/Products';
import styled from 'styled-components';
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"


const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

const products = [
  {
    id: 1,
    name: 'Produto 1',
    price: 10,
    photo: 'https://picsum.photos/200/200?a=1'
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 20,
    photo: 'https://picsum.photos/200/200?a=2'
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 30,
    photo: 'https://picsum.photos/200/200?a=3'
  },
  {
    id: 4,
    name: 'Produto 4',
    price: 40,
    photo: 'https://picsum.photos/200/200?a=4'
  },
  {
    id: 5,
    name: 'Produto 5',
    price: 50,
    photo: 'https://picsum.photos/200/200?a=4'
  }
  
]


class App extends React.Component {
  state = {
    carrinho:[]
  }
  adicionarProduto = postId => {
   console.log("chamada", postId)
   this.setState({carrinho:[...this.state.carrinho,postId]})
    // const novaListaDeCarinho = products.filter(post => {
    //   return postId === post.id;
    // });
    // console.log("produto", novaListaDeCarinho)
    // this.setState({ carrinho: [...this.state.carrinho,novaListaDeCarinho] });
    // console.log("novo carrinho", this.state.carrinho)
  }

  render() {
    console.log("novo carrinho", this.state.carrinho)
    let carrinho=this.state.carrinho
    return (
      <AppContainer>
        <p>filter</p>
        <Products 
          products={products}
          adicionarProduto={this.adicionarProduto}
        />
        
        <ShoppingCart carrinho={carrinho} />

      </AppContainer>
    )
  }  
}

export default App;
