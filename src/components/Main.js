import MovieCard from "./MovieCard";

import {
  addGenres,
  addMovies,
  getFilteredMovies,
  getSelectedGenre,
} from "../redux/moviesSlice";
import { useSelector } from "react-redux";

import SearchedMovieCard from "./SearchedMovieCard";
import {
  useGenresQuery,
  useMoviesQuery,
  useSearchedMovie,
} from "../hooks/useQuery";
import useDispatchDataToStore from "../hooks/useDispatch";
import { ErrorBoundary } from "react-error-boundary";
import QueryError from "./ui/QueryError";
import Loader from "./ui/Loader";
function Main() {
  const filteredMovies = useSelector(getFilteredMovies);
  const selectedGenre = useSelector(getSelectedGenre);

  const { data: movies, isLoading: isMoviesLoading } = useMoviesQuery();
  const { data: genres, isLoading: isGenresLoading } = useGenresQuery();

  const {
    data: selectedMovie,
    isLoading: isMovieLoading,
    fetchStatus,
    isError: isMovieError,
  } = useSearchedMovie();

  useDispatchDataToStore(movies, addMovies);
  useDispatchDataToStore(genres, addGenres);

  if (isMoviesLoading || isGenresLoading || isMovieLoading) return <Loader />;
  if (isMovieError)
    return <div className="text-center text-white">try another movie</div>;
  if (selectedMovie) {
    return <SearchedMovieCard movie={selectedMovie} />;
  }

  if (selectedGenre === "All")
    return (
      <div className="max-w-[60%] m-auto my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 duration-500">
        <ErrorBoundary FallbackComponent={QueryError} />
        {movies.results.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    );
  if (!filteredMovies)
    return <div>there are no {selectedGenre} movies right now</div>;
  return (
    <div className="max-w-[60%] m-auto my-10 grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 duration-500">
      {filteredMovies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Main;
