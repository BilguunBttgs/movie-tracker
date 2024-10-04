import Image from "next/image";
import React from "react";

const MovieCard = () => {
  return (
    <div>
      <Image
        src="https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg"
        width={350}
        height={480}
        alt=""
      />
    </div>
  );
};

export default MovieCard;
