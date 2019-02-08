import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import FavoriteJokes from './components/FavoriteJokes/FavoriteJokes';
import axios from 'axios';




class App extends Component {

  constructor(){
    super();

    this.state = {
      joke: {},
      favoriteJokeID: [],


    }
    
    axios.get('https://icanhazdadjoke.com/', { headers: { 'Accept' : 'application/json' } })
    .then(res => this.setState({joke: res.data}))
    
  }
  
  render() {

    return (
      <div className="App">
      <Header/>
        <h3>{this.state.joke.joke}</h3>
        {this.state.favoriteJokeID}
        <button onClick={() => this.handlefavorite()}>favorite</button>
        <button onClick={() => this.generateJoke()}>generate joke</button>
        <FavoriteJokes favoriteJokesID={this.state.favoriteJokeID}/>
        
      </div>
    );
  }
  generateJoke() {
    axios.get('https://icanhazdadjoke.com/', { headers: { 'Accept' : 'application/json' } })
    .then(res => this.setState({joke: res.data}))
  }
  handlefavorite(){
    const {favoriteJokeID} = this.state;
    favoriteJokeID.push(this.state.joke.id);
    this.setState({favoriteJokeID,});
    console.log(this.state.favoriteJokeID)
  }
}

export default App;
