import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import HeroCard from "./HeroCard";

const Hero = ({ movies }: { movies: IMovie[] }) => {
  return (
    <Carousel>
      <CarouselContent>
        {movies?.map((movie: IMovie) => (
          <CarouselItem key={movie.id}>
            <HeroCard movie={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Hero;
