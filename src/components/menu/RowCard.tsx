import { MenuItem } from "../../types";

export default function RowCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex min-h-36 w-full items-center justify-between rounded-[10px] p-3 transition hover:outline hover:outline-[#face8d]">
      <div className="flex items-center gap-4 sm:gap-7">
    
        <div className="h-[120px] w-[120px] shrink-0 overflow-hidden rounded-lg">
          <img
            className="h-full w-full object-cover"
            src={item.image}
            alt={item.name}
          />
        </div>
        <div>
          <h3 className="text-lg text-white/80">{item.name}</h3>
          <p className="text-sm text-white/40">{item.ingredients}</p>
        </div>
      </div>
      <span className="shrink-0 text-white/40">{item.price}</span>
    </article>
  );
}
