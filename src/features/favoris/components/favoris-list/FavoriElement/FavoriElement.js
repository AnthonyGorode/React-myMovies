import React, { Component } from 'react';
import Style from './FavoriElement.module.scss';

export default class FavoriElement extends Component {
    render() {
        return (
            <div className={ "d-flex flex-row bg-light " + Style.container }>
                <img width="150" height="200" alt="film" src={this.props.favori.img} />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{this.props.favori.title}</h5>
                    <hr className="w-100" />
                    <p className="text-secondary flex-fill" >{this.props.favori.details}</p>
                    <div className="d-flex flex-row justify-content-end">
                        <button onClick={() => { this.props.deleteFavori(this.props.favori.title) }} className="btn btn-small btn-danger">Remove</button>
                    </div>
                </div>
            </div>
        );
    }

}