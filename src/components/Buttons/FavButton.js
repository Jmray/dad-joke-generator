import React, {Component} from 'react';
import axios from 'axios';

class FavButton extends Component{

    handleFavorite = (joke) => {
        axios.post('http://localhost:5000/api/favjokes', { joke }).then(res => {
            this.props.onAdd(res.data);
        });
      }

    render(){
        return(
            <button className='button' 
                disabled={this.props.alreadyAdded} 
                onClick={() => this.handleFavorite(this.props.joke)}>
                    💖
            </button>
        )
        
    }
}

export default FavButton;