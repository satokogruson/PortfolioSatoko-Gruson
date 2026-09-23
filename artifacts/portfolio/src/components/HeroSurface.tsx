import type { ReactNode } from "react";

export function HeroSurface({ children }: { children: ReactNode }) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}images/current-hero-matte-clay.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fcfaf8",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.72)_0%,rgba(255,255,255,.45)_50%,rgba(255,255,255,0)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,#fbf4f5_100%)]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-4xl text-center">{children}</div>
      </div>
    </section>
  );
}

export function HeroTextScrim({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate mx-auto mb-1 max-w-5xl rounded-[2rem] px-3 py-3 before:absolute before:inset-0 before:-z-10 before:rounded-[2rem] before:bg-black/[0.045] before:blur-2xl">
      {children}
    </div>
  );
}