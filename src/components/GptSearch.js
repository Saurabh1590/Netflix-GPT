import { BG_IMAGE } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
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
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
