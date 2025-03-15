import { Item } from "@/types/Item";
import Image from "next/image";

const API_VERSION = "15.5.1";

const ItemCard = ({ item }: { item: Item }) => {
  const itemImage = `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/img/item/${item.image.full}`;

  return (
    <div className="w-[300px] p-6 flex flex-col justify-center items-center">
      <Image src={itemImage} alt={item.description} width={250} height={200} />
      <div className="flex flex-col justify-center items-center">
        <div className="text-lg font-semibold pt-5">{item.name}</div>
        <div className="text-md font-semibold pt-2">{item.description}</div>
      </div>
    </div>
  );
};

export default ItemCard;
