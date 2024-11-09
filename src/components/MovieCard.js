import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 sm:w-48 lg:w-56 pr-4 transform transition-transform hover:scale-105 duration-300 ease-in-out">
      <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-lg">
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MovieCard;
