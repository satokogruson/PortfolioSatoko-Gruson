import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract elegant background"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(350 40% 65% / 0.5) 1px, transparent 1px)",
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
          background: "radial-gradient(circle, hsl(350 60% 80% / 0.45) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, hsl(350 50% 75% / 0.35) 0%, transparent 70%)",
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
          background: "radial-gradient(circle, hsl(20 60% 85% / 0.3) 0%, transparent 70%)",
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
            className="flex items-center gap-2 text-primary font-medium mb-6 tracking-wide uppercase text-sm"
          >
            <span>Hi, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.1] mb-6"
          >
            Satoko <br /> Gruson.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/80 font-medium mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-balance"
          >
            <span>Web Product Manager</span>
            <span className="text-primary/40 hidden sm:inline">•</span>
            <span>UI/UX Designer</span>
            <span className="text-primary/40 hidden sm:inline">•</span>
            <span>Frontend Developer</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 text-muted-foreground mb-8"
          >
            <MapPin size={18} className="text-primary" />
            <span>Tokyo, Japan</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-foreground/70 max-w-2xl leading-relaxed mb-12 text-balance"
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
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              View case studies
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-full font-medium text-foreground bg-secondary hover:bg-secondary/80 transition-colors duration-300"
            >
              More about me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
