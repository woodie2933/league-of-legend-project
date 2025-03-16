import { Champion, ChampionDetail } from "@/types/Champion";

const API_VERSION = "15.5.1";
const CHAMPION_LIST_URL = `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/data/ko_KR/champion.json`;

// 챔피언 목록 가져오기
export async function fetchChampionList(): Promise<Champion[]> {
  try {
    const response = await fetch(CHAMPION_LIST_URL);
    if (!response.ok) {
      throw new Error("데이터 불러오기 오류");
    }
    const data = await response.json();

    // API 객체 => 배열
    return Object.values(data.data) as Champion[];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchChampionDetail(id: string): Promise<ChampionDetail> {
  const CHAMPION_DETAIL_URL = `https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion/${id}.json`;
  const response = await fetch(CHAMPION_DETAIL_URL);
  if (!response.ok) {
    throw new Error("데이터 불러오기 오류");
  }
  const data = await response.json();
  return Object.values(data.data)[0] as ChampionDetail;
}
