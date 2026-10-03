import { useEffect, useState } from "react";
import { BlogItem } from "../../types";
import BlogCard from "../../components/blog/BlogCard";
import Loader from "../../components/common/Loader";
export default function BlogPage() {
  const [items, setItems] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://694d541bad0f8c8e6e20679f.mockapi.io/articles")
      .then((r) => r.json())
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);
  return (
    <main className="flex w-full items-stretch bg-[#0a0f0f] max-md:flex-col">
      <aside className=" w-full shrink-0 grid grid-cols-1 grid-rows-[120vh_1fr] gap-0 overflow-hidden md:w-1/2 md:flex-1 md:grid-rows-[120vh_1fr]">
        <div className="relative flex items-center justify-center bg-[linear-gradient(#000b,#000b),url('/blogm.jpg')] bg-cover text-center">
          <b className="absolute top-14 text-3xl">Unique</b>
          <div>
            <h1 className="font-script text-7xl text-[#face8d]">Blog</h1>
            <p className="font-script text-5xl">Latest News</p>
          </div>
        </div>
        <div className="relative">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/blog.jpg"
          />
        </div>
      </aside>
      <div className="w-full shrink-0 overflow-x-hidden overflow-y-auto bg-[#0a0f0f] pt-[70px]  md:w-1/2 md:flex-1 md:py-14">
        {loading ? (
          <Loader />
        ) : (
          items.map((i) => <BlogCard key={i.id} item={i} />)
        )}
      </div>
    </main>
  );
}
