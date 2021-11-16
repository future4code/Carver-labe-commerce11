import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  input{
      width: 200px;
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