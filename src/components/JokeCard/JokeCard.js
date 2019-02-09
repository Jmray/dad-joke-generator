import React from 'react';


export default function JokeCard(props) {
    return(
        <div>
            <h3>{props.joke.joke}{props.button}</h3>
        </div>
    )    
}