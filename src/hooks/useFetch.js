import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(url);

        setMovies(data.results);
        console.log(movies);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovies();
  }, [url]);

  return { movies };
};
