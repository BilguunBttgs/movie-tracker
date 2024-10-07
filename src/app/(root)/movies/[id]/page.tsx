import TrendingSwiper from "@/components/ListSwipers/TrendingSwiper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getMovieCasts, getMovieDetail, getSimilar } from "@/lib/actions";
import { Album, Check } from "lucide-react";
import Image from "next/image";

const MoviePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const detail: IMovieDetail = await getMovieDetail(id);
  const casts: IMovieCast[] = await getMovieCasts(id);
  const similarMovies: IMovie[] = await getSimilar(id);
  return (
    <main className="flex-center-col mb-10">
      <div className="w-full">
        <Image
          height={1080}
          width={1920}
          src={"https://image.tmdb.org/t/p/original" + detail.backdrop_path}
          alt={detail.name || detail.title}
        />
      </div>
      <section className="w-full flex-center-col  bg-gradient-to-b from-transparent dark:to-[#121212] to-white -mt-28">
        <div className="max-w-[1280px] px-11 py-7 w-full">
          <h1 className="text-3xl font-bold">{detail.name || detail.title}</h1>
          <p className="dark:text-gray-400 text-gray-700">
            {" "}
            {detail.genres.map((genre: IMovieGenre) => (
              <span key={genre.id}> {genre.name}, </span>
            ))}{" "}
          </p>
        </div>
      </section>
      <section className="w-full max-w-[1280px] px-11 mt-8">
        <div className="flex gap-7">
          <Button>
            <Album className="mr-2" /> Add watchlist
          </Button>
          <Button variant="outline">
            <Check className="mr-2" />
            Add watchedlist
          </Button>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-bold">Overview</h2>
          <p className="mt-4 font-light">{detail.overview}</p>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-bold">Casts</h2>
          <div className="flex gap-4 w-full flex-wrap mt-4">
            {casts.slice(0, 6).map((cast: IMovieCast) => (
              <figure key={cast.cast_id} className="flex gap-1 items-center">
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    className="object-cover"
                    src={"https://image.tmdb.org/t/p/w500" + cast.profile_path}
                    alt={cast.name}
                  />
                  <AvatarFallback>{cast.name}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{cast.name}</h3>
                  <h4 className="text-sm font-light text-gray-500">
                    {cast.character}
                  </h4>
                </div>
              </figure>
            ))}
          </div>
          <p className="text-xl mb-5 mt-10 font-bold">Similar Movies</p>
          <TrendingSwiper movies={similarMovies} />
        </div>
      </section>
    </main>
  );
};

export default MoviePage;
