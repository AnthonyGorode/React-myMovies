import React from 'react';
import Loading from '../../components/utils/Loading';
import { FavorisList } from './components';

export default (props) => {
    return (
        <>
        {
            props.loaded ? (
                <div className="d-flex flex-row flex-fill pt-4 p-2" >
                    <FavorisList
                        favoris={props.favoris}
                        deleteFavori={props.deleteFavori}
                    />
                </div>
            ) : (
                    <Loading />
                )
        }
        </>
    );
}