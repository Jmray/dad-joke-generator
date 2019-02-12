import React, { Component } from 'react';
import axios from 'axios';




class UnFavButton extends Component{
    constructor(){
        super();

        this.state = {
            alreadyAdded: false,
        }
    }
    componentWillReceiveProps(props){
        this.setState({alreadyAdded: props.alreadyAdded});

    }

    handleUnfavorite = (jokeID) => {
        

        axios.delete('http://localhost:5000/api/favJokes/' + jokeID)
        .then(response => {
        //   this.setState({favJokes: response.data});
          if(response.data.findIndex(joke => joke.id === this.props.joke.id) === -1){
            this.setState({alreadyAdded: false})}

            this.props.onRemoveFav(response.data, this.state.alreadyAdded)
          });

      }

    render(){
        return(
            <button onClick={() => this.handleUnfavorite(this.props.joke.id)}>Unfavorite</button>
        )

    }
}

export default UnFavButton;