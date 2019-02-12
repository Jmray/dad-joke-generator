import React, { Component } from 'react';
import Header from '../Header/Header';
import JokeCard from '../JokeCard/JokeCard';
import FavButton from '../Buttons/FavButton';
import '../../App.css';


export default function(props){
    return(
        <div className='jokeGenContainer'>
            <Header 
                header={'Dad Joke Generator'}
            />
            <JokeCard  className="jokeCard"
                joke={props.joke} 
                button={props.button}
            />
             <button onClick={() => props.generateJoke()}>generate joke</button>
        </div>
    )
}