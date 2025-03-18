import { ChampionDetail, ChampionDetailProps, Spell } from "@/types/Champion";
import { fetchChampionDetail } from "@/utils/serverApi/champions";
import Image from "next/image";

export default async function ChampionDetailPage({
  params,
}: ChampionDetailProps) {
  const champion: ChampionDetail = await fetchChampionDetail(params.id);
  const championDetailImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_1.jpg`;
  const championPassiveImage = `https://ddragon.leagueoflegends.com/cdn/15.5.1/img/passive/${champion.passive.image.full}`;

  return (
    // 전체 wrapper
    <div className="relative w-screen h-screen flex flex-col justify-center items-center pt-7">
      {/* 챔피언 이미지 */}
      <div
        className="absolute border-none rounded-3xl w-9/12 h-4/6"
        style={{
          backgroundImage: `url(${championDetailImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* 챔피언 정보 wrapper */}
        <div className="relative w-full h-full text-white flex flex-col justify-end gap-3 p-12">
          {/* 그라데이션 필터 */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to top, #0e0e0e, transparent, transparent",
            }}
          ></div>
          {/* 챔피언 소개 */}
          <div className="flex justify-between gap-14">
            <div className="z-10 w-3/6 space-y-3">
              <h1 className="text-3xl font-extrabold">{champion.name}</h1>
              <h2 className="text-xl font-bold">{champion.title}</h2>
              <h3 className="text-md font-medium leading-snug text-justify pb-3">
                {champion.lore}
              </h3>
              {/* 챔피언 태그 */}
              <div className="flex flex-row gap-3">
                {champion.tags.map((tag) => (
                  <div
                    key={tag}
                    className="border-none flex flex-col justify-center items-center text-center rounded-full bg-red-500 px-4 pt-1 pb-2 mb-3"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                {/* 스펠 이미지 영역 */}
                <div className="flex flex-row gap-3 justify-start">
                  {champion.spells.map((spell: Spell) => (
                    <div key={spell.id}>
                      <Image
                        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/spell/${spell.image.full}`}
                        alt={spell.name}
                        width={60}
                        height={60}
                        className="rounded-xl border-2"
                      />
                    </div>
                  ))}
                </div>
                {/* 스펠 이름 영역 */}
                <div className="flex flex-row gap-2 justify-start">
                  {champion.spells.map((spell: Spell) => (
                    <h4
                      key={spell.id}
                      className="font-medium border border-white border-opacity-40 rounded-full text-xs px-3 py-1 text-center"
                    >
                      {spell.name}
                    </h4>
                  ))}
                </div>
              </div>
            </div>
            {/* 패시브 */}
            <div className="z-10 w-3/6 space-y-3 flex justify-between items-end gap-10">
              <div className="border border-s border-white border-opacity-30 rounded-lg flex flex-col items-center p-3">
                <Image
                  src={championPassiveImage}
                  alt={champion.passive.name}
                  width={170}
                  height={170}
                  className="border-2 rounded-2xl mb-3"
                />
                <h3 className="font-semibold text-md">
                  {champion.passive.name}
                </h3>
              </div>
              {/* 팁 */}
              <div className="flex flex-col gap-3">
                {champion.allytips.map((allytip) => (
                  <div
                    key={allytip}
                    className="items-center font-normal text-xs text-justify"
                  >
                    {allytip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
