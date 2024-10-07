"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Link from "next/link";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  return (
    <Link href={`/movies/${movie.id}`}>
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
    </Link>
  );
};

export default MovieCard;
