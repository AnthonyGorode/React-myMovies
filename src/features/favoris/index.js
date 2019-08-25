import React from 'react';
import { FavorisList } from './components';

export default (props) => {
    return (
        <div className="d-flex flex-row flex-fill pt-4 p-2" >
            <FavorisList 
                favoris={props.favoris}
                deleteFavori={props.deleteFavori}
            />
        </div>
    );
}