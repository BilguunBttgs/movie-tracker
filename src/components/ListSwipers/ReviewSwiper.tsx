import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { ReviewDialog } from "../DetailPage";

const ReviewSwiper = async ({ reviews }: { reviews: IMovieReview[] }) => {
  return (
    <section>
      <Carousel>
        <CarouselContent>
          {reviews?.map((review: IMovieReview) => {
            return (
              <CarouselItem
                key={review.id}
                className="basis-full sm:basis-1/2 md:basis-1/3 "
              >
                <Dialog>
                  <DialogTrigger>
                    <div className="w-[350px] h-[100px] border-zinc-500 border-[1px] p-3 rounded-lg">
                      <figure className="flex gap-3">
                        <Image
                          className="w-14 h-14 rounded-md"
                          alt={review.author}
                          src={
                            review.author_details.avatar_path
                              ? `https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`
                              : "https://www.hasbro.com/common/productimages/en_US/D245BA5C34994B1983680EC71B6A4569/6305fc5597efa0cf46958790f2b789aec8e5ee68.jpg"
                          }
                          width={300}
                          height={300}
                        />
                        <div>
                          <div className="flex justify-between">
                            <h6 className="font-bold text-xl">
                              {review.author}
                            </h6>
                            <span className="flex items-center gap-3">
                              {review.author_details.rating}
                              <FaStar color="yellow" />
                            </span>
                          </div>
                          <p
                            className="line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: review.content }}
                          ></p>
                        </div>
                      </figure>
                    </div>
                  </DialogTrigger>
                  <ReviewDialog review={review} />
                </Dialog>
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

export default ReviewSwiper;
