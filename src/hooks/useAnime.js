import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addAnime } from "../utils/moviesSlice";
import { useEffect } from "react";

const useAnime = () => {
  const dispatch = useDispatch();

  const getAnime = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/tv?page=1&with_genres=16&with_origin_country=JP",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAnime(json.results));
  };

  useEffect(() => {
    getAnime();
  }, []);
};

export default useAnime;
