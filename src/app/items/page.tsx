import ItemCard from "@/components/list/ItemCard";
import { fetchItemList } from "@/utils/serverApi/items";

export default async function ItemsPage() {
  // 아이템 패치
  const items = await fetchItemList();

  return (
    <div className="w-screen min-h-screen p-28 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mt-4 mb-16 text-center">Items</h1>
      <hr className="w-11/12 h-auto border border-gray-400 mb-16" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {items.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
