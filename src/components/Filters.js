import { useEffect, useState } from "react";
import FilterBtn from "./FilterBtn";
import { useDispatch } from "react-redux";
import { addSelectedGenre } from "../redux/moviesSlice";

function Filters() {
  const [isActive, setIsActive] = useState("All");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSelectedGenre(isActive));
  }, [dispatch, isActive]);

  return (
    <div className="grid  grid-cols-3 sm:grid-cols-4 gap-4 md:grid-cols-6">
      <FilterBtn genre={"All"} handleActive={setIsActive} isActive={isActive} />
      <FilterBtn
        genre={"Comedy"}
        handleActive={setIsActive}
        isActive={isActive}
      />
      <FilterBtn
        genre={"Action"}
        handleActive={setIsActive}
        isActive={isActive}
      />
      <FilterBtn
        genre={"Romance"}
        handleActive={setIsActive}
        isActive={isActive}
      />
      <FilterBtn
        genre={"Animation"}
        handleActive={setIsActive}
        isActive={isActive}
      />
      <FilterBtn
        genre={"Science Fiction"}
        handleActive={setIsActive}
        isActive={isActive}
      />
    </div>
  );
}

export default Filters;
