import React from "react";
import ReviewSwiper from "../ListSwipers/ReviewSwiper";

type Props = {
  reviews: IMovieReview[];
};

export const Reviews = (props: Props) => {
  const { reviews } = props;
  return (
    <section className="mt-10">
      <h4 className="text-xl mb-5 mt-10 font-bold">User reviews</h4>
      <ReviewSwiper reviews={reviews} />
    </section>
  );
};
