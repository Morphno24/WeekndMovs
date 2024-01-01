import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  genres: [],
  filteredMovies: [],
  selectedGenre: "",
  searchedMovie: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload.results;
    },
    addSelectedGenre(state, action) {
      state.selectedGenre = action.payload;
    },
    addSearchedMovie(state, action) {
      state.searchedMovie = action.payload;
    },
    addGenres(state, action) {
      state.genres = action.payload.genres;
      state.movies = state.movies.map((movie) => {
        const movieWithGenres = {
          ...movie,
          genres: movie.genre_ids.map((genreId) => {
            const genre = state.genres.find((g) => g.id === genreId);
            return genre ? genre.name : null;
          }),
        };
        return movieWithGenres;
      });
    },

    filterMovies(state, action) {
      state.filteredMovies = state.movies.filter((movie) =>
        movie.genres.some((genre) => genre === action.payload)
      );
    },
  },
});

export const {
  addMovies,
  addGenres,
  filterMovies,
  addSelectedGenre,
  addSearchedMovie,
} = moviesSlice.actions;

export default moviesSlice.reducer;

export const getMovies = (state) => state.movies.movies;
export const getGenres = (state) => state.movies.genres;
export const getFilteredMovies = (state) => state.movies.filteredMovies;
export const getSelectedGenre = (state) => state.movies.selectedGenre;
export const getSearchedMovie = (state) => state.movies.searchedMovie;
