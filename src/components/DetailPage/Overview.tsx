type Props = {
  overview: string;
};

export const Overview = (props: Props) => {
  const { overview } = props;
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold">Overview</h2>
      <p className="mt-4 font-light">{overview}</p>
    </div>
  );
};
