import axios from "axios";
const key = import.meta.env.VITE_RAWG_API;

const baseUrl = "https://api.rawg.io/api/";

export const getGames = async () => {
  const res = await axios.get(
    `${baseUrl}games?key=${key}&page=${Math.floor(Math.random() * 20) + 1}`
  );
  return res.data?.results;
};

export const getDetails = async (id) => {
  console.log(`${baseUrl}games/${id}?key=${key}`);
  const res = await axios.get(`${baseUrl}games/${id}?key=${key}`);

  return res?.data;
};
