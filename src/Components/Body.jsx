import Card from "./Card";
import MovieData from "./MovieData";

const Body = () => {
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

      {MovieData.map((movie) => (
        <Card data={movie} />
      ))}
    </>
  );
};

export default Body;
