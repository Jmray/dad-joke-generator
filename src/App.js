import React, { Component } from 'react';
import './App.css';
import FavoriteJokes from './components/FavoriteJokes/FavoriteJokes';
import axios from 'axios';
import FavButton from './components/Buttons/FavButton';
import JokeGenerator from './components/JokeGenerator/JokeGenerator';




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
    this.generateJoke();

    axios.get('http://localhost:5000/api/favjokes').then(res => {
      this.setState({favJokes: res.data});
    });
  
  }
  //used for initial joke generation and every joke generation after that.
  generateJoke() {
    axios.get('https://icanhazdadjoke.com/', { headers: { 'Accept' : 'application/json' } })
    .then(res => {
      this.setState({joke: res.data, alreadyAdded: false})
      if(this.state.favJokes.findIndex(joke => joke.id === this.state.joke.id) !== -1){
          this.setState({alreadyAdded: true})}
    })

  }

  
 
  removeFromFavorites(favJokes, alreadyAdded){
    this.setState({favJokes, alreadyAdded});
  }
  addToFavorites(favJokes){
    this.setState({favJokes, alreadyAdded: true});
  }
  
  render() {
    return (
      <div className="App">
      <JokeGenerator
          joke={this.state.joke}
          generateJoke={() => this.generateJoke()} 
          button={<FavButton 
            onAdd={(favJokes) => this.addToFavorites(favJokes)} 
            joke={this.state.joke} 
            alreadyAdded={this.state.alreadyAdded} />}  
      />
      <FavoriteJokes className="jokeCard" 
          onRemoveFav={(favJokes, alreadyAdded) => this.removeFromFavorites(favJokes, alreadyAdded)} 
          alreadyAdded={this.state.alreadyAdded}
          favJokes={this.state.favJokes}
      />
        
      </div>
    );
  }
}

export default App;
