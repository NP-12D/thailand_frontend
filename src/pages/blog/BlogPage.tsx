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
      
      <aside className="w-full shrink-0 flex flex-col overflow-hidden md:grid md:w-1/2 md:flex-1 md:grid-cols-1 md:grid-rows-[120vh_1fr] md:gap-0">
        <div className="relative flex h-[50vh] min-h-[380px] items-center justify-center bg-[linear-gradient(#000b,#000b),url('/blogm.jpg')] bg-cover bg-center text-center pt-12 md:h-auto md:min-h-0 md:pt-0">
          <b className="absolute top-14 text-3xl text-white">Unique</b>
          <div>
            <h1 className="font-script text-5xl text-[#face8d] sm:text-6xl md:text-7xl">
              Blog
            </h1>
            <p className="font-script text-3xl text-white sm:text-4xl md:text-5xl">
              Latest News
            </p>
          </div>
        </div>

        <div className="relative hidden h-[300px] w-full md:block md:h-auto">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/blog.jpg"
            alt="Blog preview"
          />
        </div>
      </aside>

      
      <div className="w-full shrink-0 overflow-x-hidden overflow-y-auto bg-[#0a0f0f] px-3 pb-12 pt-[70px] md:w-1/2 md:flex-1 md:px-0 md:py-14 md:pt-[70px]">
        {loading ? (
          <Loader />
        ) : (
          items.map((i) => <BlogCard key={i.id} item={i} />)
        )}
      </div>
    </main>
  );
}

