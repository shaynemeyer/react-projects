"use server";

import { ANIME_API_PATH } from "@/lib/constants";

export async function fetchAnime(
  page: number = 1,
  limit: number = 8,
  orderBy: string = "popularity"
) {
  const response = await fetch(
    `${ANIME_API_PATH}/api/animes?page=${page}&limit=${limit}&order=${orderBy}`
  );
  const data = await response.json();

  console.log(data);
  return data;
}
