"use client";

import ChampionCard from "@/components/list/ChampionCard";
import { Champion } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi/champions";
import { useEffect, useState } from "react";

export default function RotationPage() {
  const [rotation, setRotation] = useState<ChampionRotation | null>(null);
  const [champions, setChampions] = useState<Champion[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        // 챔피언 로테이션 리스트 불러오기
        const rotationData = await getChampionRotation();

        if (!rotationData) {
          throw new Error("로테이션 챔피언 불러오기 오류");
        }
        setRotation(rotationData);

        // 챔피언 리스트 불러오기
        const championData = await fetchChampionList();
        setChampions(championData);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "데이터 불러오기 오류"
        );
      }
    }
    loadData();
  }, []);

  if (!rotation) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error}</p>;

  const freeChampions = champions.filter((champion) =>
    rotation.freeChampionIds.includes(Number(champion.key))
  );

  return (
    <div className="w-screen min-h-screen p-28 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mt-4 mb-16 text-center">
        Rotation
      </h1>
      <hr className="w-11/12 h-auto border border-gray-400 mb-11" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {freeChampions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
}
