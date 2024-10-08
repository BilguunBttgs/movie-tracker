import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
  casts: IMovieCast[];
};

export const Casts = (props: Props) => {
  const { casts } = props;
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold">Casts</h2>
      <div className="flex gap-4 w-full flex-wrap mt-4">
        {casts.slice(0, 6).map((cast: IMovieCast) => (
          <figure key={cast.cast_id} className="flex gap-1 items-center">
            <Avatar className="w-16 h-16">
              <AvatarImage
                className="object-cover"
                src={"https://image.tmdb.org/t/p/w500" + cast.profile_path}
                alt={cast.name}
              />
              <AvatarFallback>{cast.name}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{cast.name}</h3>
              <h4 className="text-sm font-light text-gray-500">
                {cast.character}
              </h4>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};
