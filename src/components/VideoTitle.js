import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] md:pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="md:text-6xl text=3xl font-bold">{title}</h1>
      <div className="py-6 text-lg w-1/4 hidden md:inline-block">
        <p className="md:line-clamp-4">{overview}</p>
      </div>
      <div>
        <button className=" bg-white text-black p-2 md:px-6 px-4 md:text-xl text-sm rounded-lg hover:bg-opacity-80 mt-3 md:mt-0">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-2 px-6 text-xl bg-opacity-50 rounded-lg">
          More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
