import React, { Component } from 'react';
import App from '../../App';
import axios from 'axios';

class FavoriteJokes extends Component{

    constructor(){
        super();

        this.state = {
            favoriteJokes: [],
        }
    }
    componentWillReceiveProps(props){
        const favoriteJoke = props.favJokes;
        this.setState({favoriteJokes: favoriteJoke})
    }

    favoriteJokes = () => {
        return this.state.favoriteJokes.map(joke => {
            return (
                <div key={joke.id}>
                    <h3>{joke.joke}</h3>
                    <button onClick={() => this.props.unFavJoke(joke.id)}>Unfavorite</button>
                </div>
            )
        })
    }
    
    render(){
        
        const mappedFavorites = this.favoriteJokes()
        return(
            <div>
                {mappedFavorites}
                
                
            </div>
        )
    }

}
export default FavoriteJokes;