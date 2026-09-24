import { motion } from "framer-motion";
import { Briefcase, BarChart2, Globe, Users, ArrowUpRight, TrendingUp, MousePointerClick, Star } from "lucide-react";

const fireflyProcess = [
  { step: "01", label: "ディスカバリー＆ギャップ分析", detail: "Fireflyグローバルページの日本市場におけるパフォーマンスを分析。日本特有のクリエイターやワークフローを反映していない画像やユースケースが、エンゲージメント低下の原因であることを特定。" },
  { step: "02", label: "オーディエンスの定義", detail: "主要ペルソナを「オリジナルコンテンツを制作し、ビジュアルの真正性に敏感な日本の若いSNSクリエイター（Instagram、TikTok、X）」と定義。このペルソナがすべてのコンテンツおよびクリエイティブの意思決定の基盤となった。" },
  { step: "03", label: "ユースケースのマッピング", detail: "日本マーケティングチームと連携し、SNS動画制作、商品画像生成、BGM＆効果音、絵コンテ作成といった最も関連性の高いクリエイティブシナリオを特定し、ページのセクション構造へ落とし込んだ。" },
  { step: "04", label: "クリエイティブディレクション", detail: "クリエイティブエージェンシーに対し、詳細なカルチャライゼーションのガイドラインを作成。単なるストック画像の差し替えではなく、シナリオ、タレントの方向性、トーン＆マナー、ビジュアルコンテキストを定義。" },
  { step: "05", label: "コピーライティング・ローカライゼーション", detail: "グローバルなマーケティング用語の直訳ではなく、若いSNSクリエイターのトーンに合わせた、カジュアルで直感的な日本語コピーを作成。" },
  { step: "06", label: "構築・QA・ローンチ", detail: "グローバルCMSチームと連携しページ構築を進行。デバイスやブレイクポイントごとのQAを実施し、日本およびグローバルチーム双方のステークホルダーからの承認を取りまとめ、ローンチを管理。" },
  { step: "07", label: "効果測定", detail: "ローンチ後、Adobe AnalyticsおよびContentsquareを使用してエンゲージメントとアプリへの遷移クリックをモニタリングし、日本およびグローバルチームに結果を報告。" },
];

const fireflyPageSections = [
  { label: "Hero + CTA", detail: "SNSクリエイター向けメインメッセージ。日本語のヘッドラインと「今すぐ作成（Fireflyアプリへ直行）」「プランを比較（ページ下部のプラン比較へのアンカーリンク）」の2つのCTAを配置。" },
  { label: "SNS動画制作", detail: "ファッション系ユースケース：生成AIを使って服の色や柄を置き換え、静止画から動画を生成し、高品質なSNSコンテンツを再撮影なしで作成。Instagram、TikTok、Xに投稿するクリエイターがターゲット。" },
  { label: "商品画像 + 絵コンテ", detail: "リアルタイムでビジュアルのバリエーションを生成・比較できるFirefly Boardを紹介。絵コンテ機能をブレインストーミングツールとして位置づけ、投稿のシーケンスや動画フローの計画をサポート。" },
  { label: "BGM & 効果音", detail: "シーンに合わせたBGM生成、雰囲気作りのための効果音追加、音声と動画の組み合わせなど、Fireflyの音声生成機能を紹介し、クリエイターが1つのツールでSNSコンテンツを完結できることを提示。" },
  { label: "プラン比較", detail: "ページ下部にアンカーリンクで繋いだプランセクション。Fireflyの無料、Standard、Proプランを並べて表示し、ユーザーがユースケースページを離れることなくプランを比較・選択できるように設計。" },
];

const fireflyOutcomes = [
  { icon: TrendingUp, label: "エンゲージメント", detail: "グローバルテンプレートの旧ページと比較し、カルチャライズされたユースケースコンテンツとのインタラクション時間が大幅に増加。" },
  { icon: MousePointerClick, label: "アプリ遷移クリック", detail: "ローンチ後、Fireflyアプリへの遷移クリック率が上昇し、日本の訪問者の意向が高まったことを実証。" },
  { icon: Star, label: "ステークホルダーからの評価", detail: "AdobeのWebエコシステム内での市場特化型カルチャライゼーションのモデルケースとして、日本およびグローバルチームから高い評価を獲得。" },
];

const genAiProject = {
  title: "生成AIクレジットの理解度向上 — A/Bテスト",
  description: "アナリティクスデータから、日本のユーザーが高い割合でCreative CloudプランページのFAQセクションまでスクロールしていることが判明。これは、ユーザーがプラン選択の決断を保留し、疑問の答えを探しているシグナルでした。ユーザーリサーチにより、根本的な原因は「生成AIクレジットとは何か」「どのように付与されるのか」「プラン間でどう違うのか」という理解不足にあることを特定。この課題に対処するため、StandardクレジットとPremiumクレジットを明確に分けた生成AI比較テーブルを追加するA/Bテストを提案・主導し、重要なプラン選択時の理解度を向上させ、コンバージョン増加を促進しました。",
  contributions: [
    "行動データからの課題特定：プラン選択時の高いFAQスクロール率から、ユーザーの混乱を検知",
    "ユーザーリサーチによる検証：日本のユーザーが生成AIクレジットの概念や、Standard・Premiumクレジットの違いを理解していないことを確認",
    "生成AI比較テーブルを追加し、クレジットの種類（StandardとPremium）別に機能カードを分けたA/Bテストを設計・提案",
    "日本のローカライゼーション制約の中で、CMSおよびグローバル開発チームと連携して実装を進行",
    "テストのパフォーマンスを追跡し、日本およびグローバルチームのステークホルダーに結果を報告",
  ],
  result: "A/Bテストの目的は、プラン選択という重要な意思決定ポイントにおいて、生成AIクレジットの違いへの理解度を向上させることでした。これにより、FAQへの依存度を減らし、プランコンバージョンの向上に貢献しました。",
};

