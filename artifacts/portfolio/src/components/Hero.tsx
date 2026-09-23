import { ArrowDown, MapPin } from "lucide-react";
import { HeroSurface, HeroTextScrim } from "./HeroSurface";

export function Hero() {
  return (
    <HeroSurface>
      <div
        className="mb-6 text-sm font-medium uppercase tracking-wide text-foreground/70"
      >
        Hi, I'm
      </div>

      <HeroTextScrim>
        <h1
          className="mb-6 whitespace-nowrap font-serif text-[clamp(2rem,10vw,2.65rem)] leading-[1.1] text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Satoko Gruson
        </h1>
        <h2
          className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-sans text-xl font-medium text-foreground/80 md:text-2xl"
        >
          <span>Digital Product Manager</span>
          <span className="hidden text-foreground/30 sm:inline">•</span>
          <span>Web UX &amp; Content Specialist</span>
          <span className="hidden text-foreground/30 sm:inline">•</span>
          <span>UI/UX Designer</span>
        </h2>
        <div
          className="mb-8 flex items-center justify-center gap-2 text-foreground/60"
        >
          <MapPin size={18} />
          <span>Tokyo, Japan</span>
        </div>
        <p
          className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/70"
        >
          My multi-cultural background and a master's in Translation &amp; Localization Management will help you broaden your target audience!{" "}
        </p>
      </HeroTextScrim>

      <div
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#experience"
          className="group flex w-56 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-foreground px-6 py-4 font-medium text-background shadow-lg shadow-foreground/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          View case studies
          <ArrowDown size={18} className="transition-transform duration-300 group-hover:translate-y-1" />
        </a>
        <a
          href="#about"
          className="flex w-52 items-center justify-center rounded-full border border-foreground/30 px-8 py-4 font-medium whitespace-nowrap text-foreground transition-colors duration-300 hover:bg-foreground/5"
        >
          More about me
        </a>
      </div>
    </HeroSurface>
  );
}