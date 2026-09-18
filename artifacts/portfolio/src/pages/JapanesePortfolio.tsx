import { ArrowUpRight, Figma, Globe2, Mail, MoveLeft } from "lucide-react";
import { useEffect } from "react";

const baseUrl = import.meta.env.BASE_URL;

const caseStudies = [
  {
    number: "01",
    eyebrow: "Adobe Japan · Web Product Manager",
    title: "Adobe JapanのWeb体験改善",
    summary:
      "Adobe JapanのWeb Product Managerとして、日本市場向けのWebコンテンツ企画、カルチャライゼーション、A/Bテスト、CMS実装、QA、効果測定を担当。Figmaを使用した改善案の作成に加え、マーケティング、デザイン、制作会社、グローバル開発チームと連携し、FireflyおよびCreative Cloud関連ページのUX・コンバージョン改善を推進しました。",
    tags: ["UX改善", "ローカライゼーション", "A/Bテスト", "Adobe Analytics"],
  },
  {
    number: "02",
    eyebrow: "Local Happinez · Product Design",
    title: "多国籍プラットフォームの情報設計",
    summary:
      "持続可能な地域活動をつなぐグローバルプラットフォームにおいて、ユーザーが迷わず参加・登録できる体験を設計。情報設計、ユーザーフロー、認証・登録フロー、設定画面、アクセシビリティをFigmaで整理し、開発に渡せるプロトタイプへ落とし込みました。",
    tags: ["情報設計", "ユーザーフロー", "ワイヤーフレーム", "Figma"],
  },
  {
    number: "03",
    eyebrow: "Medicus Practice · Product Design",
    title: "医療サービスのデジタル体験設計",
    summary:
      "医師・セラピスト向けの医療サービスに対し、患者と医療従事者それぞれの導線を整理し、専門領域の発見、問い合わせ、予約までの体験を設計。ブランド表現からUI、インタラクティブプロトタイプ、開発ハンドオフまで一貫して制作しました。",
    tags: ["UIデザイン", "プロトタイプ", "開発ハンドオフ", "Figma"],
  },
];

export default function JapanesePortfolio() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Satoko Gruson | Digital Product Manager";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f3ee] text-[#272321] selection:bg-[#d9a4a8]/40">
      <header className="sticky top-0 z-20 border-b border-[#272321]/10 bg-[#f7f3ee]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a href={`${baseUrl}`} className="flex items-center gap-3" data-testid="link-japanese-home">
            <img
              src={`${baseUrl}images/sg-logo.png`}
              alt="Satoko Gruson"
              className="h-9 w-9 object-contain"
            />
            <span className="hidden text-sm font-medium tracking-wide sm:block">Satoko Gruson</span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href={`${baseUrl}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#272321]/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-[#272321] hover:text-[#f7f3ee]"
              data-testid="link-english-portfolio"
            >
              <Globe2 size={15} />
              English site
            </a>
            <a
              href="mailto:fsjm1210@gmail.com"
              className="hidden items-center gap-2 rounded-full bg-[#272321] px-4 py-2 text-sm font-medium text-[#f7f3ee] transition-transform hover:-translate-y-0.5 sm:inline-flex"
              data-testid="link-japanese-contact"
            >
              <Mail size={15} />
              お問い合わせ
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-[#272321]/10">
          <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#e5b7bb]/45 blur-3xl" />
          <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[#d7c7a7]/40 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#8e565b]">
              Portfolio introduction · 日本語版
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.08] tracking-tight md:text-7xl">
              Digital Product Manager
              <br />
              <span className="text-[#8e565b]">/ Web UX・コンテンツスペシャリスト</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#272321]/75 md:text-xl">
              日本市場向けのUX、コンテンツ設計、ローカライゼーション、データ分析を通じて、グローバルブランドのデジタル体験を改善。
            </p>

            <div
              className="mt-10 max-w-3xl rounded-2xl border border-[#8e565b]/25 bg-white/55 p-6 shadow-sm"
              data-testid="text-japanese-figma-experience"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-[#8e565b] p-2.5 text-white">
                  <Figma size={20} />
                </div>
                <div>
                  <p className="font-semibold">Figmaを用いたプロダクトデザイン</p>
                  <p className="mt-2 leading-relaxed text-[#272321]/75">
                    Figmaを用いた情報設計、ユーザーフロー、ワイヤーフレーム、UIデザイン、プロトタイプ制作、開発ハンドオフの経験があります。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
              <a
                href="#case-studies-ja"
                className="inline-flex items-center gap-2 rounded-full bg-[#272321] px-6 py-3 font-medium text-white transition-transform hover:-translate-y-0.5"
                data-testid="link-japanese-case-studies"
              >
                ケーススタディを見る
                <ArrowUpRight size={16} />
              </a>
              <span className="text-[#272321]/50">Satoko Gruson · Tokyo / Japan</span>
            </div>
          </div>
        </section>

        <section id="case-studies-ja" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#8e565b]">Selected work</p>
            <h2 className="font-serif text-4xl md:text-5xl">主なケーススタディ</h2>
            <p className="mt-5 leading-relaxed text-[#272321]/65">
              グローバルブランドとデジタルプロダクトに関わる、Web PM・UX・コンテンツ設計の実績です。
            </p>
          </div>

          <div className="space-y-5">
            {caseStudies.map((study) => (
              <article
                key={study.number}
                className="grid gap-6 rounded-2xl border border-[#272321]/10 bg-white/55 p-6 shadow-sm md:grid-cols-[110px_1fr] md:p-8"
                data-testid={`card-japanese-case-study-${study.number}`}
              >
                <div className="font-mono text-4xl text-[#8e565b]/55">{study.number}</div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8e565b]">{study.eyebrow}</p>
                  <h3 className="mt-3 font-serif text-3xl">{study.title}</h3>
                  <p className="mt-4 max-w-3xl leading-relaxed text-[#272321]/72">{study.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-[#272321]/12 px-3 py-1 text-xs text-[#272321]/65">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#272321]/10 bg-[#272321] text-[#f7f3ee]">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10">
            <div>
              <p className="text-sm text-[#f7f3ee]/55">詳細な英語版ポートフォリオ</p>
              <h2 className="mt-2 font-serif text-3xl">プロセスと成果物を詳しく見る</h2>
            </div>
            <a
              href={`${baseUrl}`}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f7f3ee] px-6 py-3 text-sm font-semibold text-[#272321] transition-transform hover:-translate-y-0.5"
              data-testid="link-japanese-english-portfolio"
            >
              English portfolioへ
              <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-[#272321]/55 md:flex-row md:items-center md:justify-between md:px-10">
        <span>© {new Date().getFullYear()} Satoko Gruson</span>
        <a href={`${baseUrl}`} className="inline-flex items-center gap-2 hover:text-[#8e565b]" data-testid="link-japanese-footer-home">
          <MoveLeft size={15} />
          英語版ポートフォリオに戻る
        </a>
      </footer>
    </div>
  );
}