import React from "react";
import { actors } from "../data";

function Actors() {
  const toRender = actors.map((actor)=> {
    return (
      <div>
        <h2>{actor.name}</h2>
        {actor.movies.map((movie)=>{
          return (<ul>{movie}</ul>)
        })}
      </div>
    )
  })

  return(
     <div>
       <h1>Actors Page</h1>
       {toRender}
     </div>
  )
}

export default Actors;
