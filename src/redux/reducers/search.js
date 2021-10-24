import { get } from 'lodash';
import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE } from '../../consts/actionTypes'

const initialState = {};
export default function( state = initialState, action ){
    switch (action.type) {
        case SEARCH_MOVIE_START:
            return { ...state };

        case SEARCH_MOVIE_ERROR:
            console.log("error",action);
            return { ...state };

        case SEARCH_MOVIE_COMPLETE:
            console.log("complete",action);
            return { ...state };
               
        default:
            return { ...state };
     }
 }