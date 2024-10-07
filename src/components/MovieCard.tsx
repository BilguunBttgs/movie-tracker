"use client";
import Image from "next/image";
import { FaGrinStars, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 },
      }}
      className="parent relative w-[250px]"
    >
      {/* <div className="absolute  bg-black text-white p-1 top-10 left-0 flex gap-2 items-center bg-opacity-60">
        <FaStar color="yellow" />
        <p>9.1</p>
      </div>
      <div className="absolute  bg-black text-white p-1 top-10 right-0 flex gap-2 items-center bg-opacity-60">
        <FaGrinStars color="yellow" />
        <p>3/5</p>
      </div> */}
      <Image
        className="rounded-xl"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        width={350}
        height={480}
        alt="Joker"
      />
      <h2>{movie.name ? movie.name : movie.title}</h2>
    </motion.div>
  );
};

export default MovieCard;
