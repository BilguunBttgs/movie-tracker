import Image from "next/image";
interface IProps {
  name: string;
  path: string;
}

export const BackdropImg = (props: IProps) => {
  const { name, path } = props;
  return (
    <div className="w-full">
      <Image
        height={1080}
        width={1920}
        src={"https://image.tmdb.org/t/p/original" + path}
        alt={name}
      />
    </div>
  );
};
