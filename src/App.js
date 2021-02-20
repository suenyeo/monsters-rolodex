import React, { Component } from 'react';
import './App.css';
import { CaredList } from './components/card-list/card-list.component.jsx';

class App extends Component {
  constructor(){
    super();    

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({monsters:users}));
  }

  render() {
    return (
      <div className="App">
        <input 
          type='search' 
          placeholder='search monsters' 
          onChange={e => this.setState({ searchField : e.target.value})}
        />
        <CaredList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
