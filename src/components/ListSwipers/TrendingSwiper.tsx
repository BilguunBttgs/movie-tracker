import { getTrendings } from "@/lib/actions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import MovieCard from "../MovieCard";

const TrendingSwiper = async () => {
  const movies = await getTrendings();
  return (
    <section>
      <p className="text-xl my-5">Trending Movies</p>
      <Carousel>
        <CarouselContent>
          {movies?.map((movie: IMovie) => {
            return (
              <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 ">
                <MovieCard movie={movie} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </section>
  );
};

export default TrendingSwiper;
