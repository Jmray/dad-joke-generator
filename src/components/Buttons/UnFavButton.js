import React from 'react';

export default function UnFaveButton(props){
    return(
        <button onClick={() => props.unFavJoke(props.joke.id)}>Unfavorite</button>
    )
}