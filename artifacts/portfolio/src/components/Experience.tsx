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
              <span className="text-xs font-mono text-background/50 uppercase tracking-widest">Case Study 01 / 04</span>
              <span className="text-sm text-background/70">Exploratory · Portfolio Case Study · 2026</span>
            </div>

            <div className="p-8 md:p-12">

              {/* Title + meta */}
              <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-2">AI Assistant for Salesforce Compliance</h3>
                  <p className="text-lg text-muted-foreground">Helping users navigate a complex compliance intake system</p>
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
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />Overview
                </h4>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  A compliance intake system at a global consulting firm had grown over years of regulatory changes — fields and logic bolted on without ever being redesigned. The Salesforce system itself could not be touched. The solution: an AI navigator layer that sits alongside the existing UI, reads the uploaded contract, and handles all complexity before the user opens a single field. The AI absorbs the cognitive load; the user confirms, not constructs.
                </p>
              </div>

              {/* Challenge */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-muted-foreground" />The Challenge
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      label: "System cannot be changed",
                      detail: "The Salesforce intake system had years of regulatory complexity baked in. No structural changes were permitted — the AI layer had to work entirely on top.",
                    },
                    {
                      label: "Infrequent, high-stakes users",
                      detail: "Most users encountered the intake flow rarely — no muscle memory, no familiarity. A missed compliance check carries legal and regulatory consequences.",
                    },
                    {
                      label: "Conditional logic invisible to users",
                      detail: "Which fields activate depends on service type, client status, and engagement size — logic users were expected to know but couldn't be expected to remember.",
                    },
                    {
                      label: "Errors are not recoverable cheaply",
                      detail: "An incorrect submission isn't a failed form — it's a missed independence check, an unreviewed SEC disclosure, or a service category that needed partner sign-off.",
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
                    <span className="w-4 h-[1px] bg-muted-foreground" />Three Sequential Gates
                  </h4>
                  <div className="flex flex-col flex-1 gap-3">
                    {[
                      { phase: "Phase 1", title: "Pre-flight check", detail: "AI reads the delivery date on load. Hard block under 3 days; amber warning for 3–7 days." },
                      { phase: "Phase 2", title: "Document validation", detail: "Six edge cases checked — name mismatch, expired contract, draft filename, amendment without original." },
                      { phase: "Phase 3", title: "Service classification", detail: "AI maps contract to service parents + sub-services. Progressive disclosure by confidence. Recall over precision." },
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
                    <span className="w-4 h-[1px] bg-muted-foreground" />Design Principles
                  </h4>
                  <div className="flex flex-col flex-1 gap-3">
                    {[
                      { num: "1", title: "Construction → Confirmation", detail: "Verify AI suggestions, don't build from scratch." },
                      { num: "2", title: "Alerts earn their place", detail: "Every alert needs a severity, a reason, and a next action." },
                      { num: "3", title: "System holds the memory", detail: "Every return surfaces where you stopped and why." },
                      { num: "4", title: "Thinking vs. Recording", detail: "AI reasons. Salesforce records. They never duplicate." },
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
                  <span className="w-4 h-[1px] bg-muted-foreground" />Alert Hierarchy
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { level: "Hard block", colour: "bg-red-100 text-red-700 border-red-200", dot: "bg-red-500", trigger: "Name mismatch · Expired contract · &lt;3 days" },
                    { level: "Soft block", colour: "bg-amber-50 text-amber-700 border-amber-200", dot: "bg-amber-500", trigger: "Draft document · Amendment without original" },
                    { level: "Warning", colour: "bg-yellow-50 text-yellow-700 border-yellow-200", dot: "bg-yellow-400", trigger: "Old document · Filename flags · 3–7 days" },
                    { level: "Info", colour: "bg-blue-50 text-blue-700 border-blue-200", dot: "bg-blue-400", trigger: "Low confidence suggestions" },
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
                  Compliance UX requires designing for error prevention, not just efficiency. The right question is not <em>how fast</em> can the user complete this — it is <em>how certain</em> can we be that what they submit is correct.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors shrink-0"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  View wireframes on Figma
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
              <span className="text-xs font-mono text-background/50 uppercase tracking-widest">Case Study 01 / 03</span>
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
                    ["Period", "January 2025 – May 2026"],
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
                      src={`${import.meta.env.BASE_URL}images/firefly/cc-plans-genai.png`}
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
                        src={`${import.meta.env.BASE_URL}images/firefly/use-case-page.png`}
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
                      { src: `${import.meta.env.BASE_URL}images/firefly/text-to-image.png`, label: "Text-to-Image page", url: "adobe.com/jp/products/firefly/features/text-to-image" },
                      { src: `${import.meta.env.BASE_URL}images/firefly/ai-video.png`, label: "AI Video Generator page", url: "adobe.com/jp/products/firefly/features/ai-video-generator" },
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
                        src={`${import.meta.env.BASE_URL}images/firefly/features-prompts.png`}
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
              <span className="text-xs font-mono text-background/50 uppercase tracking-widest">Case Study 02 / 03</span>
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
              <span className="text-xs font-mono text-background/50 uppercase tracking-widest">Case Study 03 / 03</span>
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

      </div>
    </section>
  );
}
