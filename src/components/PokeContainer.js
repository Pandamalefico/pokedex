import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokeContainer extends Component {
  render() {
    const PokemonList = this.props.pokeList.map(item => {
      return (
        <Pokemon 
          key={item.id}
          img= {item.img}
          name= {item.name}
          id= {item.id}
          types= {item.types}
        />
      );
    })
    return (
      <div className="pokeContainer">
        {PokemonList}
      </div>
    );
  }
}

export default PokeContainer;