import { createSelector } from 'reselect';

export const favorisSelector = state => state.favoris;

export const favorisIsLoadingSelector = createSelector(
    [favorisSelector],
    favoris => favoris.isLoading
)

export const favorisListSelector = createSelector(
    [favorisSelector],
    favoris => favoris.data
)

export const favorisListName = createSelector(
    [favorisListSelector],
    favorisData => favorisData.map( f => f.title )
)


