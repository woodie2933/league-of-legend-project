import ChampionCard from "@/components/list/ChampionCard";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi/champions";

export const revalidate = 86400;

export default async function ChampionsPage() {
  // 챔피언 데이터 패치
  const champions: Champion[] = await fetchChampionList();

  return (
    <div className="w-screen min-h-screen p-28 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mt-4 mb-16 text-center">
        Champions
      </h1>
      <hr className="w-11/12 h-auto border border-gray-400 mb-11" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {champions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
    </div>
  );
}
