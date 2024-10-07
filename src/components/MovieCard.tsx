import Image from "next/image";
import { FaGrinStars, FaStar } from "react-icons/fa";

const MovieCard = ({ movie }: { movie: IMovie }) => {
  const imageUrl = process.env.MOVIE_IMAGE_URL;
  return (
    <div className="relative w-[250px] h-[380px]">
      <div className="absolute  bg-black text-white p-1 top-10 left-0 flex gap-2 items-center bg-opacity-60">
        <FaStar color="yellow" />
        <p>9.1</p>
      </div>
      <div className="absolute  bg-black text-white p-1 top-10 right-0 flex gap-2 items-center bg-opacity-60">
        <FaGrinStars color="yellow" />
        <p>3/5</p>
      </div>
      <Image
        className="rounded-xl"
        src={imageUrl + "/t/p/w500" + movie.poster_path}
        width={350}
        height={480}
        alt="Joker"
      />
      <p>{movie.name ? movie.name : movie.title}</p>
    </div>
  );
};

export default MovieCard;
