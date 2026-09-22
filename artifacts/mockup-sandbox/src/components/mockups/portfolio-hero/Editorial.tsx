import { useEffect, useState } from "react";
import { ArrowDown, MapPin, Menu, X } from "lucide-react";
import "./_group.css";

const navLinks = ["Home", "Case Studies", "Projects", "About"];

export function Editorial() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 18);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio-hero min-h-[100dvh] overflow-x-hidden bg-[#fcfaf8]">
      <style>{`
        @keyframes rise-in { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes drift { 0%, 100% { transform: translate3d(0, 0, 0); } 50% { transform: translate3d(-18px, 24px, 0); } }
        @keyframes drift-reverse { 0%, 100% { transform: translate3d(0, 0, 0); } 50% { transform: translate3d(20px, -18px, 0); } }
        @media (prefers-reduced-motion: reduce) {
          .portfolio-hero *, .portfolio-hero *::before, .portfolio-hero *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/55 backdrop-blur-[18px] transition-[padding,box-shadow] duration-500 ${
          hasScrolled ? "py-4 shadow-[0_10px_30px_rgba(58,49,44,0.07)]" : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-12">
          <a
            href="#top"
            data-testid="link-editorial-home"
            aria-label="SG Logo"
            className="rounded-full outline-none transition-transform duration-300 hover:-rotate-3 focus-visible:ring-2 focus-visible:ring-[#c97b6e] focus-visible:ring-offset-4"
          >
            <img
              src="/__mockup/images/sg-logo.png"
              alt="SG Logo"
              className="h-10 w-10 object-contain"
              style={{ filter: "sepia(1) saturate(2) hue-rotate(318deg) brightness(0.75)" }}
            />
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
            {navLinks.map((label, index) => (
              <a
                key={label}
                href="#"
                className="group relative rounded-sm text-sm font-medium text-[#3a312c]/75 outline-none transition-colors duration-300 hover:text-[#3a312c] focus-visible:ring-2 focus-visible:ring-[#c97b6e] focus-visible:ring-offset-4"
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#c97b6e] transition-[width] duration-300 ${
                    index === 0 ? "w-full group-hover:w-2/3" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
            <a
              href="mailto:fsjm1210@gmail.com"
              className="rounded-full bg-[#3a312c] px-5 py-2.5 text-sm font-medium text-[#fcfaf8] shadow-[0_5px_14px_rgba(58,49,44,0.16)] outline-none transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#c97b6e] hover:shadow-[0_8px_20px_rgba(201,123,110,0.22)] focus-visible:ring-2 focus-visible:ring-[#c97b6e] focus-visible:ring-offset-4"
            >
              Let's Talk
            </a>
            <a
              href="#"
              className="rounded-sm text-sm font-medium text-[#3a312c]/75 outline-none transition-colors duration-300 hover:text-[#c97b6e] focus-visible:ring-2 focus-visible:ring-[#c97b6e] focus-visible:ring-offset-4"
            >
              日本語
            </a>
          </nav>

          <button
            type="button"
            className="rounded-full p-2 text-[#3a312c] outline-none transition-colors duration-300 hover:bg-[#c97b6e]/15 focus-visible:ring-2 focus-visible:ring-[#c97b6e] focus-visible:ring-offset-4 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            data-testid="button-editorial-menu"
          >
            {menuOpen ? <X size={24} strokeWidth={1.7} /> : <Menu size={24} strokeWidth={1.7} />}
          </button>
        </div>

        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 md:hidden ${
            menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav aria-label="Mobile navigation" className="min-h-0 overflow-hidden border-t border-[#3a312c]/10 px-6">
            <div className="flex flex-col gap-5 py-6">
              {navLinks.map((label) => (
                <a
                  key={label}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-sm text-lg font-medium text-[#3a312c]/85 outline-none transition-colors hover:text-[#c97b6e] focus-visible:ring-2 focus-visible:ring-[#c97b6e]"
                >
                  {label}
                </a>
              ))}
              <a
                href="mailto:fsjm1210@gmail.com"
                className="rounded-full bg-[#3a312c] px-6 py-3 text-center font-medium text-[#fcfaf8] outline-none transition-colors hover:bg-[#c97b6e] focus-visible:ring-2 focus-visible:ring-[#c97b6e] focus-visible:ring-offset-2"
              >
                Let's Talk
              </a>
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="rounded-sm text-lg font-medium text-[#3a312c]/85 outline-none transition-colors hover:text-[#c97b6e] focus-visible:ring-2 focus-visible:ring-[#c97b6e]"
              >
                日本語
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="top"
          className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24"
          style={{
            backgroundImage: "url('/__mockup/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,.84)_0%,rgba(255,255,255,.62)_38%,rgba(255,255,255,.10)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_62%,#fbf4f5_100%)]" />
          <div className="pointer-events-none absolute -right-28 top-28 h-80 w-80 rounded-full bg-[#d7a9a2]/20 blur-3xl motion-safe:animate-[drift_12s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-[#e7c4c4]/25 blur-3xl motion-safe:animate-[drift-reverse_15s_ease-in-out_infinite]" />

          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-16 md:px-12 md:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(280px,.72fr)] lg:gap-20">
              <div className="max-w-4xl">
                <div className="mb-8 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#3a312c]/70 motion-safe:animate-[rise-in_.7s_ease-out_both]">
                  <span className="h-px w-10 bg-[#c97b6e]" />
                  <span>Hi, I'm</span>
                </div>

                <h1 className="font-display mb-8 max-w-full whitespace-nowrap text-[clamp(2.1rem,8.4vw,9.3rem)] leading-[.9] tracking-[-.065em] text-[#3a312c] motion-safe:animate-[rise-in_.9s_.08s_ease-out_both]">
                  <span>Satoko</span>
                  <span className="ml-[clamp(0.35rem,4vw,4.5rem)] italic text-[#c97b6e]">Gruson</span>
                </h1>

                <div className="mb-5 flex max-w-2xl flex-wrap items-center gap-x-3 gap-y-2 text-lg font-medium leading-snug text-[#3a312c]/85 md:text-xl motion-safe:animate-[rise-in_.8s_.2s_ease-out_both]">
                  <span>Digital Product Manager</span><span className="hidden text-[#3a312c]/30 sm:inline">•</span>
                  <span>Web UX &amp; Content Specialist</span><span className="hidden text-[#3a312c]/30 sm:inline">•</span>
                  <span>UI/UX Designer</span>
                </div>

                <div className="mb-8 flex items-center gap-2 text-[#3a312c]/60 motion-safe:animate-[rise-in_.8s_.3s_ease-out_both]">
                  <MapPin size={17} strokeWidth={1.7} /><span>Tokyo, Japan</span>
                </div>

                <p className="mb-10 max-w-xl text-base leading-[1.8] text-[#3a312c]/70 md:text-lg motion-safe:animate-[rise-in_.8s_.38s_ease-out_both]">
                  My multi-cultural background and a master's in Translation &amp; Localization Management will help you broaden your target audience!{" "}
                </p>

                <div className="flex flex-wrap items-center gap-4 motion-safe:animate-[rise-in_.8s_.48s_ease-out_both]">
                  <a
                    href="#"
                    className="group flex w-52 items-center justify-center gap-3 rounded-full bg-[#3a312c] px-8 py-4 font-medium text-[#fcfaf8] shadow-[0_10px_25px_rgba(58,49,44,0.16)] outline-none transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-[#c97b6e] hover:shadow-[0_14px_30px_rgba(201,123,110,0.2)] focus-visible:ring-2 focus-visible:ring-[#c97b6e] focus-visible:ring-offset-4"
                  >
                    View case studies <ArrowDown size={18} className="transition-transform duration-300 group-hover:translate-y-1" />
                  </a>
                  <a
                    href="#"
                    className="flex w-52 items-center justify-center rounded-full border border-[#3a312c]/30 px-8 py-4 font-medium text-[#3a312c] outline-none transition-[background-color,border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#c97b6e] hover:bg-[#c97b6e]/10 focus-visible:ring-2 focus-visible:ring-[#c97b6e] focus-visible:ring-offset-4"
                  >
                    More about me
                  </a>
                </div>
              </div>

              <div className="hidden self-stretch lg:block motion-safe:animate-[fade-in_1.2s_.5s_ease-out_both]" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}