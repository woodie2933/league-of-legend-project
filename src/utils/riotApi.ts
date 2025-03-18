import { ChampionRotation } from "@/types/ChampionRotation";

export async function getChampionRotation(): Promise<ChampionRotation | null> {
  try {
    const response = await fetch("/api/rotation");

    if (!response.ok) {
      throw new Error("데이터 불러오기 오류");
    }

    const data: ChampionRotation = await response.json();
    return data;
  } catch (error) {
    console.log("데이터 불러오기 오류", error);
    return null;
  }
}
