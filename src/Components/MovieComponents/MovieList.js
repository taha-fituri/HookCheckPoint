import React from "react";
import MovieCrd from "./MovieCrd";

function MovieList(props) {
  return (
    <div className="moviediv">
      {" "}
      {props.moviesData
        .filter((e) =>
          e.name.toUpperCase().includes(props.filterName.toUpperCase())
        )
        .filter((e) => e.rating >= props.filterRate)
        .map((e) => (
          <MovieCrd e={e} key={e.id} />
        ))}
    </div>
  );
}

export default MovieList;
