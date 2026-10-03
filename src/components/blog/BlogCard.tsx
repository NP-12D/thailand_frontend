import { Link } from "react-router-dom";
import { BlogItem } from "../../types";
export default function BlogCard({ item }: { item: BlogItem }) {
  return (
    <Link
      to={`/blog/${item.id}`}
      className="mx-auto my-4 flex w-[96%] items-center rounded-xl border border-white/10 p-2 transition hover:outline hover:outline-[#face8d] sm:p-3"
    >
      <img
        className="mr-3 h-[90px] w-[120px] shrink-0 rounded-lg object-cover sm:mr-5 sm:h-[130px] sm:w-[180px] md:h-[200px] md:w-[280px]"
        src={item.image}
        alt={item.title}
      />
      <div>
        <small className="text-xs text-[#face8d] sm:text-sm">
          {item.createdAt}
        </small>
        <h2 className="my-1 text-sm text-white sm:my-2 sm:text-base md:text-xl">
          {item.title}
        </h2>
        <p className="line-clamp-2 text-[11px] leading-4 text-white/60 sm:text-xs sm:leading-5 md:text-sm md:leading-6">
          {item.story}
        </p>
      </div>
    </Link>
  );
}
