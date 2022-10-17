import React from "react";
import MoviesBanner from "../../components/banners/movies-banner/MoviesBanner";
import SeriesBanner from "../../components/banners/series-banner/SeriesBanner";
import TrendingBanner from "../../components/banners/trending-banner/TrendingBanner";

const HomePage = () => {
  return (
    <div>
      <TrendingBanner />
      <SeriesBanner />
      <MoviesBanner />
    </div>
  );
};

export default HomePage;
