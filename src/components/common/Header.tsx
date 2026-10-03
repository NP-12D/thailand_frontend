import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  ["/", "Home"],
  ["/menu", "Menu"],
  ["/blog", "Blog"],
  ["/story", "Our Story"],
  ["/events", "Event types"],
] as const;

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const navLink =
    "relative text-[15px] font-medium tracking-[0.5px] transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-0 after:bg-[#eac291] after:transition-all after:duration-300 hover:text-[#eac291] hover:after:w-full";

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-[#eac291]/10 bg-[#070707]/85 px-5 py-3.5 backdrop-blur-xl md:px-[30px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-50">
          <img src="/crown.png" alt="Logo" className="h-[30px] w-[30px]" />
          <b className="text-xl tracking-[2px] text-[#eac291]">UNIQUE</b>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([to, name]) => (
            <Link
              key={to}
              to={to}
              className={`${navLink} ${
                pathname === to ? "text-[#eac291] after:w-full" : "text-[#e6e6e6]"
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/book"
            className="rounded-lg border border-[#eac291] px-4 py-2 text-sm font-medium text-[#eac291] transition-all hover:bg-[#eac291] hover:text-[#070707]"
          >
            Book a Table
          </Link>
        </div>

        {/* Mobile Hamburger / Animated X Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="relative z-50 flex h-6 w-6 flex-col justify-center gap-[5px] md:hidden focus:outline-none"
        >
          <span
            className={`h-[2px] w-full rounded bg-[#eac291] transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-full rounded bg-[#eac291] transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-full rounded bg-[#eac291] transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Slide-out Drawer */}
      <aside
        className={`fixed top-0 right-0 z-40 flex h-screen w-[80vw] max-w-[320px] flex-col justify-between bg-[#070707] border-l border-[#eac291]/15 px-6 pt-24 pb-8 transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold tracking-[2px] text-[#eac291]/60 uppercase">
            Navigation
          </span>

          <nav className="flex flex-col gap-2">
            {links.map(([to, name]) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-3 text-lg font-medium transition-all ${
                  pathname === to
                    ? "bg-[#eac291]/10 text-[#eac291]"
                    : "text-[#e6e6e6] hover:bg-white/5 hover:text-[#eac291]"
                }`}
              >
                <span>{name}</span>
                {pathname === to && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#eac291]" />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Call to Action */}
        <div className="flex flex-col gap-4 border-t border-[#eac291]/10 pt-6">
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center rounded-xl bg-[#eac291] py-3.5 font-semibold text-[#070707] transition-all active:scale-[0.98]"
          >
            Book a Table
          </Link>
        </div>
      </aside>
    </>
  );
}
