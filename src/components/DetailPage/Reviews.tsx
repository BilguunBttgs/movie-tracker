import ReviewSwiper from "../ListSwipers/ReviewSwiper";
import { FaStar } from "react-icons/fa";

type Props = {
  reviews: IMovieReview[];
  avarage: number;
};

export const Reviews = (props: Props) => {
  const { reviews, avarage } = props;
  return (
    <section className="mt-10">
      <div className="mb-5 mt-10">
        <h4 className="text-xl font-bold">User reviews</h4>
        <p className="flex items-center gap-1">
          Avarage: {avarage} <FaStar color="orange" />
        </p>
      </div>
      {reviews.length === 0 ? (
        "No user reviews..."
      ) : (
        <ReviewSwiper reviews={reviews} />
      )}
    </section>
  );
};
