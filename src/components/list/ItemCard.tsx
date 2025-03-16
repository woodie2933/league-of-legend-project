import { Item } from "@/types/Item";
import Image from "next/image";

const API_VERSION = "15.5.1";

const ItemCard = ({ item }: { item: Item }) => {
  const itemImage = `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/img/item/${item.image.full}`;

  return (
    <div className="w-60 p-4 flex flex-col justify-center items-center border border-neutral-700 rounded-xl hover:border-lime-400 hover:border-opacity-40 transition-all duration-300">
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
      </div>
    </div>
  );
};

export default ItemCard;
