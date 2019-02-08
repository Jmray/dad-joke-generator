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
        Promise.all(this.props.favoriteJokesID.map(jokeID => (
            axios.get('https://icanhazdadjoke.com/j/' + {jokeID}, { headers: { 'Accept' : 'application/json' } })
            .then(res => res.data)
        )))
        .then(favoriteJokes => (
            this.setState({
                favoriteJokes,
            })
        ))

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
                <p>{this.props.favoriteJokesID}</p>
            </div>
        )
    }

}
export default FavoriteJokes;