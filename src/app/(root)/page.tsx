import TrendingSwiper from "@/components/ListSwipers/TrendingSwiper";
import MovieCard from "@/components/MovieCard";

export default async function Home() {
  return (
    <main className="w-full max-w-[1280px] px-11 py-7">
      <TrendingSwiper />
    </main>
  );
}
