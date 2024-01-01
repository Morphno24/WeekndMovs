import { useQuery } from "@tanstack/react-query";
import { getGenres, getMovie, getMovies } from "../services/GetMovies";
import { useSelector } from "react-redux";
import { getSearchedMovie } from "../redux/moviesSlice";

export function useMoviesQuery() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
    config: {
      useErrorBoundary: true,
    },
  });
}
export function useGenresQuery() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
    config: {
      useErrorBoundary: true,
    },
  });
}
export function useSearchedMovie() {
  const searchedMovie = useSelector(getSearchedMovie);
  return useQuery({
    queryKey: ["movie", searchedMovie],
    queryFn: getMovie,
    enabled: !!searchedMovie,
    config: {
      onError: (error) => {
        console.error(error.message);
      },
    },
  });
}
