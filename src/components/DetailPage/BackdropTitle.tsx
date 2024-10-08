import React from "react";

type Props = {
  name: string;
  genres: IMovieGenre[];
};

export const BackdropTitle = (props: Props) => {
  const { name, genres } = props;
  return (
    <section className="w-full flex-center-col  bg-gradient-to-b from-transparent dark:to-[#121212] to-white -mt-28">
      <div className="max-w-[1280px] px-11 py-7 w-full">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="dark:text-gray-400 text-gray-700">
          {" "}
          {genres.map((genre: IMovieGenre) => (
            <span key={genre.id}> {genre.name}, </span>
          ))}{" "}
        </p>
      </div>
    </section>
  );
};
