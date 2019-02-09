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
      favJokes: [],
      alreadyAdded: false
    }
  }

  componentDidMount=()=> {
    axios.get('https://icanhazdadjoke.com/', { headers: { 'Accept' : 'application/json' } })
    .then(res => this.setState({joke: res.data}))
  }

  generateJoke() {
    axios.get('https://icanhazdadjoke.com/', { headers: { 'Accept' : 'application/json' } })
    .then(res => {
      this.setState({joke: res.data, alreadyAdded: false})
      if(this.state.favJokes.findIndex(joke => joke.id === this.state.joke.id) !== -1){
          this.setState({alreadyAdded: true})}
    })
  }

  handlefavorite = (joke) => {
    axios.post('http://localhost:5000/api/favjokes', {joke})
      .then(response => {
        
        this.setState({favJokes: response.data, alreadyAdded: true});
        
        
    });
  }
  handleUnfavorite = (jokeID) => {
    axios.delete('http://localhost:5000/api/favJokes/' + jokeID)
    .then(response => {
      this.setState({favJokes: response.data});
      if(response.data.findIndex(joke => joke.id === this.state.joke.id) === -1){
        this.setState({alreadyAdded: false})}
      });
  }
  
  render() {
    return (
      <div className="App">
      <Header/>
        <h3>{this.state.joke.joke}</h3>
        <button disabled={this.state.alreadyAdded} onClick={() => this.handlefavorite(this.state.joke)}>favorite</button>
        <button onClick={() => this.generateJoke()}>generate joke</button>
        <FavoriteJokes unFavJoke={this.handleUnfavorite} favJokes={this.state.favJokes}/>
      </div>
    );
  }
}

export default App;
