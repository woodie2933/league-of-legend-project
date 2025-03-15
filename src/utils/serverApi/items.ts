import { Item } from "@/types/Item";

const API_VERSION = "15.5.1";
const ITEM_LIST_URL = `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/data/ko_KR/item.json`;

export async function fetchItemList(): Promise<Item[]> {
  try {
    const response = await fetch(ITEM_LIST_URL);
    if (!response.ok) {
      throw new Error("데이터 불러오기 오류");
    }
    const data = await response.json();
    return Object.values(data.data) as Item[];
  } catch (error) {
    console.log(error);
    return [];
  }
}
