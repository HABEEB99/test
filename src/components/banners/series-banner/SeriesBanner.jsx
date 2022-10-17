import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import MovieCard from "../../movieCard/MovieCard";
import "./series.scss";

const SeriesBanner = () => {
  const { movies: seriesMovies } = useFetch(
    "https://api.themoviedb.org/3/discover/tv?api_key=27220751c373462adb876f966206d29e"
  );

  console.log("series", seriesMovies);
  return (
    <section>
      <h2>Sereies</h2>
      <div className="banner">
        {seriesMovies &&
          seriesMovies
            .slice(0, 5)
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
};

export default SeriesBanner;
