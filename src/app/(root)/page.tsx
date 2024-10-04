import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="w-full max-w-[1280px] px-11 py-7">
      <Header />
      <section className="mt-10">
        <p className="text-xl">Previously Watched</p>
      </section>
    </main>
  );
}
