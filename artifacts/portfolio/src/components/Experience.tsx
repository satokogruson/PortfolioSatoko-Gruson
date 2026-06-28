import { motion } from "framer-motion";
import { Briefcase, BarChart2, Globe, Users, ArrowUpRight, TrendingUp, MousePointerClick, Star } from "lucide-react";

const fireflyProcess = [
  { step: "01", label: "Discovery & Gap Analysis", detail: "Reviewed Firefly global page performance for Japan. Identified engagement gap driven by cultural disconnection — imagery and use cases that did not reflect Japanese creators or their workflows." },
  { step: "02", label: "Audience Definition", detail: "Defined primary persona: young Japanese SNS creators (Instagram, TikTok, X) who create original content and are highly sensitive to visual authenticity. This persona shaped every content and creative decision." },
  { step: "03", label: "Use Case Mapping", detail: "Collaborated with the Japan marketing team to identify the most relevant creative scenarios: SNS video creation, product image generation, BGM & sound effects, and storyboarding — structured into the page's section architecture." },
  { step: "04", label: "Creative Direction & Agency Briefing", detail: "Briefed a creative agency with detailed culturalisation guidelines. Defined scenarios, talent direction, aesthetics, and visual contexts that would feel authentically Japanese — not superficially swapped stock imagery." },
  { step: "05", label: "Copy Localisation", detail: "Worked with copywriters to ensure Japanese copy matched the tone of young SNS creators — casual, aspirational, and direct — rather than a literal translation of global marketing language." },
  { step: "06", label: "Build, QA & Launch", detail: "Coordinated page build with the global CMS team. Managed QA across devices and breakpoints. Oversaw launch and coordinated stakeholder sign-off from both Japan and global teams." },
  { step: "07", label: "Post-Launch Tracking", detail: "Monitored engagement and app referral clicks post-launch using Adobe Analytics and Contentsquare. Reported results to Japan and global stakeholders." },
];

const fireflyPageSections = [
  { label: "Hero + CTA", detail: "Main messaging targeting SNS creators — culturalised hero with Japanese-language headline and two CTAs: 'Create Now' (direct Firefly app entry) and 'Compare Plans' (anchor link scrolling users directly to the plans section below)" },
  { label: "SNS Video Creation", detail: "Fashion-themed use case: replace clothing colours and patterns using generative AI, generate video from still images, and create high-quality SNS content — all without a reshoot. Targeting creators posting to Instagram, TikTok, and X" },
  { label: "Product Imagery + Storyboard", detail: "Showcased Firefly Board for generating and comparing visual variations in real time. Storyboard feature highlighted as a brainstorming tool — helping creators plan post sequences and video flow before generating final assets" },
  { label: "BGM & Sound Effects", detail: "Demonstrated Firefly's audio generation capabilities: generate scene-matched BGM, add sound effects for atmosphere, and combine audio with video — enabling creators to fully produce SNS content within one tool" },
  { label: "Plans", detail: "Anchor-linked plans section at the bottom of the page — displaying Firefly Free, Standard, and Pro tiers side by side to allow users to compare and choose a plan without navigating away from the use case page" },
];

const fireflyOutcomes = [
  { icon: TrendingUp, label: "Engagement", detail: "Users spent significantly more time interacting with the culturalised use case content vs. the previous globally-templated page" },
  { icon: MousePointerClick, label: "App Referral Clicks", detail: "Click-through to Firefly app entry points increased post-launch, indicating stronger intent among Japanese visitors" },
  { icon: Star, label: "Stakeholder Recognition", detail: "Positively received by Japan and global teams as a model for market-specific culturalisation within Adobe's web ecosystem" },
];

const genAiProject = {
  title: "GenAI Credit Comprehension — A/B Test",
  description: "Analytics data showed a high volume of Japanese users scrolling down to the FAQ section of the Creative Cloud plans page — a signal that they were leaving the decision point to look for answers. User research confirmed the root cause: users did not understand what GenAI credits are, how they are allocated, or why they differ between plans. To address this, I proposed and led an A/B test introducing a dedicated GenAI comparison table — with feature cards clearly separated into Standard Credits and Premium Credits — to improve comprehension at the critical plan selection moment and drive increased conversions.",
  contributions: [
    "Identified the problem through behavioural data: high FAQ scroll rates signalled confusion at the point of plan selection",
    "Validated with user research: Japanese users lacked understanding of what GenAI credits are and how Standard vs Premium credits differ",
    "Designed and proposed an A/B test adding a GenAI comparison table with feature cards separated by credit type (Standard and Premium)",
    "Coordinated implementation with CMS and global development teams within Japan's localisation constraints",
    "Tracked test performance and reported results to Japan and global stakeholders",
  ],
  result: "The A/B test aimed to improve comprehension of GenAI credit differences at the key conversion decision point — with the goal of reducing FAQ dependency and contributing to an uplift in plan conversions.",
};

