import { useState } from "react";

function SearchedMovieCard({ movie }) {
  const [overviewActive, setOverviewActive] = useState(false);

  const {
    Title: title,
    Poster: poster,
    imdbVotes,
    MetaScore: score,
    Plot: overview,
  } = movie;

  if (title === undefined)
    return <div className="text-center text-white">Try another movie</div>;

  const titleCut = title.slice(0, 21);

  return (
    <div className="flex flex-col items-center gap-4  text-white origin-[50% 50% 0px] m-auto max-w-[15%] mb-20">
      <p className="text-xl text-center text-nowrap">
        {title.length > 21 ? `${titleCut}...` : title}
      </p>
      <img
        src={poster}
        alt="..."
        className="rounded-2xl shadow-md w-[100%] h-[30vh] object-cover duration-1000 hover:scale-105"
      />
      <button
        onClick={() => setOverviewActive((prev) => !prev)}
        className="border-[#f1d00a] bg-white border-4 rounded text-black text-md p-2 w-[100%] duration-500 hover:bg-[#21325e] hover:text-white"
      >
        {overviewActive ? "Hide" : ""} OverView
      </button>
      <p>
        {score} ({imdbVotes} votes)
      </p>
      {overviewActive ? <p className="text-center text-lg">{overview}</p> : ""}
    </div>
  );
}

export default SearchedMovieCard;
