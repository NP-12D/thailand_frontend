
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogItem } from "../../types";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";

export default function ArticlePage() {
  const { id } = useParams();
  const [item, setItem] = useState<BlogItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://694d541bad0f8c8e6e20679f.mockapi.io/articles/${id}`)
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then(setItem)
      .catch(() => setItem(null))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <main className="min-h-screen w-full bg-[#0a0f0f] px-4 pb-16 pt-[85px] sm:px-6 sm:pt-[100px]">
      <div className="mx-auto max-w-[1100px]">
        <Link to="/blog" className="inline-block mb-4">
          <Button>Go Back</Button>
        </Link>
      </div>

      {loading ? (
        <Loader />
      ) : !item ? (
        <p className="mt-10 text-center text-white">Article not found.</p>
      ) : (
        <article className="mx-auto mb-10 mt-2 flex w-full max-w-[1100px] flex-col overflow-hidden rounded-2xl border border-[#face8d]/20 bg-[#0e0201]/90 p-5 backdrop-blur-md sm:p-8 md:mt-3 md:flex-row md:items-center md:gap-8 md:p-10">
          
        
          <div className="h-[280px] w-full shrink-0 overflow-hidden rounded-xl sm:h-[350px] md:h-[420px] md:w-1/2">
            <img
              className="h-full w-full object-cover transition-all duration-500"
              src={item.image}
              alt={item.title}
            />
          </div>

          
          <div className="flex w-full flex-col items-center justify-center gap-4 py-4 text-center md:w-1/2 md:gap-6 md:py-0">
            <span className="text-xs font-semibold tracking-[3px] text-[#face8d] uppercase">
              {item.createdAt || "Journal & Insights"}
            </span>
            <h1 className="text-3xl font-bold tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {item.title}
            </h1>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg md:text-xl md:leading-9">
              {item.info || item.story}
            </p>
          </div>
        </article>
      )}
    </main>
  );
}
