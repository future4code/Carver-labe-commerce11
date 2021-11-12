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
    photo: 'https://picsum.photos/200/200?a=5'
  }
  
]


class App extends React.Component {
  state = {
    carrinho:[]
  }
  adicionarProduto = postId => {
 
   this.setState(
     {
       carrinho:[...this.state.carrinho,postId]
    })
    // const novaListaDeCarinho = products.filter(post => {
    //   return postId === post.id;
    // });
    // console.log("produto", novaListaDeCarinho)
    // this.setState({ carrinho: [...this.state.carrinho,novaListaDeCarinho] });
    // console.log("novo carrinho", this.state.carrinho)
  }

  removerCarrinho = (produtoId) =>{
    console.log(produtoId)
    let remove = this.props.carrinho.filter(produto =>{
      if(produtoId === produto.id){
        return produto
      }
    })
   this.setState({ carrinho: remove })
   
}
  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.carrinho))
}

componentDidMount() {
  const tarefasString = localStorage.getItem("tarefas")
  const tarefasParse = JSON.parse(tarefasString)

  this.setState({ carrinho: tarefasParse || [] })
};

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
        
        <ShoppingCart
         carrinho={carrinho}
         deletarProdutos={this.removerCarrinho}
         />
        
      </AppContainer>
    )
  }  
}

export default App;
