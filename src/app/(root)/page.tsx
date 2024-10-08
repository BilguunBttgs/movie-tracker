import Hero from "@/components/Hero/Hero";
import TrendingSwiper from "@/components/ListSwipers/TrendingSwiper";
import {
  getRecentMovies,
  getTopRatedMovies,
  getTrendings,
} from "@/lib/actions";

export default async function Home() {
  const movies: IMovie[] = await getTrendings();
  const recentMovies: IMovie[] = await getRecentMovies();
  const topRatets: IMovie[] = await getTopRatedMovies();
  return (
    <>
      <Hero movies={recentMovies} />
      <main className="w-full max-w-[1280px] px-11 py-7 space-y-5">
        <div>
          <p className="text-xl my-5 font-bold">Trending Movies</p>
          <TrendingSwiper movies={movies} />
        </div>
        <div>
          <p className="text-xl my-5 font-bold">Top Rated Movies</p>
          <TrendingSwiper movies={topRatets} />
        </div>
      </main>
    </>
  );
}
