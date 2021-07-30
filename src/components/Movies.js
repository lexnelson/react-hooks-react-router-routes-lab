import React from "react";
import { movies } from "../data";

function Movies() {
const m = movies.map((movie)=>{
  return(
    <div>
      <h2>{movie.title}</h2>
      <p>Running Time :{movie.time}</p>
      <ul>
      {movie.genres.map((genre)=>{
        return(<li>{genre}</li>)
      })}</ul>
    </div>
  )
})

  return (
    <div>
      <h1> Movies Page</h1>
      {m}
    </div>
  )
}

export default Movies;
