import React from "react";

type Props = {
  size: string;
};

const Logo = ({ size }: Props) => {
  return (
    <div>
      <h1 className={`${size} font-bold tracking-tight -mt-[45px]`}>
        FilmFolio
      </h1>
    </div>
  );
};

export default Logo;
