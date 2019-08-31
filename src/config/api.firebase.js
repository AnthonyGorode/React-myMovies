import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://allomovie-adb07.firebaseio.com/'
});

export const apiFirebase;

export default {
    fetchFavoris: () => apiFirebase.get('favoris.json').then(
        response => response.data ? response.data : []
    ),
    saveFavoris: favoris => () => apiFirebase.put('favoris.json', favoris)
}