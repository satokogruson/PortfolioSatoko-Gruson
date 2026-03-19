import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: "hsl(345 48% 32%)" }}
    >
      {/* Background image — tinted to blend with dark rose */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract elegant background"
          className="w-full h-full object-cover object-center opacity-10"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, hsl(345 48% 28% / 0.3), hsl(345 48% 32% / 0.7) 60%, hsl(345 48% 32%))",
          }}
        />
      </div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute z-[2] rounded-full pointer-events-none"
        style={{
          width: 520,
          height: 520,
          top: "-80px",
          right: "-60px",
          background: "radial-gradient(circle, hsl(345 60% 55% / 0.5) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute z-[2] rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          bottom: "60px",
          left: "-80px",
          background: "radial-gradient(circle, hsl(345 50% 50% / 0.4) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute z-[2] rounded-full pointer-events-none"
        style={{
          width: 260,
          height: 260,
          top: "40%",
          right: "25%",
          background: "radial-gradient(circle, hsl(20 70% 70% / 0.25) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-white/70 font-medium mb-6 tracking-wide uppercase text-sm"
          >
            <span>Hi, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-6"
          >
            Satoko <br /> Gruson.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 font-medium mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-balance"
          >
            <span>Web Product Manager</span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span>UI/UX Designer</span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span>Frontend Developer</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 text-white/60 mb-8"
          >
            <MapPin size={18} className="text-white/80" />
            <span>Tokyo, Japan</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl leading-relaxed mb-12 text-balance"
          >
            My multi-cultural background and a master's in Translation & Localization Management will help you broaden your target audience!{" "}
            <span className="inline-block hover:rotate-12 transition-transform duration-300">😊</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#experience"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-[hsl(345_48%_32%)] rounded-full font-medium shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              View case studies
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-full font-medium text-white border border-white/30 hover:bg-white/10 transition-colors duration-300"
            >
              More about me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
