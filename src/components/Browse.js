import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import SecondaryContainer from "./SecondaryContainer";
import useTopRated from "../hooks/useTopRated";
import useAnime from "../hooks/useAnime";
import useKdrama from "../hooks/useKdrama";
import GptSearch from "./GptSearch"
import { useSelector } from "react-redux";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useAnime();
  useKdrama();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
