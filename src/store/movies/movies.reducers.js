import * as actions from './movies.actions';

export default (state = {
    data: [],
    moviesDefault: false,
    isLoading: false,
    error: null,
    selectedMovie: 0
}, action) => {
    switch(action.type){
        case actions.REQUEST_MOVIES:
            return {
                ...state,
                isLoading: true
            }
        
        case actions.FETCH_MOVIES_DEFAULT_SUCCESS:
            return {
                ...state,
                moviesDefault: true,
                isLoading: false,
                error: null,
                data: [...action.movies]
            }
        case actions.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                moviesDefault: false,
                isLoading: false,
                error: null,
                data: [...action.movies]
            }

        case actions.FETCH_MOVIES_DEFAULT_ERROR:
        case actions.FETCH_MOVIES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        
        case actions.SET_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: action.index
            }
        
        default: {
            return state;
        }
    }
}