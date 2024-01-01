const MOVIES_KEY = "5ce23ae965e925043bba75f691ac8850";
const MOVIE_KEY = "b8181d25";
const Movies_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIES_KEY}`;
const Genres_URl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIES_KEY}
`;
export async function getMovies() {
  try {
    const res = await fetch(Movies_URL);

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }
    return res.json();
  } catch (error) {
    console.error("Error in getMovies:", error.message);
  }
}

export async function getGenres() {
  try {
    const res = await fetch(Genres_URl);
    if (!res.ok) {
      throw new Error("Failed to fetch genres");
    }
    return res.json();
  } catch (error) {
    console.error("Error in getGenres:", error.message);
  }
}

export async function getMovie({ queryKey }) {
  try {
    const [movie, searchedMovie] = queryKey;

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${MOVIE_KEY}&t=${searchedMovie}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch movie");
    }
    return res.json();
  } catch (error) {
    console.error("Error in getMovie:", error.message);
  }
}
