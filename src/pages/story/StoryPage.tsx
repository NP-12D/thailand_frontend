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
    <main className="flex min-h-screen items-center justify-center bg-[url('/blog.jpg')] bg-cover p-5">
      <article className="flex w-[90%] max-w-[1100px] flex-col overflow-hidden rounded-xl bg-[#0e0201bd] p-3 md:flex-row">
        <div className="flex w-full flex-col items-center justify-center gap-5 p-8 text-center md:w-1/2">
          <h1 className="text-2xl text-[#f8d49e]">Our Story</h1>
          <p className="font-script text-lg leading-7">
            We believe dining is more than just eating—it&apos;s about
            connection, comfort, and creating memories. From our warm atmosphere
            to our attentive service, every detail is designed to make you feel
            at home.
          </p>
        </div>
        <img
          className="w-full rounded-lg object-cover md:w-1/2"
          src={images[i]}
        />
      </article>
    </main>
  );
}
