import { IDragonBallResponse } from "./types";
const URL = "https://dragonball-api.com/api/characters?limit=58";

export async function fetchData(): Promise<IDragonBallResponse> {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: IDragonBallResponse = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
