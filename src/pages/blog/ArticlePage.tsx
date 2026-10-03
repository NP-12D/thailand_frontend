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
    <main className="min-h-screen w-full bg-[#0a0f0f] px-4 pb-16 pt-[85px] sm:px-6 sm:pt-[110px]">
      <div className="mx-auto max-w-[1200px]">
        <Link to="/blog" className="inline-block mb-4">
          <Button>Go Back</Button>
        </Link>
      </div>

      {loading ? (
        <Loader />
      ) : !item ? (
        <p className="mt-10 text-center text-white">Article not found.</p>
      ) : (
        <article className="mx-auto mb-10 mt-2 flex w-full max-w-[1200px] flex-col gap-6 rounded-2xl p-5 outline outline-1 outline-[#face8d] sm:w-[95%] sm:p-6 md:mt-3 md:w-[90%] md:flex-row md:items-stretch md:gap-[22px] md:px-[30px] md:py-6">
          
          <div className="h-[380px] w-full shrink-0 overflow-hidden rounded-xl md:h-auto md:w-1/2 md:flex-1">
            <img
              className="h-full w-full rounded-xl object-cover"
              src={item.image}
              alt={item.title}
            />
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-4 py-2 text-center md:w-1/2 md:flex-1 md:gap-6 md:p-5">
            <h1 className="text-2xl font-semibold text-white sm:text-3xl md:text-[2.5rem] md:leading-tight">
              {item.title}
            </h1>
            <p className="font-script text-base leading-relaxed text-[#e1e1e1] sm:text-lg md:text-xl md:leading-8">
              {item.info || item.story}
            </p>
          </div>
        </article>
      )}
    </main>
  );
}