const adobeContext = [
  { icon: Globe, label: "Localisation Gap", detail: "Global page templates for Creative Cloud, Creative Cloud Pro, and Firefly were optimised for Western users and underperformed in Japan — requiring targeted culturalisation and localised improvements to ensure Japanese users could identify with the product and understand its value." },
  { icon: BarChart2, label: "GenAI Credit Comprehension & Plan Differentiation", detail: "Behavioural data revealed confusion around GenAI credits and Creative Cloud Pro differentiation, suppressing conversion at key entry points. Two initiatives addressed this: an A/B test on credit comprehension, and a Firefly use case page culturalised for Japanese creators." },
  { icon: Users, label: "Cross-functional Complexity", detail: "Every improvement — from Firefly page culturalisation to Creative Cloud Pro A/B tests — required coordination across dev, CMS, design, analytics, and paid media teams across multiple time zones." },
];

const adobeProcess = [
  { step: "01", label: "Analyse", detail: "Adobe Analytics + Contentsquare to identify friction & user confusion" },
  { step: "02", label: "Identify", detail: "Pinpoint specific sections causing drop-off at plan selection" },
  { step: "03", label: "Propose", detail: "Develop solution within global template & brand constraints" },
  { step: "04", label: "Collaborate", detail: "Work with JP marketing team + vendor to produce localised content" },
  { step: "05", label: "Deliver", detail: "Coordinate CMS implementation, QA, release & performance tracking" },
];

const crossFunctional = [
  { label: "Requirements", detail: "Translate Japan marketing and product launch goals into clear web execution briefs" },
  { label: "Localisation", detail: "Align global content with Japan market needs — language, tone, cultural nuance, legal compliance" },
  { label: "QA & Release", detail: "Coordinate quality assurance, release scheduling, and post-launch performance monitoring" },
  { label: "Analytics", detail: "Track KPIs using Adobe Analytics and Contentsquare; report insights to JP and global stakeholders" },
  { label: "Stakeholder Mgmt", detail: "Maintain trusted relationships with US HQ, Japan marketing team, and regional agency partners" },
];

const localHappinezDesignDecisions = [
  { label: "Authentication Flow", detail: "Designed sign-up and login screens with a clear, low-friction UX — balancing simplicity with the validation requirements of a multi-country platform." },
  { label: "Submission Flow", detail: "Built a multi-step form UX allowing local initiative leaders to register projects — progressive disclosure kept the process approachable despite the volume of required information." },
  { label: "Settings Area", detail: "Designed a structured settings dashboard covering profile management, notification preferences, and account controls — consistent with the broader platform visual language." },
  { label: "Accessible & Inclusive Design", detail: "Colour choices, contrast ratios, and component sizing were guided by accessibility best practices — reflecting the platform's inclusive, community-first mission." },
];

const medicusDesignDecisions = [
  { label: "Visual Identity", detail: "Deep forest green with gold accents — conveying clinical trust, premium positioning, and warmth." },
  { label: "Navigation Architecture", detail: "Separated patient and HCP journeys at top-level nav — preventing audience confusion while serving both conversion goals." },
  { label: "HCP Inquiry UX", detail: "Designed a 5-step visual onboarding flow (Inquire → Consult → Appoint → Tour → Sign) to reduce perceived friction." },
  { label: "Specialty Discovery", detail: "Introduced filterable specialty cards and a persistent location-based selector — resolving a friction point identified in user testing." },
];

