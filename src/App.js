import React from 'react';
import { Products } from './components/Products/Products';
import styled from 'styled-components';
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"
import { Filters } from './components/Filters/Filters';


const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
  background-color: #CAFFFB;
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
    carrinho: [],
    query: "",
    minPrice: "",
    maxPrice: "",
    sortingParameter: "title",
    order: 1

  }
  // somarValorTotal=(total, item)=>{
  //     let totalAPagar= total + (item.produto.price * item.quantidade);
  //    this.setState({carrinho:[...this.state.carrinho,{valorTotal:totalAPagar}]})
  // }
  adicionarProduto = (event) => {
    event.preventDefault()
    let produtoSelecionado = products.filter((products) => {
      return products.id == event.target.value
    })
    let controle = 0
    let carrinho1 = this.state.carrinho.map((itemCarrinho) => {
      if (itemCarrinho.produto.id == event.target.value) {
        itemCarrinho.quantidade++
        itemCarrinho.valorTotal += itemCarrinho.produto.price
        controle++
      }
      return itemCarrinho
    })

    if (controle == 0) {
      this.setState({
        carrinho: [...this.state.carrinho, {
          quantidade: 1,
          produto: produtoSelecionado[0],
          valorTotal: !this.state.carrinho.valorTotal ? produtoSelecionado[0].price : this.state.carrinho.valorTotal + produtoSelecionado[0].price
        },
        ]
      })
    } else {

      this.setState({
        carrinho: carrinho1
      })
    }
  }

  removerCarrinho = (produtoId) => {
    let remove = this.state.carrinho.filter((produto) => {
      return produtoId === produto.produto.id
    })

    if (remove[0].quantidade > 1) {
      let mapeandoProdutos = this.state.carrinho.map((produtos) => {
        if (produtos.produto.id === produtoId) {
          produtos.quantidade--
          produtos.valorTotal= produtos.valorTotal- produtos.produto.price
        }
        return produtos
      })

      console.log(mapeandoProdutos)
      this.setState({ carrinho: mapeandoProdutos })

    } else{
      remove=this.state.carrinho.filter((produto) => {
        return produtoId !== produto.produto.id

      })
      this.setState({ carrinho: remove})
    }}

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.carrinho))
  }

  componentDidMount() {
    const tarefasString = localStorage.getItem("tarefas")
    const tarefasParse = JSON.parse(tarefasString)

    this.setState({ carrinho: tarefasParse || [] })
  };
  updateQuery = (ev) => {
    this.setState({
      query: ev.target.value
    })
  }

  updateMinPrice = (ev) => {
    this.setState({
      minPrice: ev.target.value
    })
  }

  updateMaxPrice = (ev) => {
    this.setState({
      maxPrice: ev.target.value
    })
  }

  updateSortingParameter = (ev) => {
    this.setState({
      sortingParameter: ev.target.value
    })
  }

  updateOrder = (ev) => {
    this.setState({
      order: ev.target.value
    })
  }

  render() {
    let soma = 0
    let valorTotal = this.state.carrinho.map((valor) => {
      soma = valor.valorTotal + soma
      return soma
    })

    let carrinho = this.state.carrinho
    return (
      <AppContainer>
        <Filters
          query={this.state.query}
          updateQuery={this.updateQuery}
          updateMinPrice={this.updateMinPrice}
          updateMaxPrice={this.updateMaxPrice}
          minPrice={this.state.minPrice}
          maxPrice={this.state.maxPrice}
        />

        <Products
          products={products}
          adicionarProduto={this.adicionarProduto}
          query={this.state.query}
          updateQuery={this.updateQuery}
          updateMinPrice={this.updateMinPrice}
          updateMaxPrice={this.updateMaxPrice}
          updateSortingParameter={this.updateSortingParameter}
          updateOrder={this.updateOrder}
          minPrice={this.state.minPrice}
          maxPrice={this.state.maxPrice}
          sortingParameter={this.state.sortingParameter}
          order={this.state.order}
        />

        <ShoppingCart
          carrinho={carrinho}
          deletarProdutos={this.removerCarrinho}
          valorTotal={soma}
        />

      </AppContainer>
    )
  }
}

export default App;
