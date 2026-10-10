import { useEffect, useState } from "react";
import { MenuItem } from "../../types";
import { MenuImageColumn, MenuSection } from "../../components/menu/MenuComponents";
import Loader from '../../components/common/Loader';
const API = "https://694d541bad0f8c8e6e20679f.mockapi.io/menu/";
const groups = [
  ["Breakfast", "food", "breakfast"],
  ["Dinner", "dinner", "dinner"],
  ["Lunch", "lunch", "lunch"],
  ["Drink", "drink", "drink"],
];
export default function MenuPage() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setItems)
      .catch(() => undefined)
      .finally(() => setLoading(false));
  }, []);
  return (
    <main className="flex w-full items-stretch bg-[#0a0f0f] max-md:flex-col">
      <MenuImageColumn />
      <div className="w-full overflow-y-auto bg-[#070707] pb-16 md:w-1/2">
        {loading ? <Loader /> : null}
        {groups.map(([name, type, slug]) => (
          <MenuSection
            key={name}
            name={name}
            slug={slug}
            items={items.filter((i) => i.type === type)}
          />
        ))}
      </div>
    </main>
  );
}
