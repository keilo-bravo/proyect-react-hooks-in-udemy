import { SEARCH_MOVIE_START } from '../../consts/actionTypes'

export function searchMovie (payload) {
	return{
		type: SEARCH_MOVIE_START,
		payload
	}
};