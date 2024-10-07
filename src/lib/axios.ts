import axios from "axios";

const movieApiUrl = process.env.MOVIE_API_URL;
const movieApiToken = process.env.MOVIE_API_TOKEN;

export const movieAxios = axios.create({
  baseURL: movieApiUrl,
  headers: {
    Authorization: `Bearer ${movieApiToken}`,
  },
});
