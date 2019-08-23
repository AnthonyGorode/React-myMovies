import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use(req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmFlNDE2YzE1MGVlNGIyZTJjNjJhMTM4YmY5YjNlYSIsInN1YiI6IjVkNjAwMTM1ZWEzN2UwMjhhNTc1Y2JiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o3FkKSx0rtjmceujdufbdrXfFFEiP3dx__VXc35JhDs'
    return req;
})

export default apiMovie;