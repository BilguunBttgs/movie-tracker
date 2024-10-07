import TrendingSwiper from "@/components/ListSwipers/TrendingSwiper";
import { getTrendings } from "@/lib/actions";

export default async function Home() {
  const movies = await getTrendings();
  return (
    <main className="w-full max-w-[1280px] px-11 py-7">
      <TrendingSwiper movies={movies} />
    </main>
  );
}
