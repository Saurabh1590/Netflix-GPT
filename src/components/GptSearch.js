import React, { useState } from "react";
import { BG_IMAGE } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="fixed -z-10">
        <img
          className="object-cover h-screen w-screen"
          src={BG_IMAGE}
          alt="BG_IMG"
        />
      </div>
      <div className="md:p-0 pt-[30%]">
        <GptSearchBar setLoading={setLoading} />
        <GptMovieSuggestions loading={loading} />
      </div>
    </>
  );
};

export default GptSearch;
