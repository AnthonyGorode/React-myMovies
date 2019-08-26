import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://allomovie-adb07.firebaseio.com/'
});

export default apiFirebase;