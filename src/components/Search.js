import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(e){
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div className="search">
        <input type='text' placeholder='Pokémon name or Id...' onChange={this.onChange}/>
      </div>
    );
  }
}

export default Search;
