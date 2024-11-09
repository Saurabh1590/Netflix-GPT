import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 md:py-6 py-4 bg-white/5 backdrop-blur-md rounded-lg shadow-lg">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold pt-2 pb-4 text-white">
        {title}
      </h1>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
