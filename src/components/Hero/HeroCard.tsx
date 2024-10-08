import Image from "next/image";
import { Button } from "../ui/button";
import { Album, Check } from "lucide-react";

const HeroCard = ({ movie }: { movie: IMovie }) => {
  return (
    <div className="w-full h-[600px] relative">
      <Image
        className=""
        width={1980}
        height={500}
        alt={movie.name || movie.title}
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      />
      <div className="w-full flex-center-col absolute bottom-0 bg-gradient-to-b from-transparent dark:to-[#121212] to-zinc-400">
        <div className="max-w-[1280px]  px-11">
          <h2 className="text-4xl font-black">{movie.name || movie.title}</h2>
          <p className="w-1/2 mt-5">{movie.overview}</p>
          <div className="flex gap-7 mt-5">
            <Button>
              <Album className="mr-2" /> Add watchlist
            </Button>
            <Button variant="outline">
              <Check className="mr-2" />
              Add watchedlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
