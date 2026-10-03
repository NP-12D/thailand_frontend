import { Link } from "react-router-dom";
import { MenuItem } from "../../types";
import RowCard from "./RowCard";

export function MenuImageColumn() {
  return (
    <aside className="grid w-full grid-cols-1 grid-rows-[60vh] gap-0 overflow-hidden md:w-1/2 md:grid-rows-[120vh_1fr_1fr_1fr]">
      {/* Header section (shows on both mobile and desktop) */}
      <div className="relative flex items-center justify-center bg-[linear-gradient(#000b,#000b),url('/menubg.png')] bg-cover text-center min-h-[60vh] md:min-h-0">
        <b className="absolute top-14 text-3xl">Unique</b>
        <div>
          <h1 className="font-script text-7xl text-[#face8d]">Check Out</h1>
          <p className="font-script text-5xl">Our menues</p>
        </div>
      </div>

      {/* 
        - hidden: completely hides the boxes and images on mobile (no black boxes).
        - md:block: shows them normally on desktop just like before.
      */}
      {["/mgbg2.jpg", "/res1.jpg", "/res2.jpg"].map((src) => (
        <div key={src} className="relative hidden md:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={src}
            alt="Menu preview"
          />
        </div>
      ))}
    </aside>
  );
}

export function MenuRow({ item }: { item: MenuItem }) {
  return <RowCard item={item} />;
}

export function MenuSection({
  name,
  slug,
  items,
}: {
  name: string;
  slug: string;
  items: MenuItem[];
}) {
  return (
    <section className="mx-auto pt-[70px] flex w-[80%] flex-col gap-6">
      <h2 className="font-script text-6xl text-[#face8d]">{name}</h2>
      {items.slice(0, 3).map((i) => (
        <MenuRow key={i.id} item={i} />
      ))}
      <Link to={`/menu/category/${slug}`}>
        <button className="rounded-lg bg-[#f9df68] px-4 py-2 text-black">
          See More
        </button>
      </Link>
    </section>
  );
}
