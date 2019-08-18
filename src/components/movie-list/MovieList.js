import React, { Component } from 'react';
import { MovieElement } from '..';

export default class MovieList extends Component {
    render(){
        return (
            <div className="w-75 d-flex flex-row flex-rap align-content-start">
                < MovieElement />
                < MovieElement />
                < MovieElement />
                < MovieElement />
                < MovieElement />
                < MovieElement /> 
            </div>
        );
    }
}