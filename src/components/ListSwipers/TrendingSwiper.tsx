import { getTrendings } from "@/lib/actions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import MovieCard from "../MovieCard";

const TrendingSwiper = async ({ movies }: { movies: IMovie[] }) => {
  return (
    <section>
      <Carousel>
        <CarouselContent>
          {movies?.map((movie: IMovie) => {
            return (
              <CarouselItem
                key={movie.id}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 "
              >
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
