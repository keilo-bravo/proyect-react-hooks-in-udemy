import Axios from "axios";

const baseURL = 'https://www.omdbapi.com/?apiKey=ffd0c3a5';

export const apiCall = ( method, url, data, headers ) => Axios({
    method,
    url: baseURL + url,
    data,
    headers
})