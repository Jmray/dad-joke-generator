import React, {Component} from 'react';
import axios from 'axios';


// export default function favButton(props){




class FavButton extends Component{

    handleFavorite = (joke) => {
        axios.post('http://localhost:5000/api/favjokes', {joke})
          .then(response => {
            
            this.setState({favJokes: response.data, alreadyAdded: true});
            
            this.props.onAdd(response.data);
        });
      }

    render(){
        return(
            <button disabled={this.props.alreadyAdded} onClick={() => this.handleFavorite(this.props.joke)}>favorite</button>
        )
        
    }
}

export default FavButton;