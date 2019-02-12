import React, { Component } from 'react';
import App from '../../App';
import axios from 'axios';
import UnFavButton from '../Buttons/UnFavButton';
import JokeCard from '../JokeCard/JokeCard';
import Header from '../Header/Header';

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
                    <JokeCard className='jokeCard' joke={joke} button={<UnFavButton joke={joke} favJokes={this.state.favoriteJokes} unFavJoke={this.props.unFavJoke} />}/>

                    
                </div>
            )
        })
    }
    
    render(){
        
        const mappedFavorites = this.favoriteJokes()
        return(
            <div>
                
                <Header header={'Favorite Jokes'}/>
                
                {mappedFavorites}
                
                
            </div>
        )
    }

}
export default FavoriteJokes;