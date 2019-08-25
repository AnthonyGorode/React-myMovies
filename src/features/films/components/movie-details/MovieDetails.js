import React, { Component } from 'react';

export default class MovieDetails extends Component {
    render(){
        return <div className="w-25 bg-light p-4 d-flex flex-column">
            <h5 className="text-center">{this.props.movie.title}</h5>
            <div>
                <img width="150" height="200" alt={`illustration du film : ${this.props.movie.title}`} className="d-block mx-auto" src={this.props.movie.img} />
            </div>
            <hr className="w-100" />
            <span className="text-secondary">{this.props.movie.details}</span>
            <hr className="w-100" />
            <span>{this.props.movie.description}</span>
        </div>
    }
}