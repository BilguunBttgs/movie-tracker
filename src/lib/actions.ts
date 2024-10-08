"use server";

import { movieAxios } from "./axios";

export async function getRecentMovies() {
  const { data } = await movieAxios.get(
    "/3/movie/now_playing?language=en-US&page=1"
  );
  return data.results;
}

export async function getTrendings() {
  const { data } = await movieAxios.get("/3/trending/all/day?language=en-US");
  return data.results;
}
export async function getTopRatedMovies() {
  const { data } = await movieAxios.get(
    "/3/movie/top_rated?language=en-US&page=1"
  );
  return data.results;
}

export async function getSimilar(id: string) {
  const { data } = await movieAxios.get(
    `/3/movie/${id}/similar?language=en-US&page=1`
  );
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

export async function getMovieReviews(id: string) {
  const { data } = await movieAxios.get(
    `/3/movie/${id}/reviews?language=en-US&page=1`
  );
  return data.results;
}
