import { motion } from "framer-motion";

export function AboutJa() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      
      {/* Decorative element */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-medium mb-6 uppercase tracking-wider text-sm">
              <span className="w-8 h-[1px] bg-primary"></span>
              プロフィール
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight">
              デザインとテクノロジーで、<br className="hidden md:block"/>
              <span className="italic text-primary">文化をつなぐ。</span>
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-balance">
              <p>
                東京を拠点に、デジタルプロダクトマネージャー、UI/UXデザイナー、Web UX&amp;コンテンツスペシャリストとして複数の役割を担い、デジタルプロダクトを「作る」だけでなく「意図を持って形にする」ことを大切にしています。
              </p>
              <p>
                多文化的なバックグラウンドと、翻訳・ローカライゼーションマネジメントの修士号が、ユーザー体験に対する独自の視点を与えてくれます。単にインターフェースを作るのではなく、ビジネスゴールを世界に通用する直感的な体験へと「翻訳」し、ブランドがターゲットオーディエンスを無理なく広げられるよう支援しています。
              </p>
              <p>
                Figmaで洗練されたユーザーフローを設計するときも、行動データをもとにコンテンツ戦略や実験施策を組み立てるときも、プロダクトのライフサイクルをマネジメントするときも——私が一番力を発揮できるのは、創造性とロジックが交わる場所です。また、独学でフロントエンドのコーディングも学んでおり、簡単な動くプロトタイプを自分で作ったり、エンジニアと同じ目線で会話したりすることができます。
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-border/50 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-2xl text-foreground mb-2">3年以上</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">UX/プロダクト実務経験</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl text-foreground mb-2">10件以上</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">プロジェクト実績</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[2.5rem] overflow-hidden bg-[hsl(350_20%_93%)] border-8 border-background shadow-2xl relative z-10">
              <img
                src={`${import.meta.env.BASE_URL}images/profile-v2.png`}
                alt="Satoko Gruson"
                className="w-full h-full object-cover object-top"
                style={{ filter: "sepia(0.3) saturate(1.1) hue-rotate(318deg) brightness(1.02)" }}
              />
            </div>
            {/* Decorative background block */}
            <div className="absolute top-8 -right-8 w-full h-full bg-primary/10 rounded-[2.5rem] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
