import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const links = [
  ["/", "Home"],
  ["/menu", "Menu"],
  ["/blog", "Blog"],
  ["/story", "Our Story"],
  ["/events", "Event types"],
  ["/book", "Book a Table"],
] as const;
export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const navLink =
    "relative text-[15px] font-medium tracking-[0.5px] transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-0 after:bg-[#eac291] after:transition-all after:duration-300 hover:text-[#eac291] hover:after:w-full";
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-[#eac291]/10 bg-[#070707]/85 px-5 py-3.5 backdrop-blur-xl md:px-[30px]">
      <Link to="/" className="flex items-center gap-3">
        <img src="/crown.png" className="h-[30px] w-[30px]" />
        <b className="text-xl tracking-[2px] text-[#eac291]">UNIQUE</b>
      </Link>
      <nav
        className={`${open ? "left-0" : "left-[-100%]"} fixed top-0 flex h-screen w-full flex-col items-center justify-center gap-7 bg-[#070707] transition-all md:static md:h-auto md:w-[50vw] md:max-w-[550px] md:flex-row md:justify-between md:bg-transparent`}
      >
        {links.map(([to, name]) => (
          <Link
            key={to}
            to={to}
            onClick={() => setOpen(false)}
            className={`${navLink} ${
              pathname === to ? "text-[#eac291] after:w-full" : "text-[#e6e6e6]"
            }`}
          >
            {name}
          </Link>
        ))}
      </nav>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-6 flex-col gap-1.5 md:hidden"
      >
        <i />
        <i />
        <i />
      </button>
    </header>
  );
}
