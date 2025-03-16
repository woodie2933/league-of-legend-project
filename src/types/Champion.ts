// 챔피언 기본 정보
export type Champion = {
  id: string; // "Aatrox"
  key: string; // key(API) -"266"
  name: string; // "아트록스"
  title: string; // "다르킨의 검"
  blurb: string; // "한때는 공허에 맞서 싸웠던 어쩌구..."
  info: ChampionInfo; // 아래에 선언
  image: ChampionImage; // 아래에 선언
  tags: string[]; //  "Mage", "Assassin"...
  partype: string; //
  stats: ChampionStats; // "피의 샘"
};

// 공격력, 방어력 등
export type ChampionInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

// 이미지 파일, 사이즈
export type ChampionImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

// 디테일 페이지 챔피언 정보
export type ChampionDetail = {
  id: string; // "Aatrox"
  key: string; // key(API) -"266"
  name: string; // "아트록스"
  title: string; // "다르킨의 검"
  image: ChampionImage;
  skins: Skin[]; // 아래에 선언
  lore: string; // "한때는 공허에 맞서 싸웠던..."
  blurb: string; // "한때는 공허에 맞서 싸웠던..." -> ...
  allytips: string[]; // "공격 성공률을 높이려면 -세요"
  enemytips: string[]; // "아트록스의 공격은 미리 표시되므로 벗어나세요"
  tags: string[]; // "fighter", "mage"...
  partype: string; // "피의 샘"
  info: ChampionInfo;
  stats: ChampionStats; // 아래에 선언
  spells: Spell[]; // 아래에 선언
  passive: Passive; // 아래에 선언
  recommended: any[];
};

export type Skin = {
  id: string; // "266000"
  num: number; // 0
  name: string; // "default"
  chromas: boolean; // false
};

// 기술 스탯?
export type ChampionStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};

// 능력치?
export type Spell = {
  id: string;
  name: string;
  description: string; // "아트록스가 대검을 내리쳐 물리 피해를 줍니다."
  tooltip: string; // "구체적으로 어떤 피해를 주는지 써있음"
  leveltip: Leveltip; // 아래에 선언
  maxrank: number; // 5
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  effect: (number | null)[][];
  effectBurn: string[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: SpellImage; // 아래에 선언
  resource: string;
};

export type Leveltip = {
  label: string[]; // 재사용 대기시간...
  effect: string[]; // 쿨다운...
};

export type SpellImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type Passive = {
  name: string; // "사신 태세"
  description: string; // 패시브 스킬에 대한 설명인 듯
  image: PassiveImage; // 아래에 선언
};

export type PassiveImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type ChampionDetailProps = {
  params: {
    id: string;
  };
};
