import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useAnime from "../hooks/useAnime";
import useKdrama from "../hooks/useKdrama";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useAnime();
  useKdrama();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
