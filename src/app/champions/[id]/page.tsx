import { ChampionDetail, ChampionDetailProps, Spell } from "@/types/Champion";
import { fetchChampionDetail } from "@/utils/serverApi/champions";
import Image from "next/image";

export default async function ChampionDetailPage({
  params,
}: ChampionDetailProps) {
  const champion: ChampionDetail = await fetchChampionDetail(params.id);
  const championDetailImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_1.jpg`;

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
        <div className="relative w-full h-full text-white flex flex-col justify-end gap-3 p-10">
          {/* 그라데이션 필터 */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              backgroundImage:
                "linear-gradient(to top, #0e0e0e, transparent, transparent",
            }}
          ></div>
          {/* 챔피언 소개 */}
          <div className="flex gap-14">
            <div className="z-10 w-2/5 space-y-3">
              <h1 className="text-4xl font-extrabold">{champion.name}</h1>
              <h2 className="text-2xl font-bold">{champion.title}</h2>
              <h3 className="text-md font-medium leading-tight text-justify pb-3">
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
            <div className="z-10 w-3/5 space-y-3">
              <div>{champion.partype}</div>
              <div className="flex gap-3">
                {champion.allytips.map((allytip) => (
                  <div
                    key={champion.id}
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

// 능력치?
// export type Spell = {
//   id: string;
//   name: string;
//   description: string; // "아트록스가 대검을 내리쳐 물리 피해를 줍니다."
//   tooltip: string; // "구체적으로 어떤 피해를 주는지 써있음"
//   leveltip: Leveltip; // 아래에 선언
//   maxrank: number; // 5
//   cooldown: number[];
//   cooldownBurn: string;
//   cost: number[];
//   costBurn: string;
//   effect: (number | null)[][];
//   effectBurn: string[];
//   costType: string;
//   maxammo: string;
//   range: number[];
//   rangeBurn: string;
//   image: SpellImage; // 아래에 선언
//   resource: string;
// };

// export type SpellImage = {
//   full: string;
//   sprite: string;
//   group: string;
//   x: number;
//   y: number;
//   w: number;
//   h: number;
// };

// export type Leveltip = {
//   label: string[]; // 재사용 대기시간...
//   effect: string[]; // 쿨다운...
// };

// export type Passive = {
//   name: string; // "사신 태세"
//   description: string; // 패시브 스킬에 대한 설명인 듯
//   image: PassiveImage; // 아래에 선언
// };

// export type PassiveImage = {
//   full: string;
//   sprite: string;
//   group: string;
//   x: number;
//   y: number;
//   w: number;
//   h: number;
// };
