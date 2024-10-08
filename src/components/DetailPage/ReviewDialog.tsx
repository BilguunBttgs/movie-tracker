import { FaStar } from "react-icons/fa";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

type Props = {
  review: IMovieReview;
};

export const ReviewDialog = (props: Props) => {
  const { review } = props;
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{review.author}</DialogTitle>
        <DialogDescription
          dangerouslySetInnerHTML={{ __html: review.content }}
        ></DialogDescription>
      </DialogHeader>
      <DialogFooter className="flex gap-2 items-center">
        {review.author_details.rating}
        <FaStar color="yellow" />
      </DialogFooter>
    </DialogContent>
  );
};
