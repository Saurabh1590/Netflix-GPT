import { BG_IMAGE } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return <div>
    <div className="absolute -z-10">
        <img
          src={BG_IMAGE}
          alt="bg-img"
        />
      </div>
    <GptSearchBar />
    <GptMovieSuggestions />
  </div>;
};

export default GptSearch;
