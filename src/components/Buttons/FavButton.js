import React from 'react';

export default function UnFaveButton(props){
    return(
        <button disabled={props.alreadyAdded} onClick={() => props.favJoke(props.joke)}>favorite</button>
    )
}