import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSearchedMovie } from "../redux/moviesSlice";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (query.length === 0) return;
    dispatch(addSearchedMovie(query));
    setQuery("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="my-5 w-[100%] flex justify-center "
    >
      <input
        placeholder="enter movie name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" w-[30%] px-2 py-2 rounded-2xl border-4 border-[#f1d00a] outline-none"
      ></input>
    </form>
  );
}

export default MovieSearch;
