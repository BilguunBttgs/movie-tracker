import AddButtons from "@/components/AddButtons";
import TrendingSwiper from "@/components/ListSwipers/TrendingSwiper";
import {
  getMovieCasts,
  getMovieDetail,
  getMovieReviews,
  getSimilar,
} from "@/lib/actions";
import {
  BackdropImg,
  BackdropTitle,
  Casts,
  Overview,
  Reviews,
} from "@/components/DetailPage";

const MoviePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const detail: IMovieDetail = await getMovieDetail(id);
  const casts: IMovieCast[] = await getMovieCasts(id);
  const similarMovies: IMovie[] = await getSimilar(id);
  const reviews: IMovieReview[] = await getMovieReviews(id);
  return (
    <main className="flex-center-col mb-10">
      <BackdropImg
        path={detail.backdrop_path}
        name={detail.name || detail.title}
      />
      <BackdropTitle
        genres={detail.genres}
        name={detail.name || detail.title}
      />
      <section className="w-full max-w-[1280px] px-11 mt-8">
        <AddButtons />
        <Overview overview={detail.overview} />
        <Casts casts={casts} />
        <Reviews reviews={reviews} avarage={detail.vote_average} />
        <p className="text-xl mb-5 mt-10 font-bold">Similar Movies</p>
        <TrendingSwiper movies={similarMovies} />
      </section>
    </main>
  );
};

export default MoviePage;
