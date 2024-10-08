import { Button } from "./ui/button";
import { Album, Check } from "lucide-react";

type Props = {};

const AddButtons = (props: Props) => {
  return (
    <div className="flex gap-7">
      <Button>
        <Album className="mr-2" /> Add watchlist
      </Button>
      <Button variant="outline">
        <Check className="mr-2" />
        Add watchedlist
      </Button>
    </div>
  );
};

export default AddButtons;
