import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/home/HomePage";
import Menu from "./pages/menu/MenuPage";
import Category from "./pages/menu/CategoryPage";
import Blog from "./pages/blog/BlogPage";
import Article from "./pages/blog/ArticlePage";
import Story from "./pages/story/StoryPage";
import Events from "./pages/events/EventsPage";
import Booking from "./pages/booking/BookingPage";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/category/:category" element={<Category />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/story" element={<Story />} />
        <Route path="/events" element={<Events />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
