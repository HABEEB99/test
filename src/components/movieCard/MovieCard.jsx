import React from "react";
import { img_300, unavailable } from "../../image-config/ImageConfig";
import "./moviecard.scss";

const MovieCard = ({ movie }) => {
  const { title, poster_path, name } = movie;
  return (
    <div className="wrapper">
      <h2>{title || name}</h2>
      <img
        src={poster_path ? `${img_300}${poster_path}` : unavailable}
        alt={title}
      />
    </div>
  );
};

export default MovieCard;
