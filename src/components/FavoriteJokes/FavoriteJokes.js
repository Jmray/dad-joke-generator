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
        console.log(props)
        const favoriteJoke = props.favJokes;
        this.setState({favoriteJokes: favoriteJoke,})
        

        }
        
    
    render(){
        const favoriteJokes = this.state.favoriteJokes
        .map(joke => (
            <div key={joke.id}>
            <h3>{joke.joke}</h3>
            </div>
        ))
        
       
        

        return(
            <div>
                
                {favoriteJokes}
                
            </div>
        )
    }

}
export default FavoriteJokes;