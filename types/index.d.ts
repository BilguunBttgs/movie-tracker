declare interface IMovie {
  backdrop_path: string;
  id: number;
  name: string;
  title: string;
  original_title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number[];
  first_air_date: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}
declare interface IMovieDetail {
  adult: boolean;
  backdrop_path: string;
  genres: IMovieGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  name: string;
}
declare interface IMovieGenre {
  id: number;
  name: string;
}

declare interface IMovieCast {
  gender: number;
  id: number;
  name: string;
  profile_path: string;
  known_for_department: string;
  cast_id: number;
  character: string;
}
