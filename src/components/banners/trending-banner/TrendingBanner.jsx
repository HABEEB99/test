import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import MovieCard from "../../movieCard/MovieCard";
import "./trending.scss";

const TrendingBanner = () => {
  const { movies: trendingMovies } = useFetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=27220751c373462adb876f966206d29e"
  );

  console.log("trending", trendingMovies);
  return (
    <section>
      <h2>Trending</h2>
      <div className="banner">
        {trendingMovies &&
          trendingMovies
            .slice(0, 5)
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
};

export default TrendingBanner;
