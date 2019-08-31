import React from 'react';
import Loading from '../../components/utils/Loading';
import { FavorisList } from './components';
import { connect } from 'react-redux';
import { favorisListSelector } from '../../store/selectors';
import { tryRemoveFavori } from '../../store/actions';

const Favoris = (props) => {
    return (
        <>
        {
            props.isLoading ? (
                <Loading />
            ) : (
                <div className="d-flex flex-row flex-fill pt-4 p-2" >
                    <FavorisList
                        favoris={props.favoris}
                        deleteFavori={props.tryRemoveFavori}
                    />
                </div>
                )
        }
        </>
    );
}

export default connect(state => ({
    favoris: favorisListSelector(state),
    isLoading: favorisIsLoadingSelector(state)
}), {
    tryRemoveFavori
})(Favoris)