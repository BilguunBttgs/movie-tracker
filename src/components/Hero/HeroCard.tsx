import Image from "next/image";

const HeroCard = ({ movie }: { movie: IMovie }) => {
  return (
    <div className="w-full h-[600px]">
      <Image
        className=""
        width={1980}
        height={500}
        alt={movie.name || movie.title}
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      />
      <h2>{movie.name || movie.title}</h2>
    </div>
  );
};

export default HeroCard;
