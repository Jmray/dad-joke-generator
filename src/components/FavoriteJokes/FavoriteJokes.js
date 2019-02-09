import React, { Component } from 'react';
import App from '../../App';
import axios from 'axios';
import UnFavButton from '../Buttons/UnFavButton';

class FavoriteJokes extends Component{

    constructor(){
        super();

        this.state = {
            favoriteJokes: [],
        }
    }
    componentWillReceiveProps(props){
        const favoriteJokes = props.favJokes;
        this.setState({favoriteJokes,})
    }

    favoriteJokes = () => {
        return this.state.favoriteJokes.map(joke => {
            return (
                <div key={joke.id}>
                    <h3>{joke.joke}<UnFavButton joke={joke} unFavJoke={this.props.unFavJoke} /></h3>
                    
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