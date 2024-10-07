"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <>
      <HoverCard>
        <HoverCardTrigger>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
            className="parent relative w-[250px]"
          >
            <Image
              className="rounded-xl"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              width={350}
              height={480}
              alt={movie.title || movie.name}
            />
            <h2>{movie.title || movie.name}</h2>
          </motion.div>
        </HoverCardTrigger>
        <HoverCardContent
          side="right"
          sideOffset={-100}
          className="w-80 bg-white"
        >
          <h3 className="font-semibold text-lg">
            {movie.title || movie.name}
            <span className="text-sm font-normal bg-blue-600 p-1 rounded-lg ml-4 text-white">
              {movie.media_type === "tv" ? "Tv show" : "Movie"}
            </span>
          </h3>
          <p className="my-5">{movie.overview}</p>
          <p>
            {movie.release_date ? movie.release_date : movie.first_air_date}
          </p>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};

export default MovieCard;