export function Experience() {
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
            Professional Experience
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-6"
          >
            Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            End-to-end work across experimentation, CRO strategy, and digital delivery — with measurable outcomes.
          </motion.p>
        </div>

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
              <span className="text-xs font-mono text-background/50 uppercase tracking-widest">Case Study 01 / 04</span>
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
                  <p className="text-lg text-muted-foreground">Web Experience & A/B Testing · Culturalisation</p>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
                  {[
                    ["Role", "Web Product Manager (Contract)"],
                    ["Period", "January 2025 – Present"],
                    ["Scope", "Homepage · Catalogue · Plans page · Firefly page · Creative Cloud Pro · Campaign pages"],
                    ["Tools", "Adobe Analytics · Contentsquare · Figma · CMS · A/B testing"],
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
                  <span className="w-4 h-[1px] bg-muted-foreground" />Business Context & Challenge
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                  Adobe Japan's website is the primary conversion channel for Creative Cloud and Creative Cloud Pro subscriptions in Japan — a market with distinct user behaviours, reading patterns, and purchasing decision processes compared to Western audiences. My scope spans high-traffic acquisition pages including the Plans page, Firefly, catalogue, homepage, and campaign pages. My role covers end-to-end web ownership: from identifying UX friction through data analysis, to designing experiments and culturalised page experiences, coordinating global delivery, and reporting business impact.
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
                  <span className="w-4 h-[1px] bg-muted-foreground" />Project A
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
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-mono">My Process</p>
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
                      src="/images/firefly/cc-plans-genai.png"
                      alt="Adobe Creative Cloud plans page Japan — GenAI credit comparison section"
                      className="w-full h-auto block"
                    />
                  </div>

                  <div className="rounded-lg bg-primary/8 border border-primary/20 px-5 py-3 text-sm text-foreground/80">
                    <span className="font-semibold text-primary mr-2">Result</span>
                    {genAiProject.result}
                    <span className="ml-2 text-xs text-muted-foreground italic">Specific metrics omitted in accordance with confidentiality obligations.</span>
                  </div>
                </div>
              </div>

              {/* ── Project B: Firefly Use Case Page ── */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />Project B
                </h4>
                <div className="rounded-xl border border-border p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide bg-secondary text-foreground/70">
                      Culturalisation · UX Content Strategy
                    </span>
                    <h5 className="text-lg font-semibold text-foreground">Firefly Japan — Use Case Page</h5>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 font-mono uppercase tracking-widest">Web PM · Adobe Analytics · Contentsquare</p>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    This page does not exist in any other market. It was built exclusively for Japan as a direct response to an engagement gap identified on the global Firefly website — a Japan-specific solution to a Japan-specific problem.
                  </p>

                  {/* Problem + Goal */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="rounded-lg bg-secondary/40 border border-border p-5">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">The Problem</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        Adobe Firefly's global website was built around Western visual references — models, aesthetics, and lifestyle imagery that felt distant to Japanese users. For a product whose core value is "imagine what you could create", the lack of cultural identification was a significant barrier to engagement. Young SNS-native Japanese creators could not see themselves in the product.
                      </p>
                    </div>
                    <div className="rounded-lg bg-primary/5 border border-primary/20 p-5">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">The Goal</p>
                      <ul className="space-y-1.5">
                        {[
                          "Speak directly to young Japanese SNS creators (Instagram, TikTok, X)",
                          "Showcase use cases relevant to their creative workflows",
                          "Use culturalised imagery that felt native, not translated",
                          "Drive page engagement and app referral clicks",
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
                    <p className="text-xs font-mono uppercase tracking-widest text-primary mb-1">Key Insight</p>
                    <p className="text-sm text-foreground/80 italic leading-relaxed">
                      Localisation is not translation. For Firefly to resonate with Japanese creators, users needed to see people like themselves, creating content they recognised, in contexts they lived in.
                    </p>
                  </div>

                  {/* 7-step process */}
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-5 font-mono">My Process — 7 Steps</p>
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
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-mono">Final Page Structure</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {fireflyPageSections.map(({ label, detail }, i) => (
                        <div key={label} className="rounded-lg border border-border p-4 bg-background">
                          <span className="text-xs font-mono text-primary/60 block mb-1">Section {String(i + 1).padStart(2, "0")}</span>
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
                        src="/images/firefly/use-case-page.png"
                        alt="Firefly Japan use case page — culturalised full-page view"
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-5">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-mono">Outcomes</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {fireflyOutcomes.map(({ icon: Icon, label, detail }) => (
                        <div key={label} className="rounded-xl bg-secondary/40 border border-border p-5">
                          <Icon size={18} className="text-primary mb-3" />
                          <h5 className="font-semibold text-foreground text-sm mb-2">{label}</h5>
                          <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground italic mt-3">Specific metrics omitted in accordance with confidentiality obligations.</p>
                  </div>

                  {/* Key takeaway */}
                  <div className="rounded-xl bg-secondary/30 border-l-4 border-primary p-5">
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Key Takeaway</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Effective culturalisation requires understanding who the user is, what they aspire to create, and how they see themselves — then building an experience that reflects that identity back to them. This project demonstrated that audience-first content strategy, paired with intentional creative direction, can meaningfully close the gap between a global product and a local user.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Project C: Firefly Feature Pages Culturalisation ── */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />Project C
                </h4>
                <div className="rounded-xl border border-border p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide bg-secondary text-foreground/70">
                      Culturalisation · Feature Pages
                    </span>
                    <h5 className="text-lg font-semibold text-foreground">Firefly Japan — Feature Pages Culturalisation</h5>
                  </div>
                  <p className="text-xs text-muted-foreground mb-6 font-mono uppercase tracking-widest">Web PM · CMS · Creative Agency</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="rounded-lg bg-secondary/40 border border-border p-5">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">The Problem</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        The Firefly Text-to-Image and AI Video Generator feature pages were directly adapted from global templates — hero imagery, prompt examples, and generated outputs all reflected Western aesthetics and scenarios irrelevant to Japanese creators.
                      </p>
                    </div>
                    <div className="rounded-lg bg-primary/5 border border-primary/20 p-5">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">My Contributions</p>
                      <ul className="space-y-1.5">
                        {[
                          "Replaced hero image galleries with Japan-relevant content: anime-style illustrations, Japanese urban scenes, cherry blossoms",
                          "Worked with the content vendor to produce Japanese-language prompt examples and locally relevant generated outputs",
                          "Expanded and optimised related feature card sections — improving cross-linking between Firefly capabilities with culturalised imagery",
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
                      { src: "/images/firefly/text-to-image.png", label: "Text-to-Image page", url: "adobe.com/jp/products/firefly/features/text-to-image" },
                      { src: "/images/firefly/ai-video.png", label: "AI Video Generator page", url: "adobe.com/jp/products/firefly/features/ai-video-generator" },
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
                    <span className="font-semibold text-primary mr-2">Result</span>
                    Increased generation engagement and app referral clicks across Firefly Japan feature pages post-culturalisation.
                    <span className="ml-2 text-xs text-muted-foreground italic">Specific metrics omitted in accordance with confidentiality obligations.</span>
                  </div>
                </div>
              </div>

              {/* ── Project D: Features & Prompt Suggestion Page ── */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />Project D
                </h4>
                <div className="rounded-xl border border-border p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide bg-secondary text-foreground/70">
                      Culturalisation · Content Strategy
                    </span>
                    <h5 className="text-lg font-semibold text-foreground">Firefly Japan — Features & Prompt Suggestion Page</h5>
                  </div>
                  <p className="text-xs text-muted-foreground mb-6 font-mono uppercase tracking-widest">Web PM · CMS · Creative Agency</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="rounded-lg bg-secondary/40 border border-border p-5">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">The Problem</p>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        The Firefly features overview and prompt inspiration page used global imagery and prompt examples that did not reflect Japanese creative sensibilities — limiting its usefulness as a discovery and inspiration tool for local users.
                      </p>
                    </div>
                    <div className="rounded-lg bg-primary/5 border border-primary/20 p-5">
                      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">My Contributions</p>
                      <ul className="space-y-1.5">
                        {[
                          "Curated and directed Japan-specific prompt examples across text-to-image, video, and sound generation capabilities",
                          "Replaced feature card imagery with culturalised outputs — anime, Japanese nature scenes, and e-commerce product imagery",
                          "Structured the prompt tips section to reflect creative scenarios relevant to Japanese SNS and commercial creators",
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
                        src="/images/firefly/features-prompts.png"
                        alt="Firefly Japan features and prompt suggestion page"
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>

                  <div className="rounded-lg bg-primary/8 border border-primary/20 px-5 py-3 text-sm text-foreground/80">
                    <span className="font-semibold text-primary mr-2">Result</span>
                    Improved feature discoverability and prompt inspiration relevance for Japanese users — supporting increased engagement with Firefly's generation tools.
                    <span className="ml-2 text-xs text-muted-foreground italic">Specific metrics omitted in accordance with confidentiality obligations.</span>
                  </div>
                </div>
              </div>

              {/* Cross-functional delivery */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />Cross-functional Delivery
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
                  <span className="w-4 h-[1px] bg-muted-foreground" />Reflection & Learnings
                </h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  This role deepened my ability to connect UX decisions directly to business outcomes. The most valuable shift has been framing every web improvement as a business case — with projected revenue impact — rather than a design improvement alone. This builds stakeholder trust and accelerates approval cycles. Operating at the intersection of Japan market needs and global platform constraints has also sharpened my skill in finding pragmatic, high-impact solutions within structured systems.
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
              <span className="text-xs font-mono text-background/50 uppercase tracking-widest">Case Study 02 / 04</span>
              <span className="text-sm text-background/70">Freelance</span>
            </div>

            <div className="p-8 md:p-12">

              {/* Title + meta */}
              <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-2">Local Happinez</h3>
                  <p className="text-lg text-muted-foreground">UI Design — Authentication, Submission & Settings</p>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
                  {[
                    ["Role", "UI Designer (Freelance)"],
                    ["Type", "Non-profit · Steward-owned"],
                    ["Scope", "Auth flow · Submission flow · Settings area"],
                    ["Tools", "Figma"],
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
                  <span className="w-4 h-[1px] bg-muted-foreground" />About the Organisation
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-5 text-sm">
                  Local Happinez is a Dutch steward-owned non-profit with a bold mission: by 2028, connect one million people with local sustainable initiatives worldwide. The platform enables communities across multiple countries — including Nepal, Sri Lanka, the Philippines, and South America — to discover, join, and register grassroots projects that improve nature and society. At its core, the organisation is "owned by the world" — all voting shares donated to a foundation, all economic value returned to planet and people.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Multi-country Platform", detail: "The product serves users and initiative leaders across diverse countries and contexts — requiring clear, universally understandable UI patterns." },
                    { label: "Community-first Mission", detail: "Every design decision needed to reflect openness and accessibility, in line with the org's inclusive, grassroots ethos." },
                    { label: "Product at an Early Stage", detail: "The platform was being built from the ground up — UI decisions at this stage directly shape the long-term product experience." },
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
                  <span className="w-4 h-[1px] bg-muted-foreground" />Key Design Areas
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
                  <span className="w-4 h-[1px] bg-muted-foreground" />Figma Design File
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
                  <span className="w-4 h-[1px] bg-muted-foreground" />Outcome & Reflection
                </h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Designed the UI for three core product areas — authentication, submission, and settings — for a platform aiming to connect a million people to local sustainable action. Working with a non-profit in an early product stage meant every design decision carried weight: the UI needed to feel approachable and trustworthy for community members around the world, while being flexible enough to scale across cultures and languages.
                </p>
                <p className="text-foreground/80 leading-relaxed text-sm mt-3">
                  Key learning: designing for mission-driven products requires a deep understanding of the community context. Accessibility and clarity aren't add-ons — they are fundamental to the product's ability to achieve its goals.
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
              <span className="text-xs font-mono text-background/50 uppercase tracking-widest">Case Study 03 / 04</span>
              <span className="text-sm text-background/70">Freelance · Austria</span>
            </div>

            <div className="p-8 md:p-12">

              {/* Title + meta */}
              <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-2">Medicus Practice</h3>
                  <p className="text-lg text-muted-foreground">End-to-End Website Design — Built from Scratch</p>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
                  {[
                    ["Role", "UI/UX Designer (Freelance)"],
                    ["Period", "2023 – 2024"],
                    ["Scope", "Full landing page system · Web shop · HCP inquiry flow"],
                    ["Tools", "Figma · Adobe Illustrator · Adobe Photoshop"],
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
                  <span className="w-4 h-[1px] bg-muted-foreground" />Business Challenge
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-5 text-sm">
                  Medicus Practice is a cutting-edge practice solution for independent physicians and therapists, enabling a completely new way of working — flexible, connected, and digital. Their product range includes fully equipped practice and therapy rooms, professional practice management solutions, and a nationwide network of virtual practices in Austria. The landing page design was created using Figma, with Adobe Illustrator and Photoshop used to alter logos and sharpen imagery.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Brand Differentiation", detail: "Users initially mistook the platform for a standard booking site — design needed to clearly communicate a premium, innovative service." },
                    { label: "Dual Audience", detail: "Patients and HCPs have fundamentally different needs. Navigation had to serve both without confusion or compromise." },
                    { label: "Information Architecture", detail: "A complex service offering required a clear structure to prevent information overload and aid discovery." },
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
                  <span className="w-4 h-[1px] bg-muted-foreground" />Design Process — End to End
                </h4>
                <div className="relative">
                  <div className="hidden md:block absolute top-6 left-6 right-6 h-[1px] bg-border" />
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative">
                    {[
                      { step: "01", label: "Discovery & Brief", detail: "Client workshops to understand their business model, target audiences, and goals" },
                      { step: "02", label: "Information Architecture", detail: "Mapped the full site structure — separating patient and HCP journeys to prevent confusion" },
                      { step: "03", label: "User Journey Mapping", detail: "Defined end-to-end journeys for both patients and healthcare professionals from entry to conversion" },
                      { step: "04", label: "Wireframing", detail: "Low and mid-fidelity wireframes covering all pages — iterated with client feedback at each stage" },
                      { step: "05", label: "Visual Design", detail: "High-fidelity designs in Figma — visual identity, components, imagery retouching, and logo adaptation in Illustrator and Photoshop" },
                      { step: "06", label: "Prototype & Handoff", detail: "Interactive Figma prototype delivered for stakeholder review and developer handoff" },
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
                  <span className="w-4 h-[1px] bg-muted-foreground" />Key Design Decisions
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
                  <span className="w-4 h-[1px] bg-muted-foreground" />Figma Design File
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
                  <span className="w-4 h-[1px] bg-muted-foreground" />Outcome & Reflection
                </h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  Delivered a complete website design built entirely from scratch — in close collaboration with the client at every stage. The full Figma file documents the journey from initial discovery and information architecture through user journey mapping, wireframing, and high-fidelity visual design, to an interactive prototype ready for developer handoff. Every page in the system — homepage, specialisation directory, location pages, HCP inquiry flow, and web shop — was designed end-to-end, including logo adaptation and image retouching in Illustrator and Photoshop.
                </p>
                <p className="text-foreground/80 leading-relaxed text-sm mt-3">
                  Key learning: designing for a dual audience requires disciplined information architecture decisions from day one. Working directly with the client through each design phase ensured the output matched both their business goals and the real needs of their users.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

        {/* ── Case Study 04: AI Intake Navigator ─────────────────────── */}
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
              <span className="text-xs font-mono text-background/50 uppercase tracking-widest">Case Study 04 / 04</span>
              <span className="text-sm text-background/70">Exploratory · Portfolio Case Study · 2026</span>
            </div>

            <div className="p-8 md:p-12">

              {/* Title + meta */}
              <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-2">AI Intake Navigator</h3>
                  <p className="text-lg text-muted-foreground">AI Co-pilot for Enterprise Compliance Intake</p>
                </div>
                <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
                  {[
                    ["Role", "UX Designer & Product Thinker"],
                    ["Type", "Exploratory / Portfolio"],
                    ["Domain", "Enterprise Compliance Intake"],
                    ["Platform", "Salesforce + AI Navigator Layer"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground block mb-1">{label}</span>
                      <span className="text-foreground/90 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overview */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />Overview & Challenge
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-5 text-sm">
                  Enterprise consulting firms rely on Salesforce-based compliance intake systems that have grown over years — fields and tabs bolted on for each new regulation, never redesigned holistically. The result is a UI that reflects internal team structures rather than how users actually think. This project explores the UX logic and AI assistant design for a document-driven intake tool built on one core constraint: the Salesforce system itself cannot be changed.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                  The AI absorbs the complexity so the user never has to see it. By the time a user opens Salesforce to enter data, every decision has already been made and verified. In compliance intake, the cost of an error is not a failed form — it is a missed independence check, an unreviewed SEC disclosure, or a service category that should have triggered partner sign-off.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "System cannot be changed", detail: "The AI navigator works alongside Salesforce without touching the underlying structure — the solution sits on top, not inside." },
                    { label: "High error stakes", detail: "Missed compliance checks carry legal and regulatory consequences — UX must prioritise prevention over efficiency." },
                    { label: "Infrequent users", detail: "Many users encounter the intake flow rarely. No muscle memory to rely on — every session must be self-explanatory." },
                    { label: "Complex conditional logic", detail: "Which fields activate depends on service type, client status, and engagement size — the AI handles this invisibly." },
                  ].map(({ label, detail }) => (
                    <div key={label} className="rounded-xl bg-secondary/50 p-5 border border-border">
                      <h5 className="font-medium text-foreground mb-2 text-sm">{label}</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Principles */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />Design Principles
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { num: "1", title: "Construction → Confirmation", detail: "The user's job is to verify what the AI suggests, not build selections from scratch. Cognitive load shifts to the system." },
                    { num: "2", title: "Alerts earn their place", detail: "Every alert must have a severity level, a reason, and a next action. An alert with no next action is just noise." },
                    { num: "3", title: "The system holds the memory", detail: "Users should never need to remember where they left off. Every return surfaces context automatically." },
                    { num: "4", title: "Thinking vs. Recording", detail: "The assistant does the reasoning. Salesforce does the recording. They never duplicate each other." },
                  ].map(({ num, title, detail }) => (
                    <div key={num} className="flex gap-4 p-5 rounded-xl border border-border">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-mono text-sm font-semibold flex items-center justify-center shrink-0">{num}</span>
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Three Phases */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />A Three-Phase AI Navigator
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  The solution is structured as three sequential gates. No phase begins until the previous one is fully resolved — errors are caught at the earliest possible moment before they compound.
                </p>

                {/* Phase flow */}
                <div className="flex flex-wrap items-center gap-2 mb-8 text-sm font-medium text-muted-foreground">
                  {["Phase 1 — Pre-flight check", "→", "Phase 2 — Document validation", "→", "Phase 3 — Service classification"].map((s, i) => (
                    <span key={i} className={s === "→" ? "text-muted-foreground/40" : "px-3 py-1.5 rounded-full bg-primary/8 text-primary text-xs"}>{s}</span>
                  ))}
                </div>

                {[
                  {
                    phase: "Phase 1",
                    title: "Delivery Date Check",
                    img: "/images/ai-navigator/phase1.png",
                    alt: "Phase 1 wireframe — delivery date hard block alert",
                    body: "The AI reads the delivery start date on session load and calculates days remaining. Two thresholds trigger different responses — a hard block under 3 days (floating alert anchored to the date field + assistant message with two choices), and an amber warning for 3–7 days that persists but does not block.",
                    detail: "User story: Sarah opens an intake without noticing her manager set delivery for tomorrow. The assistant immediately surfaces a floating panel and offers to pause the session — saving state with the reason captured and a pre-drafted message ready for her manager.",
                  },
                  {
                    phase: "Phase 2",
                    title: "Document Validation",
                    img: "/images/ai-navigator/phase2.png",
                    alt: "Phase 2 wireframe — document upload validation",
                    body: "The AI treats the uploaded document as the source of truth and validates it against six edge cases: wrong document type, multiple documents with overlapping dates, filename containing 'draft', client name mismatch (hard block), expired contract, and amendment without original. The user declares document type before upload — priming them to think critically before the AI reads.",
                    detail: "Design decision: document type is declared before upload, not detected after. This sets expectation rather than delivers surprise — and means the confidence level for all subsequent AI suggestions is established from the start.",
                  },
                  {
                    phase: "Phase 3",
                    title: "Service Classification",
                    img: "/images/ai-navigator/phase3.png",
                    alt: "Phase 3 wireframe — service classification progressive disclosure",
                    body: "Once the document passes validation, the AI maps contract content to service parents and sub-services. Progressive disclosure presents information in four layers: summary card → high confidence expanded → lower confidence collapsed → compliance flags always visible but visually separated.",
                    detail: "The AI favours recall over precision. In compliance, omission is more costly than over-suggestion. Lower confidence suggestions are clearly marked — a suggestion that gets deselected costs two seconds; a missed compliance category costs far more.",
                  },
                ].map(({ phase, title, img, alt, body, detail }) => (
                  <div key={phase} className="mb-8 rounded-xl border border-border overflow-hidden">
                    <div className="px-6 py-4 border-b border-border flex items-center gap-3 bg-secondary/30">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wide">{phase}</span>
                      <h5 className="font-semibold text-foreground text-sm">{title}</h5>
                    </div>
                    <div className="p-6">
                      <div className="rounded-lg overflow-hidden border border-border mb-5 bg-secondary/20">
                        <div className="bg-secondary/40 px-4 py-2 border-b border-border flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-border" />
                          <span className="w-2.5 h-2.5 rounded-full bg-border" />
                          <span className="w-2.5 h-2.5 rounded-full bg-border" />
                          <span className="text-xs text-muted-foreground ml-2 font-mono">AI Navigator — {title}</span>
                        </div>
                        <img src={img} alt={alt} className="w-full h-auto block" />
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed mb-3">{body}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-4">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Alert Hierarchy */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />Alert Hierarchy — Four Levels
                </h4>
                <div className="space-y-3">
                  {[
                    { level: "Hard block", colour: "bg-red-500", trigger: "Client mismatch, expired contract, <3 days to delivery", behaviour: "Red, centre screen, cannot dismiss without resolving" },
                    { level: "Soft block", colour: "bg-amber-500", trigger: "Draft document, amendment without original", behaviour: "Amber, can proceed only with explicit acknowledgement — decision is logged" },
                    { level: "Warning", colour: "bg-yellow-400", trigger: "Old document, filename mismatch, 3–7 days", behaviour: "Yellow, informational — keeps user aware without interrupting current task" },
                    { level: "Info", colour: "bg-blue-400", trigger: "Low confidence suggestions", behaviour: "Blue, visible but not alarming — signals uncertainty without triggering dismissal" },
                  ].map(({ level, colour, trigger, behaviour }) => (
                    <div key={level} className="flex gap-4 items-start p-4 rounded-lg border border-border">
                      <span className={`w-2 h-2 rounded-full ${colour} mt-1.5 shrink-0`} />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 w-full">
                        <span className="font-semibold text-foreground text-sm">{level}</span>
                        <span className="text-sm text-muted-foreground">{trigger}</span>
                        <span className="text-sm text-foreground/70">{behaviour}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key design decisions */}
              <div className="mb-10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />Key Design Decisions & Tradeoffs
                </h4>
                <div className="space-y-3">
                  {[
                    { label: "Dual alert placement — field and chat", detail: "Alternative: single modal only. Reason: users scan different areas at different moments — one location gets missed." },
                    { label: "Document type declared before upload", detail: "Alternative: AI detects type after upload. Reason: primes user to think critically before the AI reads, sets expectation rather than delivers surprise." },
                    { label: "Progressive disclosure by confidence", detail: "Alternative: show all suggestions at once. Reason: prevents congestion — most important decisions made first without noise competing for attention." },
                    { label: "Pause captures reason, not just progress", detail: "Alternative: save position only. Reason: returning users need context, not just a bookmark — reason enables the resume card narrative." },
                    { label: "More suggestions rather than fewer", detail: "Alternative: precision-focused suggestions only. Reason: omission is more costly than over-suggestion in compliance — high recall is the right bias." },
                  ].map(({ label, detail }) => (
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

              {/* Reflection + download */}
              <div className="rounded-xl bg-secondary/30 border-l-4 border-primary p-6 md:p-8 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />Reflection
                </h4>
                <p className="text-foreground/80 leading-relaxed text-sm mb-3">
                  AI assistants inherit the confusion of the systems they sit on top of. Knowledge engineering — documenting every field, every rule, every conditional — is the hard work. The AI layer is the easier part. Compliance UX requires designing for error prevention, not just efficiency. The right question is not how fast can the user complete this — it is how certain can we be that what they submit is correct.
                </p>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  This project sits at the intersection of AI product thinking, compliance domain expertise, and enterprise UX maturity — designing AI assistants that reduce cognitive load in high-stakes regulated environments.
                </p>
              </div>

              {/* Download CTA */}
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="/downloads/AI-Intake-Navigator-Case-Study.docx"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 10.5L3.5 6.5H6V1H9V6.5H11.5L7.5 10.5Z" fill="currentColor"/><path d="M2 12H13V14H2V12Z" fill="currentColor"/></svg>
                  Download Full Case Study
                </a>
                <span className="text-xs text-muted-foreground">.docx · Full decision tree, appendix & session logic</span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
