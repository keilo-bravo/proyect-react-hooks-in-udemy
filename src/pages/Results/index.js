import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@material-ui/core";
import queryString from 'query-string';
import { searchMovie } from "../../redux/actions/Search.js"; 

export const Results = ({ location }) => {
    const dispatch = useDispatch();
    // console.log(dispatch);
    
    useEffect(()=>{
        const { movieName } = queryString.parse( location.search );
        dispatch( searchMovie( { movieName } ) );
    })

    return(
        <Container>
            hola
        </Container>
    )

}
export default Results;