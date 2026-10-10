import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MenuItem } from "../../types";
import Card from "../../components/menu/Card";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";
const map: Record<string, string> = {
  breakfast: "food",
  lunch: "lunch",
  dinner: "dinner",
  drink: "drink",
};
export default function CategoryPage() {
  const { category = "breakfast" } = useParams();
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://694d541bad0f8c8e6e20679f.mockapi.io/menu/")
      .then((r) => r.json())
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);
  return (
    <main className="min-h-screen bg-[#070707] px-3 pb-16 pt-20">
      <Link to="/menu">
        <Button>Go back</Button>
      </Link>
       
      <div className="text-center">
        <h1 className="text-[30px] text-[#face8d]">Our Menu</h1> 
        <div className="mt-5 flex justify-center gap-7">
          {Object.keys(map).map((x) => (
            <Link
              key={x}
              to={`/menu/category/${x}`}
              className={`relative text-[24px] capitalize font-medium tracking-[0.5px] transition-colors duration-300
after:absolute
after:bottom-[-6px]
after:left-0
after:h-[1.5px]
after:bg-[#face8d]
after:transition-all
after:duration-300
${
  x === category
    ? "text-[#face8d] after:w-full"
    : "text-[#ccc] after:w-0 hover:text-[#face8d] hover:after:w-full"
}`}
            >
              {x}
            </Link>
          ))}
        </div>
      </div>
       
      {loading ? (
        <Loader />
      ) : (
        <div className="mx-auto mt-8 grid w-[90%] gap-5 grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
          {items
            .filter((i) => i.type === map[category])
            .map((i) => (
              <Card key={i.id} item={i} />
            ))}
        </div>
      )}
    </main>
  );
}
