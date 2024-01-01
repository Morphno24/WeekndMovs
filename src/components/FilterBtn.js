import { useDispatch } from "react-redux";
import {
  addSearchedMovie,
  addSelectedGenre,
  filterMovies,
} from "../redux/moviesSlice";

function FilterBtn({ genre, handleActive, isActive }) {
  const dispatch = useDispatch();
  function handleClick() {
    handleActive(genre);
    dispatch(filterMovies(genre));
    dispatch(addSearchedMovie(""));
  }

  return (
    <button
      onClick={handleClick}
      className={`p-2 px-4 ${
        isActive === genre
          ? "bg-[#f1d00a] text-white"
          : "bg-white text-[#4162a8]"
      }  font-semibold text-sm rounded-2xl border-4 border-[#f1d00a]`}
    >
      {genre}
    </button>
  );
}

export default FilterBtn;
