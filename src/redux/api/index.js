import Axios from "axios";

const baseURL = 'http://www.omdbapi.com/?apikey=e022a6a7';

export const apiCall = ( method, url, data, headers ) => Axios({
    method,
    url: baseURL + url,
    data,
    headers
})