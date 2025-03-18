"use client";

import { ChampionRotation } from "@/types/ChampionRotation";
import { getChampionRotation } from "@/utils/riotApi";
import { useEffect, useState } from "react";

export default function RotationPage() {
  const [rotation, setRotation] = useState<ChampionRotation | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function rotationLoading() {
      try {
        const data = await getChampionRotation();
        setRotation(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "오류");
      }
    }
    rotationLoading();
  }, []);

  if (rotation === null) return <p>로딩 중...</p>;
  if (error) return <p>오류 발생: {error}</p>;

  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <h1>Rotation</h1>
      <ul>
        {rotation?.freeChampionIds.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
}
