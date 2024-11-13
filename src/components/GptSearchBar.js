import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "../utils/constants";
import { addMovieResults } from "../utils/gptSlice";

const GptSearchBar = ({ setLoading }) => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
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
    if (!GoogleGenerativeAI) return;

    setLoading(true); // Start loading

    const queryPrompt =
      "Act as a Movie Recommendation System and suggest some movies/shows for the query: " +
      searchText.current.value +
      ". Only give me the names of 5 movies/shows, comma-separated like the example result given ahead, Example Result: Gadar, Sholay, Don, DDLJ, 3 Idiots";

    const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
      const gptResults = await model.generateContent(queryPrompt);
      const getMovies = gptResults?.response?.text().split(",");

      const promiseArray = getMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addMovieResults({ movieNames: getMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("Error fetching movie recommendations:", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="flex justify-center pt-4 md:pt-[10%] px-4">
      <form
        className="w-full md:w-1/2 bg-black bg-opacity-80 grid grid-cols-12 rounded-2xl shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-9 p-3 md:p-4 m-2 md:m-4 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-700"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-2 md:m-4 py-2 px-2 md:px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm md:text-lg transition-colors duration-200"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
