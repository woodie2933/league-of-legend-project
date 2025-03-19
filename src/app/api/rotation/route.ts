import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export const CHAMPION_ROTATION_API_URL =
  "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";

// rotation API 는 서버에서 데이터 직접 요청
export async function GET() {
  try {
    const rotationApi = process.env.RIOT_API_KEY;

    if (!rotationApi) {
      console.log("API 호출 오류");
      return NextResponse.json({ error: "API 호출 오류" });
    }
    // X-Riot-Token 추가
    const headers: HeadersInit = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
      "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      Origin: "https://developer.riotgames.com",
      "X-Riot-Token": rotationApi,
    };

    const response = await fetch(CHAMPION_ROTATION_API_URL, { headers });

    if (!response.ok) {
      console.log("API 요청 실패");
      return NextResponse.json({ error: "API 요청 실패" });
    }

    const data: ChampionRotation = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log("서버 오류", error);
    return NextResponse.json({ error: "서버 오류" });
  }
}
