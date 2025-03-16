import { ChampionDetail, ChampionDetailProps, Spell } from "@/types/Champion";
import { fetchChampionDetail } from "@/utils/serverApi/champions";

export default async function ChampionDetailPage({
  params,
}: ChampionDetailProps) {
  const champion: ChampionDetail = await fetchChampionDetail(params.id);
  const championDetailImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div
        className="border w-7/12 h-3/5 flex flex-col p-10"
        style={{
          backgroundImage: `url(${championDetailImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-3xl font-bold">{champion.name}</h1>
        <h2>{champion.title}</h2>
        <h3>{champion.lore}</h3>
        <div className="border">
          {champion.tags.map((tag) => (
            <div key={champion.id} className="border">
              {tag}
            </div>
          ))}
        </div>
        <div className="border">
          {champion.spells.map((spell: Spell) => (
            <div key={spell.id} className="border">
              {spell.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//   allytips: string[]; // "공격 성공률을 높이려면 -세요"
//   enemytips: string[]; // "아트록스의 공격은 미리 표시되므로 벗어나세요"
//   tags: string[]; // "fighter", "mage"...
//   partype: string; // "피의 샘"
//   info: ChampionInfo;
//   stats: ChampionStats; // 아래에 선언
//   spells: Spell[]; // 아래에 선언
//   passive: Passive; // 아래에 선언
//   recommended: any[];

// // 기술 스탯?
// export type ChampionStats = {
//   hp: number;
//   hpperlevel: number;
//   mp: number;
//   mpperlevel: number;
//   movespeed: number;
//   armor: number;
//   armorperlevel: number;
//   spellblock: number;
//   spellblockperlevel: number;
//   attackrange: number;
//   hpregen: number;
//   hpregenperlevel: number;
//   mpregen: number;
//   mpregenperlevel: number;
//   crit: number;
//   critperlevel: number;
//   attackdamage: number;
//   attackdamageperlevel: number;
//   attackspeedperlevel: number;
//   attackspeed: number;
// };

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

// export type Leveltip = {
//   label: string[]; // 재사용 대기시간...
//   effect: string[]; // 쿨다운...
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
