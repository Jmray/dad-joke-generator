import React from 'react';
import '../../App.css'


export default function JokeCard(props) {
    return(
        <div className='jokeCard'>
            <div>{props.button}</div>
            <h3>{props.joke.joke}</h3>
        </div>
    )    
}