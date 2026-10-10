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
    <main className="min-h-screen w-full bg-[#070707] px-4 pb-16 pt-20 sm:px-6 md:pt-28">
      <div className="mx-auto w-full max-w-[1200px] mb-6">
        <Link to="/blog" className="inline-block">
          <Button>Go Back</Button>
        </Link>
      </div>

      {loading ? (
        <Loader />
      ) : !item ? (
        <p className="mt-10 text-center text-white">Article not found.</p>
      ) : (
        <article className="mx-auto flex w-full max-w-[1100px] flex-col gap-6 rounded-2xl bg-[#0d0d0d] p-4 outline outline-1 outline-[#face8d] sm:p-6 lg:flex-row lg:items-center lg:gap-10 lg:p-8">
          
          <div className="w-full shrink-0 overflow-hidden rounded-xl lg:w-1/2 lg:max-w-[500px]">
            <img
              className="h-48 w-full object-cover sm:h-64 md:h-80 lg:h-[350px]"
              src={item.image}
              alt={item.title}
            />
          </div>

          <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
            {item.createdAt && (
              <span className="mb-2 text-xs font-semibold tracking-widest text-[#face8d] sm:text-sm">
                {item.createdAt}
              </span>
            )}

            <h1 className="text-xl font-bold tracking-wide text-white sm:text-2xl md:text-3xl lg:text-4xl">
              {item.title}
            </h1>

            <p className="mt-3 text-sm font-normal leading-relaxed text-white/80 sm:text-base md:leading-7">
              {item.info || item.story}
            </p>
          </div>

        </article>
      )}
    </main>
  );
}