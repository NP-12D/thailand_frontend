import { useEffect, useState } from "react";

const images = [
  "/server-serving-a-group-of-friends-enjoying-their-meal-at-a-restaurant.jpg",
  "/woman-ordering-her-meal-from-a-restaurant-server.jpg",
  "/restaurant-guests.jpg",
];

export default function StoryPage() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[url('/blog.jpg')] bg-cover bg-center p-4 pt-[90px] sm:p-6 md:pt-20">
      <article className="flex w-full max-w-[1100px] flex-col overflow-hidden rounded-2xl border border-[#f8d49e]/20 bg-[#0e0201]/90 p-5 backdrop-blur-md transition-all sm:p-8 md:flex-row md:items-center md:gap-8 md:p-10">
        
       
        <div className="flex w-full flex-col items-center justify-center gap-4 py-4 text-center md:w-1/2 md:gap-6 md:py-0">
          <span className="text-xs font-semibold tracking-[3px] text-[#f8d49e] uppercase">
            About Us
          </span>
          <h1 className="text-3xl font-bold tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="text-base leading-relaxed text-white/80 sm:text-lg md:text-xl md:leading-9">
            We believe dining is more than just eating—it&apos;s about
            connection, comfort, and creating memories. From our warm atmosphere
            to our attentive service, every detail is designed to make you feel
            at home.
          </p>
        </div>

        
        <div className="h-[280px] w-full shrink-0 overflow-hidden rounded-xl sm:h-[350px] md:h-[420px] md:w-1/2">
          <img
            className="h-full w-full object-cover transition-all duration-700 ease-in-out"
            src={images[i]}
            alt="Restaurant atmosphere"
          />
        </div>
      </article>
    </main>
  );
}