const adobeContext = [
  { icon: Globe, label: "ローカライゼーションのギャップ", detail: "Creative Cloud、Creative Cloud Pro、Fireflyのグローバルページテンプレートは欧米ユーザー向けに最適化されており、日本ではパフォーマンスが低下していました。日本のユーザーが製品に共感し、その価値を理解できるよう、ターゲットを絞ったカルチャライゼーションとローカライズされた改善が必要でした。" },
  { icon: BarChart2, label: "生成AIクレジットの理解とプランの差別化", detail: "行動データから、生成AIクレジットやCreative Cloud Proの差別化に関するユーザーの混乱が明らかになり、主要な導線でのコンバージョンを抑制していました。これに対処するため、クレジット理解度に関するA/Bテストと、日本のクリエイター向けにカルチャライズされたFireflyユースケースページの2つのイニシアチブを実施しました。" },
  { icon: Users, label: "クロスファンクショナルな複雑さ", detail: "FireflyページのカルチャライゼーションからCreative Cloud ProのA/Bテストまで、すべての改善において、複数のタイムゾーンにまたがる開発、CMS、デザイン、アナリティクス、およびペイドメディアチームとの連携が必要でした。" },
];

const adobeProcess = [
  { step: "01", label: "分析", detail: "Adobe Analytics + Contentsquareを活用し、フリクションとユーザーの混乱を特定" },
  { step: "02", label: "特定", detail: "プラン選択時の離脱の原因となっている具体的なセクションを特定" },
  { step: "03", label: "提案", detail: "グローバルテンプレートとブランド制約内で解決策を策定" },
  { step: "04", label: "協業", detail: "日本のマーケティングチームおよびベンダーと連携し、ローカライズされたコンテンツを制作" },
  { step: "05", label: "提供", detail: "CMS実装、QA、リリース、およびパフォーマンス追跡を調整" },
];

const crossFunctional = [
  { label: "要件定義", detail: "日本のマーケティングおよび製品ローンチの目標を、明確なWeb実行要件へ変換" },
  { label: "ローカライゼーション", detail: "言語、トーン、文化的ニュアンス、法務要件を踏まえ、グローバルコンテンツを日本市場に最適化" },
  { label: "QA & リリース", detail: "品質保証、リリーススケジュール、公開後のパフォーマンス測定を調整" },
  { label: "データ分析", detail: "Adobe AnalyticsとContentsquareでKPIを追跡し、日本およびグローバルの関係者へ報告" },
  { label: "ステークホルダー管理", detail: "米国本社、日本のマーケティングチーム、制作会社との信頼関係を構築・維持" },
];

const localHappinezDesignDecisions = [
  { label: "認証フロー", detail: "サインアップおよびログイン画面において、多国籍プラットフォームとしての検証要件を満たしつつ、シンプルでフリクションの少ないUXを設計。" },
  { label: "登録フロー", detail: "地域の取り組みリーダーがプロジェクトを登録できるマルチステップフォームのUXを構築。段階的開示（Progressive Disclosure）を用いることで、必要な情報量が多くても取り組みやすいプロセスを実現。" },
  { label: "設定エリア", detail: "プロフィール管理、通知設定、アカウント制御をカバーする構造化された設定ダッシュボードを設計。プラットフォーム全体の一貫したビジュアル言語を適用。" },
  { label: "アクセシブルでインクルーシブなデザイン", detail: "プラットフォームのインクルーシブなミッションを反映し、アクセシビリティのベストプラクティスに基づいて、色の選択、コントラスト比、コンポーネントのサイズを定義。" },
];

const medicusDesignDecisions = [
  { label: "ビジュアルアイデンティティ", detail: "臨床的な信頼性、プレミアムなポジショニング、そして温かみを伝えるため、深いフォレストグリーンとゴールドのアクセントを採用。" },
  { label: "ナビゲーション構造", detail: "患者と医療従事者のカスタマージャーニーをトップレベルのナビゲーションで分離。両者のコンバージョン目標を満たしつつ、オーディエンスの混乱を防止。" },
  { label: "医療従事者向け問い合わせUX", detail: "フリクションを軽減するため、5ステップの視覚的なオンボーディングフロー（問い合わせ → コンサルテーション → アポイントメント → ツアー → 契約）を設計。" },
  { label: "専門領域の検索", detail: "ユーザーテストで特定されたフリクションを解消するため、フィルター可能な専門領域カードと、固定の地域ベースセレクターを導入。" },
];

