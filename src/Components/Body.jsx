import { useState, useEffect } from "react";
import Card,{HighRated} from "./Card";
// import MovieData from "./MovieData";

const Body = () => {
  const [movie, setMovie] = useState([]);
  const HighRatedMovie = HighRated(Card)

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const apiData = await fetch("https://api.tvmaze.com/search/shows?q=marvel");

    const json = await apiData.json();
    setMovie(json);
  };

  // if(movie == null ){
  //   return <h1>Loading...</h1>
  // }
  return (
    <>
      <div className="flex justify-center m-10">
        <input
          className="placeholder-cyan-900 border-2 border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-700"
          type="text"
          placeholder="Search Shows"
        />
        <button className="bg-cyan-900 text-white px-4 py-2 rounded-r-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500">
          Search
        </button>
      </div>
     
      {movie.map((movie) => {
        {
          return movie.score * 100 > 60 ? ( <HighRatedMovie data={movie} />) : ( <Card data={movie} />)
        }
})}
    </>
  );
};

export default Body;
