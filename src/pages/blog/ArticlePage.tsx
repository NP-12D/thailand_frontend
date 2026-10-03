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
    <main className="min-h-screen w-full bg-[#0a0f0f] px-3 pb-16 pt-[85px] sm:px-5 sm:pt-[110px]">
      <Link to="/blog">
        <Button>Go Back</Button>
      </Link>
      {loading ? (
        <Loader />
      ) : !item ? (
        <p className="mt-10 text-center text-white">Article not found.</p>
      ) : (
        <article className="mx-auto mb-10 mt-3 flex max-h-[60vh] w-full max-w-[1200px] flex-col gap-6 rounded-2xl p-4 outline outline-1 outline-[#face8d] sm:w-[95%] sm:p-5 md:mt-3 md:w-[90%] md:flex-row md:items-stretch md:gap-[22px] md:px-[30px] md:py-3">
          <div className="h-[300px] w-full overflow-hidden rounded-[10px] md:h-auto md:w-1/2 md:flex-1">
            <img
              className="h-full w-full rounded-[10px] object-cover"
              src={item.image}
              alt={item.title}
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-5 p-2 text-center md:w-1/2 md:flex-1 md:p-5">
            <h1 className="my-2 text-[1.75rem] font-semibold text-white md:my-5 md:text-[2.5rem]">
              {item.title}
            </h1>
            <p className="font-script text-[15px] leading-[22px] text-[#e1e1e1] md:text-lg md:leading-7">
              {item.info || item.story}
            </p>
          </div>
        </article>
      )}
    </main>
  );
}
