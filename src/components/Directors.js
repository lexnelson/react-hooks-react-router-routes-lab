import React from "react";
import { directors } from "../data";

function Directors() {
  const dir = directors.map((director)=>{
    return (
      <div>
        <h2>{director.name}</h2>
        {director.movies.map((movie)=>{
          return (<ul>{movie}</ul>)
        })}
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {dir}
    </div>
  )}

export default Directors;
