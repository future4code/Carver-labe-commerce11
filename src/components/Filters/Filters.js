import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  background-color: #32BF84;
  height: 230px;
  border-radius: 20px;
  margin-top: 26%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  input{
      background-color:#CAFFFB;
      border: none;
      border-radius: 8px;
      height: 17px;
      width: 200px;
  }
  label{
    margin-top: 8px;
  }
`
 export class Filters extends React.Component {
     render(){
   return <FiltersContainer>
       <h3>Filtros</h3>
       <label for="pesquisar">Buscar por nome:</label>
      <input
        name="pesquisar"
         placeholder="Pesquisa"
         value={this.props.query}
         onChange={this.props.updateQuery}
      />
    <label for="pesquisar">Valor minimo:</label>
      <input
         type="number"
         placeholder="Preço mínimo"
         value={this.props.minPrice}
         onChange={this.props.updateMinPrice}
      />
    <label for="pesquisar">valor maximo:</label>
      <input
         type="number"
         placeholder="Preço máximo"
         value={this.props.maxPrice}
         onChange={this.props.updateMaxPrice}
      />



   </FiltersContainer>
     }
}