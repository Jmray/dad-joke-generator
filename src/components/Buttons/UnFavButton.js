import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';

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
        
        axios.delete('http://localhost:5000/api/favJokes/' + jokeID).then(res => {
            if(res.data.findIndex(joke => joke.id === this.props.joke.id) === -1){
                this.setState({alreadyAdded: false});
            };

                this.props.onRemoveFav(res.data, this.state.alreadyAdded);
          });

      }

    render(){
        return(
            <button className='button' onClick={() => this.handleUnfavorite(this.props.joke.id)}>💔</button>
        )

    }
}

export default UnFavButton;