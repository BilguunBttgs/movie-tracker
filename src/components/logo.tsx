import React from "react";

type Props = {
  size: string;
};

const Logo = ({ size }: Props) => {
  return (
    <>
      <h1 className={`${size} font-bold tracking-tight -mt-[45px]`}>The</h1>
      <h1 className={`${size} font-bold tracking-tight -mt-[45px]`}>Movie</h1>
      <h1 className={`${size} font-bold tracking-tight -mt-[45px]`}>Tracker</h1>
    </>
  );
};

export default Logo;
