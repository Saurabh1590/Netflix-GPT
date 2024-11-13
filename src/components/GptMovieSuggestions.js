import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ShimmerSkeleton from "./ShimmerSkeleton";

const GptMovieSuggestions = ({ loading }) => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (loading) return <ShimmerSkeleton />; // Show shimmer skeleton when loading
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
