import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

const ChampionCard = ({ champion }: { champion: Champion }) => {
  // 챔피언 이미지 URL
  const championImage = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`;

  return (
    <Link href={`/champions/${champion.id}`}>
      <div className="w-[300px] p-6 flex flex-col justify-center items-center transition-all duration-300 cursor-pointer hover:scale-105 hover:text-green-400">
        <Image
          src={championImage}
          alt={champion.name}
          width={250}
          height={200}
        />
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg font-semibold pt-5">{champion.name}</div>
          <div className="text-md font-semibold pt-2">{champion.title}</div>
        </div>
      </div>
    </Link>
  );
};

export default ChampionCard;
