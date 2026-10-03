import { useEffect, useState } from "react";
import { EventItem } from "../../types";
import EventCard from "../../components/events/EventCard";
const images = ["/events.png", "/event2.png", "/event3.png"];
export default function EventsPage() {
  const [items, setItems] = useState<EventItem[]>([]);
  useEffect(() => {
    fetch("https://694fb0888531714d9bceb453.mockapi.io/events")
      .then((r) => r.json())
      .then(setItems);
  }, []);
  return (
    <main className="min-h-screen bg-[#101010] pb-16 pt-24">
      <div className="text-center">
        <h1 className="font-script text-[40px] text-[#f6d79e]">
          Dining Event Types
        </h1>
        <p className="mx-auto mt-5 max-w-[600px] text-xl text-white">
          We provide dining event for your special day with your important
          people
        </p>
      </div>
      {items.map((i, n) => (
        <EventCard key={i.id} item={i} image={images[n % images.length]} />
      ))}
    </main>
  );
}
