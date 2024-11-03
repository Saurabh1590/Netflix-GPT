import React, { useRef, useEffect, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "../utils/constants";
import { addMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/multi?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    if (!GoogleGenerativeAI) {
      console.error("GoogleGenerativeAI is not loaded yet.");
      return;
    }

    const queryPrompt =
      "Act as a Movie Recommendation System and suggest some movies/shows for the query: " +
      searchText.current.value +
      ". Only give me the names of 5 movies/shows, comma-separated like the example result given ahead, Example Result: Gadar, Sholay, Don, DDLJ, 3 Idiots";

    const API_KEY = process.env.REACT_APP_GEMINI_API_KEY; // Ensure this is defined in your .env
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
      const gptResults = await model.generateContent(queryPrompt);
      console.log(gptResults?.response?.text());
      const getMovies = gptResults?.response?.text().split(",");

      const promiseArray = getMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);

      dispatch(addMovieResults({movieNames: getMovies, movieResults: tmdbResults}));
    } catch (error) {
      console.error("Error fetching movie recommendations:", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
