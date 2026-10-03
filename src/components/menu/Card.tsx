import { MenuItem } from "../../types";
export default function Card({ item }: { item: MenuItem }) {
  return (
    <article
      className="flex min-h-[230.8] items-end rounded-xl bg-cover bg-center transition hover:scale-[1.02] hover:outline hover:outline-[#face8d]"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="w-1/2 rounded-r-xl bg-black/80 p-4 text-white h-full">
        <h2 className="text-center">{item.name}</h2>
        <p className="mt-3">
          <b className="text-[#face8d]">Flavour: </b>
          {item.flavor || "Chef selection"}
        </p>
        <p>
          <b className="text-[#face8d]">Calories: </b>
          {item.calories || "—"}
        </p>
        <p>
          <b className="text-[#face8d]">Size: </b>
          {item.size || "—"}
        </p>
        <p>
          <b className="text-[#face8d]">Price: </b>
          {item.price}
        </p>
        <p className="mt-2 border-t border-white pt-2 text-sm">
          <b className="text-[#face8d]">Ingredients: </b>
          {item.ingredients}
        </p>
      </div>
    </article>
  );
}
