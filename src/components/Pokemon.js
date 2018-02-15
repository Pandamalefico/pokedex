import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const types = this.props.types.map(item => {
      return <div className={'type '+item} key={item}>{item}</div>
    })
    const urlImg = require(`../assets/img/${this.props.id}.png`);
    return (
      <div className="pokemon">
        <img src={urlImg} alt={this.props.name}/>
        <div className='info'>
          <header>
            <h5>{this.props.name}</h5>
            <p className='pokeId'>{'N°'+this.props.id}</p>
          </header>
          <div className='typeContainer'>
            {types}
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;