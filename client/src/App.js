import React from 'react';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super()
    this.state={
      countries: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/countries')
    .then(response => response.json())
    .then(countries => {
      this.setState({
        countries: countries
      })
    });
  }
  render(){
    const countryList = this.state.countries.map((country, index)=>{
      return <li key = {index}>{country.name}</li>
    })
    return (
      <div className="App">
        <h1>Country list</h1>
        <ul>{countryList}</ul>
      </div>
    );
  }
}

export default App;
