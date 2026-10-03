import { MenuItem } from "../../types";
export default function RowCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex min-h-36 w-full items-center justify-between rounded-[10px] p-3 transition hover:outline hover:outline-[#face8d]">
      <div className="flex items-center gap-7">
        <img
          className="h-[120px] w-[120px] rounded-lg object-cover"
          src={item.image}
          alt={item.name}
        />
        <div>
          <h3 className="text-lg text-white/80">{item.name}</h3>
          <p className="text-sm text-white/40">{item.ingredients}</p>
        </div>
      </div>
      <span className="text-white/40">{item.price}</span>
    </article>
  );
}
