export type MenuItem = { id: string; image: string; name: string; ingredients: string; price: string; type: string; flavor?: string; calories?: string; size?: string };
export type BlogItem = { id: string; image: string; createdAt: string; title: string; story: string; info: string };
export type EventItem = { id: string; Title: string; text: string };
export type User = { _id: string; firstName: string; lastName: string; email: string };
export type Booking = { _id: string; guestName: string; guests: number; date: string; time: string };
