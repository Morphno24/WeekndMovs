import { useState } from "react";

function MovieCard({ movie }) {
  const {
    title,
    backdrop_path: path,
    vote_average: average,
    vote_count: count,
    overview,
  } = movie;

  const posterPath = `https://image.tmdb.org/t/p/w500/${path}`;

  const titleCut = title.slice(0, 21);

  const [overviewActive, setOverviewActive] = useState(false);
  return (
    <div className="flex flex-col items-center gap-4 font-card text-white origin-[50% 50% 0px] ">
      <p className="text-3xl font-semibold text-center text-nowrap">
        {title.length > 21 ? `${titleCut}...` : title}
      </p>
      <img
        src={posterPath}
        alt="..."
        className="rounded-2xl shadow-md w-[100%] h-[30vh] object-cover duration-1000 hover:scale-105"
      />
      <button
        onClick={() => setOverviewActive((prev) => !prev)}
        className="border-[#f1d00a] bg-white border-4 rounded text-black text-md p-2 w-[100%] duration-500 hover:bg-[#21325e] hover:text-white font-sans"
      >
        {overviewActive ? "Hide" : ""} OverView
      </button>
      <p className="font-sans">
        {average} ({count} votes)
      </p>
      {overviewActive ? (
        <p className="text-center text-lg font-sans">{overview}</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default MovieCard;
