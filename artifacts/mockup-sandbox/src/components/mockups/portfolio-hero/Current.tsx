import { useState } from "react";
import { ArrowDown, MapPin, Menu, X } from "lucide-react";
import "./_group.css";

const navLinks = ["Home", "Case Studies", "Projects", "About"];

export function Current() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio-hero min-h-screen bg-[#fcfaf8]">
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/55 py-6 backdrop-blur-[18px]"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <a href="#top" data-testid="link-current-home">
            <img
              src="/__mockup/images/sg-logo-updated.png"
              alt="SG Logo"
              className="h-10 w-10 object-contain"
            />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((label) => (
              <a key={label} href="#" className="text-sm font-medium text-[#3a312c]/80">
                {label}
              </a>
            ))}
            <a href="mailto:fsjm1210@gmail.com" className="rounded-full bg-[#3a312c] px-5 py-2.5 text-sm font-medium text-[#fcfaf8] shadow-md">
              Let's Talk
            </a>
            <a href="#" className="text-sm font-medium text-[#3a312c]/80">日本語</a>
          </nav>
          <button
            className="p-2 text-[#3a312c] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            data-testid="button-current-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <section
        id="top"
        className="relative flex min-h-screen items-center overflow-hidden pt-20"
        style={{
           backgroundImage: "url('/__mockup/images/current-hero-matte-clay.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.72)_0%,rgba(255,255,255,.45)_50%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,#fbf4f5_100%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 text-sm font-medium uppercase tracking-wide text-black/70">Hi, I'm</div>
             <div className="relative isolate mx-auto mb-1 max-w-5xl rounded-[2rem] px-3 py-3 before:absolute before:inset-0 before:-z-10 before:rounded-[2rem] before:bg-black/[0.045] before:blur-2xl">
               <h1 className="font-display mb-6 whitespace-nowrap text-[2.65rem] leading-[1.1] text-black sm:text-6xl md:text-7xl lg:text-8xl">
                 Satoko Gruson
               </h1>
               <div className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xl font-medium text-black/80 md:text-2xl">
                 <span>Digital Product Manager</span><span className="hidden text-black/30 sm:inline">•</span>
                 <span>Web UX &amp; Content Specialist</span><span className="hidden text-black/30 sm:inline">•</span>
                 <span>UI/UX Designer</span>
               </div>
               <div className="mb-8 flex items-center justify-center gap-2 text-black/60">
                 <MapPin size={18} /><span>Tokyo, Japan</span>
               </div>
               <p className="mx-auto max-w-2xl text-lg leading-relaxed text-black/70">
                 My multi-cultural background and a master's in Translation &amp; Localization Management will help you broaden your target audience!{" "}
               </p>
             </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
               <a href="#" className="flex w-56 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-black px-6 py-4 font-medium text-white shadow-lg">
                View case studies <ArrowDown size={18} />
              </a>
              <a href="#" className="flex w-52 items-center justify-center rounded-full border border-black/30 px-8 py-4 font-medium text-black">
                More about me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}