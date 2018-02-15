import React, { Component } from 'react';
import Search from './components/Search';
import PokeContainer from './components/PokeContainer';
import pokelist from './pokelist.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: [],
      pokemon: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(val){
    this.setState({pokemon: val});    
  }

  search(){
    const newList = this.state.pokeList
      .filter(item => {
        const itemToFind = this.state.pokemon;
        return (item.name.includes(itemToFind)) || (item.id.includes(itemToFind)) || (itemToFind === '');
      });
    return newList;
  }

  componentDidMount() {
    this.setState({pokeList: pokelist})
  }
  
  render() {
    const List = this.search();
    return (
      <div className="App">
        <h1> Pokédex by Panda </h1>
        <Search onChange={this.handleChange}/>
        <PokeContainer pokeList={List}/>
        <a href=''className='addMore'>Add more</a>
      </div>
    );
  }
}

export default App;
