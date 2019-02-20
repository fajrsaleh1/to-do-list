import React, { Component } from 'react';
import './App.css';

class Quotes extends Component {
    render() {
        return(
            <div className = "quotesCopm">
            <p className = "qouites"> ❝ {this.props.currentQuotes}❞</p>
            <p className = "author">{this.props.currentAuthor}</p>
            </div>
        )
    }
}

export default Quotes; 