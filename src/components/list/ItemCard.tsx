import { Item } from "@/types/Item";
import Image from "next/image";

const API_VERSION = "15.5.1";

const ItemCard = ({ item }: { item: Item }) => {
  const itemImage = `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/img/item/${item.image.full}`;

  return (
    <div className="w-64 p-4 flex flex-col justify-center items-center border border-neutral-700 rounded-xl hover:border-lime-400 hover:border-opacity-40 transition-all duration-300">
      {/* 아이템 이미지 */}
      <Image
        className="rounded-md shadow-md shadow-slate-500"
        src={itemImage}
        alt={item.plaintext}
        width={item.image.w}
        height={item.image.h}
      />
      <div className="w-48 flex flex-col justify-center items-center pt-5">
        <div className="text-md font-semibold">{item.name}</div>
        <div className="text-sm font-medium pt-2">{item.plaintext}</div>
        {/* 골드 정보 */}
        <div className="w-40 flex justify-between items-center mt-5 text-sm gap-3 text-center">
          <div>
            <div className="text-xs">Total</div>
            <div className="text-base font-semibold text-yellow-400">
              {item.gold.total}
            </div>
          </div>
          <div>
            <div className="text-xs">Base</div>
            <div className="text-base font-semibold text-yellow-400">
              {item.gold.base}
            </div>
          </div>
          <div>
            <div className="text-xs">Sell</div>
            <div className="text-base font-semibold text-yellow-400">
              {item.gold.sell}
            </div>
          </div>
        </div>
        {/* 태그 정보 출력 */}
        <div className="mt-3 flex flex-wrap justify-center gap-1">
          {item.tags.map((tag) => (
            <span key={tag} className="bg-lime-600 text-xs px-1 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
