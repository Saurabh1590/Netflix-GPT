import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addKdrama } from "../utils/moviesSlice";
import { useEffect } from "react";

const useKdrama = () => {
  const dispatch = useDispatch();

  const getKdrama = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/tv?page=1&with_genres=18&with_origin_country=KR",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addKdrama(json.results));
  };

  useEffect(() => {
    getKdrama();
  }, []);
};

export default useKdrama;