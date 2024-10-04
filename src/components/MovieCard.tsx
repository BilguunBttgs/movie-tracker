import Image from "next/image";
import { FaGrinStars, FaStar } from "react-icons/fa";

const MovieCard = () => {
  return (
    <div className="relative w-[250px] h-[350px]">
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
        src="https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg"
        width={350}
        height={480}
        alt="Joker"
      />
    </div>
  );
};

export default MovieCard;
