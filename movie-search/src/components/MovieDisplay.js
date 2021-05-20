import React from 'react';

const MovieDisplay = ({movie}) => {
    const loaded =()=>{
    return (
        <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
        </>
    )
}
//if not loaded
const loading =()=>{
    return(
        <h1>No Movie to Display</h1>
    )
}
//Ternary operator (if statement)
return movie ? loaded(): loading();
}

export default MovieDisplay;