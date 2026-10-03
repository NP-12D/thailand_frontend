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
      <div className="mx-auto max-w-[1000px]">
        <Link to="/blog" className="inline-block mb-4">
          <Button>Go Back</Button>
        </Link>
      </div>

      {loading ? (
        <Loader />
      ) : !item ? (
        <p className="mt-10 text-center text-white">Article not found.</p>
      ) : (
        <article className="mx-auto mb-10 mt-2 flex w-full max-w-[1000px] flex-col gap-6 rounded-2xl p-5 outline outline-1 outline-[#face8d] sm:w-[95%] sm:p-6 md:mt-3 md:max-h-[500px] md:flex-row md:items-center md:gap-8 md:p-6">
          
          <div className="h-[320px] w-full shrink-0 overflow-hidden rounded-xl md:h-[380px] md:w-1/2">
            <img
              className="h-full w-full rounded-xl object-cover"
              src={item.image}
              alt={item.title}
            />
          </div>

          
          <div className="flex w-full flex-col justify-center gap-3 text-center md:w-1/2 md:text-left">
            <h1 className="text-xl font-bold tracking-wide text-white sm:text-2xl md:text-2xl lg:text-3xl">
              {item.title}
            </h1>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base md:text-base md:leading-7">
              {item.info || item.story}
            </p>
          </div>
        </article>
      )}
    </main>
  );
}
