"use server";

import { movieAxios } from "./axios";

export async function getTrendings() {
  const { data } = await movieAxios.get("/3/trending/all/day?language=en-US");
  return data.results;
}
export async function getMovieDetail(id: string) {
  const { data } = await movieAxios.get(`/3/movie/${id}?language=en-US`);
  return data;
}
export async function getMovieCasts(id: string) {
  const { data } = await movieAxios.get(
    `/3/movie/${id}/credits?language=en-US`
  );
  return data.cast;
}
