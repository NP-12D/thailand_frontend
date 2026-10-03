import { Link } from "react-router-dom";
import { BlogItem } from "../../types";

export default function BlogCard({ item }: { item: BlogItem }) {
  return (
    <Link
      to={`/blog/${item.id}`}
      className="mx-auto my-5 flex w-full max-w-3xl items-center rounded-2xl border border-white/10 bg-[#0d0d0d] p-4 transition-all duration-300 hover:border-[#face8d] sm:p-5"
    >
      
      <img
        className="mr-4 h-[120px] w-[130px] shrink-0 rounded-xl object-cover sm:mr-6 sm:h-[160px] sm:w-[220px] md:h-[200px] md:w-[280px]"
        src={item.image}
        alt={item.title}
      />

    
      <div className="flex flex-col justify-center">
        <small className="text-xs font-medium text-[#face8d] sm:text-sm">
          {item.createdAt}
        </small>
        <h2 className="my-1 text-base font-semibold text-white sm:my-2 sm:text-xl md:text-2xl">
          {item.title}
        </h2>
        <p className="line-clamp-3 text-xs leading-relaxed text-white/70 sm:text-sm md:text-base">
          {item.story}
        </p>
      </div>
    </Link>
  );
}
