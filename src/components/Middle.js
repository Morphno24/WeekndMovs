import { BiSolidCameraMovie } from "react-icons/bi";
import Filters from "./Filters";
import MovieSearch from "./MovieSearch";
function Middle() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center mt-12 font-middle">
      <BiSolidCameraMovie className="text-8xl text-gray-100 animate-spin  " />
      <p className="text-white text-xl  ">
        A place to find Popular Movies for your Amazing Weekend.
      </p>
      <div className="bg-white w-[10%] h-[1px] rounded"></div>
      <Filters />
      <MovieSearch />
    </div>
  );
}

export default Middle;
