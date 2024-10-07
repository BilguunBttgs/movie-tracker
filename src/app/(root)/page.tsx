import Header from "@/components/Header";
import MovieCard from "@/components/MovieCard";
import { getTrendings } from "@/lib/actions";

export default async function Home() {
  const movies = await getTrendings();

  return (
    <main className="w-full max-w-[1280px] px-11 py-7">
      <Header />
      <section className="mt-10">
        <p className="text-xl">Previously Watched</p>
        <div className="flex flex-wrap gap-10 mt-10 justify-center md:justify-normal">
          {movies?.map((movie: IMovie) => {
            console.log("my Movie", movie);
            return <MovieCard movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
}