export function ExperienceJa() {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-primary font-medium mb-4 uppercase tracking-wider text-sm"
          >
            <span className="w-8 h-[1px] bg-primary" />
            プロフェッショナル経験
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-6"
          >
            ケーススタディ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            A/Bテスト、CRO戦略、デジタルデリバリーにおけるエンドツーエンドの経験と測定可能な成果。
          </motion.p>
        </div>

        {/* ── Case Study 01: AI Intake Navigator ─────────────────────── */}
        {false && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="rounded-2xl border border-border bg-card overflow-hidden">

            <div className="bg-foreground text-background px-8 py-5 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-background/50 uppercase tracking-widest">ケーススタディ 01 / 04</span>
              <span className="text-sm text-background/70">探索的 · ポートフォリオケーススタディ · 2026年</span>
            </div>

            <div className="p-8 md:p-12">

              {/* Title + meta */}
              <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-2">Salesforceコンプライアンス向けAIアシスタント</h3>
                  <p className="text-lg text-muted-foreground">複雑なコンプライアンス受付システムのナビゲーション支援</p>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
                  {[
                    ["役割", "UXデザイナー & プロダクトシンカー"],
                    ["タイプ", "探索的 / ポートフォリオ"],
                    ["ドメイン", "エンタープライズコンプライアンス受付"],
                    ["プラットフォーム", "Salesforce + AIナビゲーターレイヤー"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">{label}</span>
                      <span className="text-foreground/90 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overview */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />プロジェクト概要
                </h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  グローバルコンサルティングファームのコンプライアンス受付システムは、長年の規制変更に伴い、UIが再設計されることなくフィールドやロジックが継ぎ足されてきました。既存のSalesforceシステムそのものには手を加えることができないという制約の中、既存UIの横に配置される「AIナビゲーターレイヤー」を提案しました。AIがアップロードされた契約書を読み込み、ユーザーが入力フィールドを開く前にすべての複雑な処理を代行します。AIが認知的負荷を吸収し、ユーザーは「構築」するのではなく「確認」するだけで済む体験を設計しました。
                </p>
              </div>

              {/* Challenge */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />課題
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      label: "システム変更不可",
                      detail: "Salesforceの受付システムには長年の規制要件が組み込まれており、構造的な変更は許可されていません。AIレイヤーは既存システムの上に完全に独立して機能する必要がありました。",
                    },
                    {
                      label: "低頻度かつ高リスクなユーザー行動",
                      detail: "ほとんどのユーザーにとって受付フローを利用する機会は稀であり、操作に慣れることができません。しかし、コンプライアンスチェックの漏れは法的・規制上の重大な結果を招きます。",
                    },
                    {
                      label: "ユーザーには見えない条件分岐",
                      detail: "サービスの種類、クライアントのステータス、契約規模によってアクティブになる入力フィールドが変化しますが、ユーザーがそのロジックを記憶していることは期待できません。",
                    },
                    {
                      label: "リカバリーコストの高いエラー",
                      detail: "誤った申請は単なるフォーム入力エラーではなく、独立性チェックの漏れ、SEC開示の未審査、またはパートナーの承認が必要なサービスカテゴリーの誤分類といった重大な問題につながります。",
                    },
                  ].map(({ label, detail }) => (
                    <div key={label} className="rounded-xl bg-secondary/40 border border-border p-5">
                      <p className="font-semibold text-foreground text-sm mb-1.5">{label}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Three phases + design principles side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

                {/* Phases */}
                <div className="flex flex-col">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-muted-foreground" />3段階の確認ゲート
                  </h4>
                  <div className="flex flex-col flex-1 gap-3">
                    {[
                      { phase: "Phase 1", title: "事前チェック", detail: "AIがロード時に納品日を読み取ります。3日未満の場合はハードブロック、3〜7日の場合は警告を表示します。" },
                      { phase: "Phase 2", title: "ドキュメント検証", detail: "名称の不一致、期限切れの契約、ドラフト版のファイル名、原本なしの修正など、6つのエッジケースをチェックします。" },
                      { phase: "Phase 3", title: "サービス分類", detail: "AIが契約内容を親サービスおよびサブサービスにマッピング。確信度に応じて段階的に情報を開示し、精度よりもリコールを優先します。" },
                    ].map(({ phase, title, detail }) => (
                      <div key={phase} className="flex gap-3 p-4 rounded-lg border border-border flex-1">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wide shrink-0 h-fit">{phase}</span>
                        <div>
                          <p className="font-semibold text-foreground text-sm mb-0.5">{title}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design Principles */}
                <div className="flex flex-col">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-muted-foreground" />デザイン原則
                  </h4>
                  <div className="flex flex-col flex-1 gap-3">
                    {[
                      { num: "1", title: "構築から確認へ", detail: "ゼロから入力させるのではなく、AIの提案を検証するプロセスへ移行。" },
                      { num: "2", title: "意味のあるアラート", detail: "すべてのアラートに重要度、理由、および次のアクションを明記。" },
                      { num: "3", title: "システムによる記憶", detail: "途中で離脱しても、どこでなぜ止まったのかをシステムが記憶・表示。" },
                      { num: "4", title: "思考と記録の分離", detail: "AIが推論を行い、Salesforceが記録する。両者の役割を明確に分離。" },
                    ].map(({ num, title, detail }) => (
                      <div key={num} className="flex gap-3 p-4 rounded-lg border border-border flex-1">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-mono text-xs font-semibold flex items-center justify-center shrink-0">{num}</span>
                        <div>
                          <p className="font-semibold text-foreground text-sm mb-0.5">{title}</p>
                          <p className="text-xs text-muted-foreground">{detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Alert hierarchy — compact */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />アラート階層
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { level: "ハードブロック", colour: "bg-red-100 text-red-700 border-red-200", dot: "bg-red-500", trigger: "名称不一致 · 契約切れ · &lt;3日" },
                    { level: "ソフトブロック", colour: "bg-amber-50 text-amber-700 border-amber-200", dot: "bg-amber-500", trigger: "ドラフト版ドキュメント · 原本なしの修正" },
                    { level: "警告", colour: "bg-yellow-50 text-yellow-700 border-yellow-200", dot: "bg-yellow-400", trigger: "古いドキュメント · ファイル名のフラグ · 3–7日" },
                    { level: "情報", colour: "bg-blue-50 text-blue-700 border-blue-200", dot: "bg-blue-400", trigger: "確信度の低い提案" },
                  ].map(({ level, colour, dot, trigger }) => (
                    <div key={level} className={`rounded-lg border p-4 ${colour}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`w-2 h-2 rounded-full ${dot} shrink-0`} />
                        <span className="font-semibold text-xs uppercase tracking-wide">{level}</span>
                      </div>
                      <p className="text-xs leading-relaxed opacity-80" dangerouslySetInnerHTML={{ __html: trigger }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Reflection + Figma link */}
              <div className="rounded-xl bg-secondary/30 border-l-4 border-primary p-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-foreground/80 leading-relaxed text-sm max-w-2xl">
                  コンプライアンスにおけるUXデザインは、単なる効率性だけでなく「エラーの予防」を設計する必要があります。問うべきは「いかに早く完了させるか」ではなく、「送信されるデータがいかに正確であると確信できるか」です。
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors shrink-0"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Figmaでワイヤーフレームを見る
                </a>
              </div>

            </div>
          </div>
        </motion.div>
        )}

        {/* ── Case Study 01: Adobe Japan ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="rounded-2xl border border-border bg-card overflow-hidden">

            {/* Top bar */}
            <div className="bg-foreground text-background px-8 py-5 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-background/50 uppercase tracking-widest">ケーススタディ 01 / 03</span>
              <a href="https://www.adobe.com/jp/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-background/70 hover:text-background transition-colors">
                adobe.com/jp <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="p-8 md:p-12">

              {/* Title + meta */}
              <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-2">Adobe Japan</h3>
                  <p className="text-lg text-muted-foreground">Web体験改善 & A/Bテスト · カルチャライゼーション</p>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
                  {[
                    ["役割", "Webプロダクトマネージャー (業務委託)"],
                    ["期間", "2025年1月 – 2026年5月"],
                    ["範囲", "Homepage · Catalogue · Plans page · Firefly page · Creative Cloud Pro · Campaign pages"],
                    ["ツール", "Adobe Analytics · Contentsquare · Figma · CMS · A/B testing"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">{label}</span>
                      <span className="text-foreground/90 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business context */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />ビジネスコンテキストと課題
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                  Adobe JapanのWebサイトは、日本におけるCreative CloudおよびCreative Cloud Proサブスクリプションの主要なコンバージョンチャネルです。日本市場は、欧米のオーディエンスと比較して独自のユーザー行動、読解パターン、購買決定プロセスを持っています。私の担当範囲は、プランページ、Firefly、カタログ、ホームページ、キャンペーンページなどのトラフィックの多い獲得ページに及びました。データ分析を通じたUXフリクションの特定から、実験とカルチャライズされたページ体験の設計、グローバルデリバリーの調整、そしてビジネスインパクトの報告まで、エンドツーエンドのWebオーナーシップを担いました。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {adobeContext.map(({ icon: Icon, label, detail }) => (
                    <div key={label} className="rounded-xl bg-secondary/50 p-5 border border-border">
                      <Icon size={18} className="text-primary mb-3" />
                      <h5 className="font-medium text-foreground mb-2 text-sm">{label}</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Project A: GenAI A/B Test ── */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />プロジェクト A
                </h4>
                <div className="rounded-xl border border-border p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide bg-primary/10 text-primary">
                      A/B Test · CRO
                    </span>
                    <h5 className="text-lg font-semibold text-foreground">{genAiProject.title}</h5>
                  </div>

                  {/* 5-step process */}
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-mono">プロセス</p>
                    <div className="relative">
                      <div className="hidden md:block absolute top-6 left-6 right-6 h-[1px] bg-border" />
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">
                        {adobeProcess.map(({ step, label, detail }) => (
                          <div key={step} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center text-primary font-mono text-sm font-semibold mb-3 relative z-10 shrink-0">
                              {step}
                            </div>
                            <p className="font-semibold text-foreground text-xs mb-1">{label}</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-5 text-sm">{genAiProject.description}</p>
                  <ul className="space-y-2 mb-5">
                    {genAiProject.contributions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* GenAI screenshot — CC plans page */}
                  <div className="rounded-xl overflow-hidden border border-border mb-5">
                    <div className="bg-secondary/40 px-4 py-2 border-b border-border flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-border" />
                      <span className="w-2.5 h-2.5 rounded-full bg-border" />
                      <span className="w-2.5 h-2.5 rounded-full bg-border" />
                      <span className="text-xs text-muted-foreground ml-2 font-mono">adobe.com/jp/creativecloud — Plans page (GenAI comparison)</span>
                    </div>
                    <img
                      src={`${import.meta.env.BASE_URL}images/firefly/cc-plans-genai.png`}
                      alt="Adobe Creative Cloud plans page Japan — GenAI credit comparison section"
                      className="w-full h-auto block"
                    />
                  </div>

                  <div className="rounded-lg bg-primary/8 border border-primary/20 px-5 py-3 text-sm text-foreground/80">
                    <span className="font-semibold text-primary mr-2">成果</span>
                    {genAiProject.result}
                    <span className="ml-2 text-xs text-muted-foreground italic">守秘義務に基づき、具体的な指標は省略しています。</span>
                  </div>
                </div>
              </div>

              {/* ── Project B: Firefly Use Case Page ── */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />プロジェクト B
                </h4>
                <div className="rounded-xl border border-border p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide bg-secondary text-foreground/70">
                      カルチャライゼーション · UXコンテンツ戦略
                    </span>
                    <h5 className="text-lg font-semibold text-foreground">Firefly Japan — ユースケースページ</h5>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 font-mono uppercase tracking-widest">Web PM · Adobe Analytics · Contentsquare</p>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    このページは他のどの市場にも存在しません。グローバルのFirefly Webサイトで確認されたエンゲージメントのギャップに対する直接的な解決策として、日本市場専用に構築されました。
                  </p>

                  {/* Problem + Goal */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="rounded-lg bg-secondary/40 border border-border p-5">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">課題</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        Adobe FireflyのグローバルWebサイトは欧米のビジュアル基準（モデル、美学、ライフスタイル画像）で構築されており、日本のユーザーにとっては親近感が湧きにくいものでした。「創造性を刺激する」ことがコアバリューである製品において、文化的共感の欠如はエンゲージメントへの大きな障壁となります。SNSネイティブな日本の若いクリエイターにとって、自分ごととして捉えられないページになっていました。
                      </p>
                    </div>
                    <div className="rounded-lg bg-primary/5 border border-primary/20 p-5">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">目標</p>
                      <ul className="space-y-1.5">
                        {[
                          "日本の若いSNSクリエイター（Instagram、TikTok、X）に直接語りかける",
                          "彼らのクリエイティブワークフローに関連するユースケースを提示する",
                          "翻訳ではなく、ネイティブに感じられるカルチャライズされた画像を使用する",
                          "ページのエンゲージメントとアプリへの遷移クリックを促進する",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Key insight */}
                  <div className="rounded-lg border-l-4 border-primary bg-primary/5 px-5 py-4 mb-6">
                    <p className="text-xs font-mono uppercase tracking-widest text-primary mb-1">主要なインサイト</p>
                    <p className="text-sm text-foreground/80 italic leading-relaxed">
                      ローカライゼーションは単なる翻訳ではありません。Fireflyが日本のクリエイターに響くためには、ユーザーが「自分と同じような人々が、自分に馴染みのあるコンテンツを、日常のコンテキストで作成している姿」を直接見る必要がありました。
                    </p>
                  </div>

                  {/* 7-step process */}
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-mono">プロセス — 7つのステップ</p>
                    <div className="space-y-3">
                      {fireflyProcess.map(({ step, label, detail }) => (
                        <div key={step} className="flex gap-4 p-4 rounded-lg border border-border bg-secondary/20">
                          <span className="text-primary font-mono text-sm font-semibold w-8 shrink-0">{step}</span>
                          <div>
                            <span className="font-semibold text-foreground text-sm">{label} — </span>
                            <span className="text-sm text-foreground/70 leading-relaxed">{detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Page structure */}
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-mono">最終的なページ構造</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {fireflyPageSections.map(({ label, detail }, i) => (
                        <div key={label} className="rounded-lg border border-border p-4 bg-background">
                          <span className="text-xs font-mono text-primary/60 block mb-1">セクション {String(i + 1).padStart(2, "0")}</span>
                          <span className="font-semibold text-foreground text-sm block mb-1">{label}</span>
                          <span className="text-xs text-muted-foreground leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="rounded-xl overflow-hidden border border-border mb-6">
                    <div className="bg-secondary/40 px-4 py-2 border-b border-border flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-border" />
                      <span className="w-2.5 h-2.5 rounded-full bg-border" />
                      <span className="w-2.5 h-2.5 rounded-full bg-border" />
                      <span className="text-xs text-muted-foreground ml-2 font-mono">adobe.com/jp/creativecloud/roc/products/firefly/genai-usecase.html</span>
                    </div>
                    <div className="overflow-y-auto" style={{ maxHeight: "520px" }}>
                      <img
                        src={`${import.meta.env.BASE_URL}images/firefly/use-case-page.png`}
                        alt="Firefly Japan use case page — culturalised full-page view"
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-5">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-mono">成果</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {fireflyOutcomes.map(({ icon: Icon, label, detail }) => (
                        <div key={label} className="rounded-xl bg-secondary/40 border border-border p-5">
                          <Icon size={18} className="text-primary mb-3" />
                          <h5 className="font-semibold text-foreground text-sm mb-2">{label}</h5>
                          <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground italic mt-3">守秘義務に基づき、具体的な指標は省略しています。</p>
                  </div>

                  {/* Key takeaway */}
                  <div className="rounded-xl bg-secondary/30 border-l-4 border-primary p-5">
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">得られた知見</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      効果的なカルチャライゼーションには、ユーザーが「誰であり」「何を創り出したいのか」「自分自身をどう見ているのか」を理解し、そのアイデンティティを反映した体験を構築する必要があります。このプロジェクトは、ターゲット起点のコンテンツ戦略と意図的なクリエイティブディレクションを組み合わせることで、グローバル製品とローカルユーザー間のギャップを意味のある形で埋められることを実証しました。
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Project C: Firefly Feature Pages Culturalisation ── */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />プロジェクト C
                </h4>
                <div className="rounded-xl border border-border p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide bg-secondary text-foreground/70">
                      カルチャライゼーション · 機能ページ
                    </span>
                    <h5 className="text-lg font-semibold text-foreground">Firefly Japan — 機能ページのカルチャライゼーション</h5>
                  </div>
                  <p className="text-xs text-muted-foreground mb-6 font-mono uppercase tracking-widest">Web PM · CMS · Creative Agency</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="rounded-lg bg-secondary/40 border border-border p-5">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">課題</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        Fireflyのテキストから画像生成およびAI動画生成の機能ページは、グローバルテンプレートから直接適用されていました。ヒーロー画像、プロンプトの例、生成された出力結果のすべてが欧米の美学やシナリオを反映しており、日本のクリエイターには関連性の薄いものでした。
                      </p>
                    </div>
                    <div className="rounded-lg bg-primary/5 border border-primary/20 p-5">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">私の貢献</p>
                      <ul className="space-y-1.5">
                        {[
                          "ヒーロー画像のギャラリーを、アニメ調のイラスト、日本の都市風景、桜など、日本に関連するコンテンツに置き換え",
                          "コンテンツベンダーと協力して、日本語のプロンプト例と、それに紐づくローカライズされた生成出力を制作",
                          "関連する機能カードセクションを拡張および最適化し、カルチャライズされた画像を用いてFirefly機能間の相互リンクを改善",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Screenshots — 2-up */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    {[
                      { src: `${import.meta.env.BASE_URL}images/firefly/text-to-image.png`, label: "Text-to-Image ページ", url: "adobe.com/jp/products/firefly/features/text-to-image" },
                      { src: `${import.meta.env.BASE_URL}images/firefly/ai-video.png`, label: "AI Video Generator ページ", url: "adobe.com/jp/products/firefly/features/ai-video-generator" },
                    ].map(({ src, label, url }) => (
                      <div key={label} className="rounded-xl overflow-hidden border border-border">
                        <div className="bg-secondary/40 px-3 py-2 border-b border-border flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-border" />
                          <span className="w-2 h-2 rounded-full bg-border" />
                          <span className="w-2 h-2 rounded-full bg-border" />
                          <span className="text-[10px] text-muted-foreground ml-1 font-mono truncate">{url}</span>
                        </div>
                        <div className="overflow-y-auto" style={{ maxHeight: "400px" }}>
                          <img src={src} alt={label} className="w-full h-auto block" />
                        </div>
                        <div className="px-3 py-2 bg-secondary/20 border-t border-border">
                          <span className="text-xs text-foreground/70">{label}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg bg-primary/8 border border-primary/20 px-5 py-3 text-sm text-foreground/80">
                    <span className="font-semibold text-primary mr-2">成果</span>
                    カルチャライゼーションの実施後、Firefly Japanの機能ページ全体で、生成エンゲージメントとアプリへの遷移クリックが増加しました。
                    <span className="ml-2 text-xs text-muted-foreground italic">守秘義務に基づき、具体的な指標は省略しています。</span>
                  </div>
                </div>
              </div>

              {/* ── Project D: Features & Prompt Suggestion Page ── */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />プロジェクト D
                </h4>
                <div className="rounded-xl border border-border p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide bg-secondary text-foreground/70">
                      カルチャライゼーション · コンテンツ戦略
                    </span>
                    <h5 className="text-lg font-semibold text-foreground">Firefly Japan — 機能＆プロンプト提案ページ</h5>
                  </div>
                  <p className="text-xs text-muted-foreground mb-6 font-mono uppercase tracking-widest">Web PM · CMS · Creative Agency</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="rounded-lg bg-secondary/40 border border-border p-5">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">課題</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        Fireflyの機能概要およびプロンプトインスピレーションページでは、日本のクリエイティブな感性を反映していないグローバルな画像とプロンプト例が使用されており、ローカルユーザーにとっての発見やインスピレーションツールとしての有用性が制限されていました。
                      </p>
                    </div>
                    <div className="rounded-lg bg-primary/5 border border-primary/20 p-5">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">私の貢献</p>
                      <ul className="space-y-1.5">
                        {[
                          "テキストから画像生成、動画、音声生成の各機能において、日本特有のプロンプト例をキュレーションおよびディレクション",
                          "機能カードの画像を、アニメ、日本の自然風景、Eコマース商品画像など、カルチャライズされた出力結果に置き換え",
                          "日本のSNSや商業クリエイターに関連するクリエイティブシナリオを反映するように、プロンプトのヒントセクションを構造化",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div className="rounded-xl overflow-hidden border border-border mb-5">
                    <div className="bg-secondary/40 px-4 py-2 border-b border-border flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-border" />
                      <span className="w-2.5 h-2.5 rounded-full bg-border" />
                      <span className="w-2.5 h-2.5 rounded-full bg-border" />
                      <span className="text-xs text-muted-foreground ml-2 font-mono">adobe.com/jp/products/firefly — Features & prompt suggestion page</span>
                    </div>
                    <div className="overflow-y-auto" style={{ maxHeight: "520px" }}>
                      <img
                        src={`${import.meta.env.BASE_URL}images/firefly/features-prompts.png`}
                        alt="Firefly Japan features and prompt suggestion page"
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>

                  <div className="rounded-lg bg-primary/8 border border-primary/20 px-5 py-3 text-sm text-foreground/80">
                    <span className="font-semibold text-primary mr-2">成果</span>
                    日本のユーザーにとっての機能の発見しやすさとプロンプトインスピレーションの関連性が向上し、Fireflyの生成ツールとのエンゲージメント増加をサポートしました。
                    <span className="ml-2 text-xs text-muted-foreground italic">守秘義務に基づき、具体的な指標は省略しています。</span>
                  </div>
                </div>
              </div>

              {/* Cross-functional delivery */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />クロスファンクショナルなデリバリー
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {crossFunctional.map(({ label, detail }) => (
                    <div key={label} className="flex gap-3 p-4 rounded-lg bg-secondary/40 border border-border">
                      <Briefcase size={15} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-foreground block mb-0.5">{label}</span>
                        <span className="text-xs text-muted-foreground leading-relaxed">{detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reflection */}
              <div className="rounded-xl bg-secondary/30 border-l-4 border-primary p-6 md:p-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />振り返りと学び
                </h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  この役割を通じて、UXの決定をビジネスの成果に直接結びつける能力が深まりました。最も価値のある変化は、すべてのWebの改善を単なるデザインの改善としてではなく、予想される収益インパクトを伴う「ビジネスケース」として捉えるようになったことです。これにより、ステークホルダーの信頼が構築され、承認サイクルが加速します。また、日本市場のニーズとグローバルプラットフォームの制約が交差する領域での業務は、構造化されたシステム内で実用的かつインパクトの高い解決策を見出すスキルを磨きました。
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ── Case Study 02: Local Happinez ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-border bg-card overflow-hidden">

            <div className="bg-foreground text-background px-8 py-5 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-background/50 uppercase tracking-widest">ケーススタディ 02 / 03</span>
              <span className="text-sm text-background/70">フリーランス</span>
            </div>

            <div className="p-8 md:p-12">

              {/* Title + meta */}
              <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-2">Local Happinez</h3>
                  <p className="text-lg text-muted-foreground">UIデザイン — 認証、登録、設定</p>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
                  {[
                    ["役割", "UIデザイナー (フリーランス)"],
                    ["タイプ", "非営利 · スチュワード所有"],
                    ["範囲", "認証フロー · 登録フロー · 設定エリア"],
                    ["ツール", "Figma"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">{label}</span>
                      <span className="text-foreground/90 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* About the org */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />組織について
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-5 text-sm">
                  Local Happinezはオランダのスチュワード所有の非営利団体であり、「2028年までに世界中の100万人を地域の持続可能な取り組みと結びつける」という大胆なミッションを掲げています。このプラットフォームにより、ネパール、スリランカ、フィリピン、南アメリカなど複数の国にまたがるコミュニティが、自然や社会を改善する草の根プロジェクトを発見、参加、登録できるようになります。組織の根幹は「世界によって所有される」ことにあり、すべての議決権株式は財団に寄付され、すべての経済的価値は地球と人々に還元されます。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "多国籍プラットフォーム", detail: "製品は多様な国やコンテキストにわたるユーザーやリーダーにサービスを提供するため、明確で普遍的に理解できるUIパターンが必要とされました。" },
                    { label: "コミュニティ・ファースト", detail: "包括的で草の根の精神に沿って、すべてのデザイン決定において「オープンさ」と「アクセシビリティ」を反映する必要がありました。" },
                    { label: "アーリーステージの製品", detail: "プラットフォームはゼロから構築されているため、この段階でのUI決定が長期的な製品体験を直接形作ります。" },
                  ].map(({ label, detail }) => (
                    <div key={label} className="rounded-xl bg-secondary/50 p-5 border border-border">
                      <h5 className="font-medium text-foreground mb-2 text-sm">{label}</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key design decisions */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />主要なデザイン領域
                </h4>
                <div className="space-y-3">
                  {localHappinezDesignDecisions.map(({ label, detail }) => (
                    <div key={label} className="flex gap-4 p-4 rounded-lg border border-border">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground text-sm">{label} — </span>
                        <span className="text-sm text-foreground/70">{detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Figma embed */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />Figma デザインファイル
                </h4>
                <div className="rounded-xl overflow-hidden border border-border bg-secondary/20">
                  <iframe
                    title="Local Happinez — Figma Design"
                    style={{ border: "none" }}
                    width="100%"
                    height="720"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FOkN70hkBXVf12RtmywLZ1s%2FLocal-Happinez%3Fnode-id%3D0-1%26t%3D2XIgZc26JBQGO76j-1"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Outcome */}
              <div className="rounded-xl bg-secondary/30 border-l-4 border-primary p-6 md:p-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />成果と振り返り
                </h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  100万人を地域の持続可能な行動と結びつけることを目指すプラットフォームにおいて、認証、登録、設定という3つのコアな製品領域のUIをデザインしました。アーリーステージの非営利団体と協業することは、すべてのデザインの決定が重みを持つことを意味しました。UIは、世界中のコミュニティメンバーにとって親しみやすく信頼できるものであると同時に、文化や言語を越えてスケールする柔軟性を備えている必要がありました。
                </p>
                <p className="text-foreground/80 leading-relaxed text-sm mt-3">
                  得られた知見：ミッション主導の製品をデザインするには、コミュニティのコンテキストを深く理解する必要があります。アクセシビリティと明瞭さは単なる追加要素ではなく、製品が目標を達成するための基盤そのものです。
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ── Case Study 03: Medicus Practice ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-border bg-card overflow-hidden">

            <div className="bg-foreground text-background px-8 py-5 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-background/50 uppercase tracking-widest">ケーススタディ 03 / 03</span>
              <span className="text-sm text-background/70">フリーランス · オーストリア</span>
            </div>

            <div className="p-8 md:p-12">

              {/* Title + meta */}
              <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-2">Medicus Practice</h3>
                  <p className="text-lg text-muted-foreground">エンドツーエンドのWebサイトデザイン — ゼロからの構築</p>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
                  {[
                    ["役割", "UI/UXデザイナー (フリーランス)"],
                    ["期間", "2023年 – 2024年"],
                    ["範囲", "フルランディングページシステム · Webショップ · HCP問い合わせフロー"],
                    ["ツール", "Figma · Adobe Illustrator · Adobe Photoshop"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">{label}</span>
                      <span className="text-foreground/90 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business challenge */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />ビジネス上の課題
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-5 text-sm">
                  Medicus Practiceは、独立した医師やセラピスト向けの最先端のプラクティスソリューションであり、柔軟でつながりのあるデジタルな「全く新しい働き方」を可能にします。製品ラインナップには、設備の整った診察室や治療室、プロフェッショナルなプラクティス管理ソリューション、オーストリア全土に広がるバーチャル診療のネットワークが含まれます。ランディングページのデザインはFigmaで作成され、ロゴの調整や画像の補正にはAdobe IllustratorとPhotoshopが使用されました。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "ブランドの差別化", detail: "ユーザーがプラットフォームを一般的な予約サイトと誤認していたため、プレミアムで革新的なサービスであることを明確に伝えるデザインが必要でした。" },
                    { label: "デュアルオーディエンス", detail: "患者と医療従事者（HCP）は根本的に異なるニーズを持っています。ナビゲーションは、混乱や妥協を生むことなく両方のニーズに応える必要がありました。" },
                    { label: "情報アーキテクチャ", detail: "複雑なサービス提供には、情報過多を防ぎ、発見を助けるための明確な構造が必要でした。" },
                  ].map(({ label, detail }) => (
                    <div key={label} className="rounded-xl bg-secondary/50 p-5 border border-border">
                      <h5 className="font-medium text-foreground mb-2 text-sm">{label}</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Process */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />デザインプロセス — エンドツーエンド
                </h4>
                <div className="relative">
                  <div className="hidden md:block absolute top-6 left-6 right-6 h-[1px] bg-border" />
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative">
                    {[
                      { step: "01", label: "ディスカバリー＆ブリーフ", detail: "クライアントとのワークショップを実施し、ビジネスモデル、ターゲット層、目標を理解" },
                      { step: "02", label: "情報アーキテクチャ", detail: "サイト全体の構造をマッピングし、混乱を防ぐために患者と医療従事者のカスタマージャーニーを分離" },
                      { step: "03", label: "ユーザージャーニーマッピング", detail: "患者と医療従事者それぞれの、サイト流入からコンバージョンに至るエンドツーエンドの体験を定義" },
                      { step: "04", label: "ワイヤーフレーム", detail: "全ページをカバーするLow/Mid-Fiワイヤーフレームを作成し、各段階でクライアントからのフィードバックを反映" },
                      { step: "05", label: "ビジュアルデザイン", detail: "Figmaでのハイファイデザイン。IllustratorやPhotoshopを用いたビジュアルアイデンティティの適用、コンポーネント作成、画像・ロゴの補正" },
                      { step: "06", label: "プロトタイプ＆ハンドオフ", detail: "ステークホルダーのレビューおよび開発者へのハンドオフ用に、インタラクティブなFigmaプロトタイプを納品" },
                    ].map(({ step, label, detail }) => (
                      <div key={step} className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center text-primary font-mono text-sm font-semibold mb-3 relative z-10 shrink-0">
                          {step}
                        </div>
                        <p className="font-semibold text-foreground text-xs mb-1">{label}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key design decisions */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />主要なデザイン決定
                </h4>
                <div className="space-y-3">
                  {medicusDesignDecisions.map(({ label, detail }) => (
                    <div key={label} className="flex gap-4 p-4 rounded-lg border border-border">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground text-sm">{label} — </span>
                        <span className="text-sm text-foreground/70">{detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Figma embed */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />Figma デザインファイル
                </h4>
                <div className="rounded-xl overflow-hidden border border-border bg-secondary/20">
                  <iframe
                    title="Medicus Practice — Figma Design"
                    style={{ border: "none" }}
                    width="100%"
                    height="720"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FVZ9cR3Dv89uOqssOf0oqm1%2FMedicus-Practice%3Fnode-id%3D0-1%26t%3DRenmTikGd7WRfJWL-1"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Outcome */}
              <div className="rounded-xl bg-secondary/30 border-l-4 border-primary p-6 md:p-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />成果と振り返り
                </h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  すべての段階でクライアントと緊密に連携しながら、ゼロから完全に構築されたWebサイトデザインを納品しました。完全版のFigmaファイルには、初期のディスカバリーや情報アーキテクチャから、ユーザージャーニーマッピング、ワイヤーフレーム、ハイファイなビジュアルデザイン、さらには開発者ハンドオフ用のインタラクティブなプロトタイプに至るまでのプロセスが記録されています。ホームページ、専門領域ディレクトリ、ロケーションページ、HCP問い合わせフロー、Webショップなど、システム内のすべてのページがエンドツーエンドで設計され、IllustratorやPhotoshopを用いたロゴの調整や画像の補正も含まれています。
                </p>
                <p className="text-foreground/80 leading-relaxed text-sm mt-3">
                  得られた知見：デュアルオーディエンス向けのデザインには、初日から規律ある情報アーキテクチャの決定が必要です。各デザインフェーズでクライアントと直接やり取りすることで、最終的なアウトプットが彼らのビジネス目標とユーザーの真のニーズの両方に一致することを保証できました。
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Call to action for full portfolio */}
        <div className="mt-24 text-center">
          <a 
            href="/satoko-gruson-portfolio.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            詳細なポートフォリオをダウンロード (PDF)
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}
