"use server";

import { movieAxios } from "./axios";

export async function getTrendings() {
  const res = await movieAxios.get("/3/trending/all/day?language=en-US");
  return res.data.results;
}
