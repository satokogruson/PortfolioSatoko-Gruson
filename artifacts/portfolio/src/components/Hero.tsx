import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "hsl(350 60% 92%)",
      }}
    >
      {/* White wash on the left so black text reads clearly */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to right, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.0) 100%)",
        }}
      />
      {/* Subtle gradient fade at the bottom to blend into the next section */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to bottom, transparent 60%, hsl(350 40% 96%) 100%)",
        }}
      />

      {/* Floating blush orbs — soft, light-toned */}
      <motion.div
        className="absolute z-[2] rounded-full pointer-events-none"
        style={{
          width: 480,
          height: 480,
          top: "-60px",
          right: "-40px",
          background: "radial-gradient(circle, hsl(345 60% 85% / 0.35) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute z-[2] rounded-full pointer-events-none"
        style={{
          width: 380,
          height: 380,
          bottom: "80px",
          left: "-60px",
          background: "radial-gradient(circle, hsl(345 50% 80% / 0.3) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* "Hi, I'm" — appears with the name */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex items-center gap-2 text-black/70 font-medium mb-6 tracking-wide uppercase text-sm"
          >
            <span>Hi, I'm</span>
          </motion.div>

          {/* Name — first, no delay */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-black leading-[1.1] mb-6"
          >
            Satoko <br /> Gruson.
          </motion.h1>

          {/* Title — 0.3s after name */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
            className="text-xl md:text-2xl text-black/80 font-medium mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-balance"
          >
            <span>Web Product Manager</span>
            <span className="text-black/30 hidden sm:inline">•</span>
            <span>UI/UX Designer</span>
            <span className="text-black/30 hidden sm:inline">•</span>
            <span>Frontend Developer</span>
          </motion.h2>

          {/* Location — follows title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.45 }}
            className="flex items-center gap-2 text-black/60 mb-8"
          >
            <MapPin size={18} className="text-black/60" />
            <span>Tokyo, Japan</span>
          </motion.div>

          {/* Tagline — 0.6s after name */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.6 }}
            className="text-lg text-black/70 max-w-2xl leading-relaxed mb-12 text-balance"
          >
            My multi-cultural background and a master's in Translation & Localization Management will help you broaden your target audience!{" "}
            <span className="inline-block hover:rotate-12 transition-transform duration-300">😊</span>
          </motion.p>

          {/* Buttons — last */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#experience"
              className="group w-52 flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-full font-medium whitespace-nowrap shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              View case studies
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            <a
              href="#about"
              className="w-52 flex items-center justify-center px-8 py-4 rounded-full font-medium whitespace-nowrap text-black border border-black/30 hover:bg-black/8 transition-colors duration-300"
            >
              More about me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
