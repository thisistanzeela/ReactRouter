import React from "react";

const Card = ({ data }) => {
  //destructure..
  const { name, genres, language, type, image, premiered} = data.show;

  return (
    // <>
    //   <img src={data.show.image.medium} alt={data.show.name} />
    //   <h2>{data.show.name}</h2>
    //   <p>{data.show.genres.join(", ")}</p>
    //   <p>{data.show.language}</p>
    // </>
    <>
         <div className="flex float-start flex-wrap">
      <div className="w-64 h-96 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out m-2">
        <img
          src={image.medium}
          alt={name}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {type} | {language}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {genres.map((genre, index) => (
              <span
                key={index}
                className="text-sm text-gray-700 border border-gray-300 rounded-full px-2 py-1"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
