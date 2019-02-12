import React, { Component } from 'react';
import Header from '../Header/Header';
import JokeCard from '../JokeCard/JokeCard';
import FavButton from '../Buttons/FavButton';

export default function(props){
    return(
        <div>
            <Header 
                header={'Dad joke Gen'}
            />
            <JokeCard 
                joke={props.joke} 
                button={props.button}
            />
             <button onClick={() => props.generateJoke()}>generate joke</button>
        </div>
    )
}