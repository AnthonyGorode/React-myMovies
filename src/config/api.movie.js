import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use(req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmFlNDE2YzE1MGVlNGIyZTJjNjJhMTM4YmY5YjNlYSIsInN1YiI6IjVkNjAwMTM1ZWEzN2UwMjhhNTc1Y2JiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o3FkKSx0rtjmceujdufbdrXfFFEiP3dx__VXc35JhDs'
    return req;
})

export const apiMovieMap = m => ({
    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
    title: m.title,
    details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
    description: m.overview
})

export const apiMovie;

export default {
    searchMovies: filter => {
        const query = '?' + Object.keys(filter).map(k => `${k}=${filter[k]}&`).join('');

        return apiMovie.get('/search/movie' + query)
                       .then(response => response.data.results)
                       .then(moviesApi => moviesApi.map(apiMovieMap))
    }
}