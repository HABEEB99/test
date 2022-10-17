import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import MovieCard from "../../movieCard/MovieCard";
import "./movies.scss";

const MoviesBanner = () => {
  const { movies } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=27220751c373462adb876f966206d29e"
  );

  console.log("movies", movies);
  return (
    <section>
      <h2>Movies</h2>
      <div className="banner">
        {movies &&
          movies
            .slice(0, 5)
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
};

export default MoviesBanner;
