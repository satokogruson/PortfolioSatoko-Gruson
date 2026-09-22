import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroJa() {
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex items-center justify-center gap-2 text-black/70 font-medium mb-6 tracking-wide uppercase text-sm"
          >
            <span>東京を拠点に活動</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-black leading-[1.1] mb-6 whitespace-nowrap"
          >
            サトコ・グルソン
          </motion.h1>

          {/* Professional titles */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
            className="text-xl md:text-2xl text-black/80 font-medium mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-balance"
          >
            <span>デジタルプロダクトマネージャー</span>
            <span className="text-black/30 hidden sm:inline">•</span>
            <span>Web UX&amp;コンテンツスペシャリスト</span>
            <span className="text-black/30 hidden sm:inline">•</span>
            <span>UI/UXデザイナー</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.6 }}
            className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed mt-8 mb-12 text-balance"
          >
            多文化的なバックグラウンドと、翻訳・ローカライゼーションマネジメントの修士号を活かし、貴社のターゲットオーディエンスを世界へ広げるお手伝いをします😊
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#experience"
              className="group w-64 flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-full font-medium whitespace-nowrap shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              実績を見る
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            <a
              href="#about"
              className="w-52 flex items-center justify-center px-8 py-4 rounded-full font-medium whitespace-nowrap text-black border border-black/30 hover:bg-black/8 transition-colors duration-300"
            >
              プロフィールを見る
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
