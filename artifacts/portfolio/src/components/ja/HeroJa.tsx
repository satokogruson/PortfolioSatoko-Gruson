import { HeroSurface, HeroTextScrim } from "../HeroSurface";

export function HeroJa() {
  return (
    <HeroSurface>
      <div
        className="mb-6 text-sm font-medium uppercase tracking-wide text-foreground/70"
      >
        東京を拠点に活動
      </div>

      <HeroTextScrim>
        <h1
          className="mb-6 whitespace-nowrap font-serif text-4xl leading-[1.1] text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          グルソン聡子
        </h1>
        <h2
          className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-sans text-xl font-medium text-foreground/80 md:text-2xl"
        >
          <span>デジタルプロダクトマネージャー</span>
          <span className="hidden text-foreground/30 sm:inline">•</span>
          <span>Web UX&amp;コンテンツスペシャリスト</span>
          <span className="hidden text-foreground/30 sm:inline">•</span>
          <span>UI/UXデザイナー</span>
        </h2>
        <p
          className="mx-auto mb-8 mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70"
        >
          多文化的なバックグラウンドと、翻訳・ローカライゼーションマネジメントの修士号を活かし、貴社のターゲットオーディエンスを世界へ広げるお手伝いをします😊
        </p>
      </HeroTextScrim>

      <div
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#experience"
          className="group flex w-64 items-center justify-center whitespace-nowrap rounded-full bg-foreground px-8 py-4 font-medium text-background shadow-lg shadow-foreground/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          実績を見る
        </a>
        <a
          href="#about"
          className="flex w-52 items-center justify-center whitespace-nowrap rounded-full border border-foreground/30 px-8 py-4 font-medium text-foreground transition-colors duration-300 hover:bg-foreground/5"
        >
          プロフィールを見る
        </a>
      </div>
    </HeroSurface>
  );
}