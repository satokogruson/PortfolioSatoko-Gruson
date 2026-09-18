import { useState, type CSSProperties } from "react";
import { ArrowUpRight, ChevronRight, Menu, X } from "lucide-react";

type Work = {
  id: string;
  no: string;
  title: string;
  discipline: string;
  year: string;
  accent: string;
  description: string;
  result: string;
  resultLabel: string;
};

const work: Work[] = [
  {
    id: "navigator",
    no: "01",
    title: "AI Intake Navigator",
    discipline: "Product strategy · UX",
    year: "2024",
    accent: "#e9685c",
    description: "A clearer first step for people making complex healthcare decisions.",
    result: "−37%",
    resultLabel: "time to first useful answer",
  },
  {
    id: "savor",
    no: "02",
    title: "Savor the Globe",
    discipline: "Web experience · Content",
    year: "2023",
    accent: "#6b9689",
    description: "A recipe archive shaped into a place to wander, save, and return to.",
    result: "4.8×",
    resultLabel: "more recipe saves",
  },
  {
    id: "clock",
    no: "03",
    title: "World Clock",
    discipline: "UI system · Frontend",
    year: "2022",
    accent: "#dc9b4f",
    description: "A small utility with enough atmosphere to become a daily ritual.",
    result: "18",
    resultLabel: "time zones, one glance",
  },
];

export function CaseStudyPolished() {
  const [activeId, setActiveId] = useState("navigator");
  const [menuOpen, setMenuOpen] = useState(false);
  const active = work.find((item) => item.id === activeId) ?? work[0];
  const next = work[(work.findIndex((item) => item.id === active.id) + 1) % work.length];

  const select = (id: string) => {
    setActiveId(id);
    setMenuOpen(false);
  };

  return (
    <main className="polished-shell">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap');
        .polished-shell { --ink:#25211f; --paper:#f7f3ed; --quiet:#887d73; --line:#ddd4ca; min-height:100dvh; background:var(--paper); color:var(--ink); font-family:'DM Sans',sans-serif; overflow:hidden; }
        .polished-shell * { box-sizing:border-box; }
        .polished-top { height:72px; border-bottom:1px solid var(--line); display:flex; align-items:center; justify-content:space-between; padding:0 clamp(20px,4vw,54px); }
        .polished-brand { display:flex; align-items:center; gap:10px; color:var(--ink); font-size:12px; font-weight:700; letter-spacing:.15em; text-transform:uppercase; }
        .polished-brand-mark { position:relative; display:block; width:20px; height:20px; border-radius:50%; background:#e9685c; }
        .polished-brand-mark:after { content:''; position:absolute; width:9px; height:9px; right:-5px; bottom:0; border-radius:50%; background:#e5b15c; }
        .polished-top-right { display:flex; align-items:center; gap:28px; color:var(--quiet); font-size:11px; letter-spacing:.05em; }
        .polished-email { color:var(--ink); border:0; border-bottom:1px solid var(--ink); padding:3px 0; background:transparent; font:600 11px 'DM Sans',sans-serif; cursor:pointer; }
        .polished-menu { display:none; border:1px solid var(--line); background:transparent; border-radius:50%; width:34px; height:34px; align-items:center; justify-content:center; color:var(--ink); }
        .polished-body { display:grid; grid-template-columns:minmax(230px, 28%) 1fr; min-height:calc(100dvh - 72px); }
        .polished-index { border-right:1px solid var(--line); padding:42px clamp(20px,3.4vw,48px); display:flex; flex-direction:column; }
        .polished-eyebrow { margin:0 0 28px; color:var(--quiet); font-size:10px; font-weight:700; letter-spacing:.17em; text-transform:uppercase; }
        .polished-intro { max-width:220px; margin:0 0 50px; font:500 clamp(21px,2.2vw,28px)/1.16 'Playfair Display',serif; letter-spacing:-.02em; }
        .polished-intro em { color:#e9685c; font-style:italic; }
        .polished-list { display:flex; flex-direction:column; gap:4px; }
        .polished-item { position:relative; display:grid; grid-template-columns:28px 1fr; gap:12px; width:calc(100% + 20px); margin-left:-10px; padding:14px 10px; border:0; border-radius:6px; text-align:left; background:transparent; color:var(--quiet); font:inherit; cursor:pointer; transition:background .2s,color .2s,transform .2s; }
        .polished-item:hover { background:#efe8e0; color:var(--ink); transform:translateX(2px); }
        .polished-item[data-active="true"] { background:#eee5db; color:var(--ink); }
        .polished-item[data-active="true"]:before { content:''; position:absolute; left:0; top:15px; bottom:15px; width:3px; border-radius:3px; background:var(--tone); }
        .polished-no { padding-top:2px; font-size:10px; letter-spacing:.12em; }
        .polished-item-title { display:block; font-size:13px; font-weight:600; line-height:1.2; }
        .polished-item-meta { display:block; margin-top:5px; font-size:11px; color:var(--quiet); }
        .polished-availability { margin-top:auto; padding-top:48px; color:var(--quiet); font-size:11px; line-height:1.55; }
        .polished-availability strong { display:block; margin-bottom:5px; color:var(--ink); font-weight:600; }
        .polished-stage { position:relative; padding:clamp(32px,5vw,72px) clamp(24px,7vw,104px) 46px; background:#fbf8f3; isolation:isolate; }
        .polished-stage:before { content:''; position:absolute; z-index:-1; width:min(36vw,470px); height:min(36vw,470px); top:11%; right:8%; border-radius:50%; background:#f5ddd5; }
        .polished-stage:after { content:''; position:absolute; z-index:-1; width:180px; height:180px; top:43%; right:22%; border:1px solid rgba(233,104,92,.2); border-radius:50%; }
        .polished-content { max-width:820px; }
        .polished-stage-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:clamp(54px,10vh,102px); color:var(--quiet); font-size:10px; letter-spacing:.12em; text-transform:uppercase; }
        .polished-stage-top span:first-child { color:var(--ink); }
        .polished-title { max-width:800px; margin:0; font:500 clamp(43px,7.2vw,100px)/.95 'Playfair Display',serif; letter-spacing:-.055em; }
        .polished-title em { color:#e9685c; font-style:italic; }
        .polished-description { max-width:500px; margin:28px 0 34px; color:#685e56; font-size:15px; line-height:1.6; }
        .polished-cta { display:inline-flex; align-items:center; gap:11px; border:1px solid var(--ink); border-radius:999px; padding:12px 16px 12px 19px; background:transparent; color:var(--ink); font:600 11px 'DM Sans',sans-serif; cursor:pointer; transition:background .2s,color .2s,transform .2s; }
        .polished-cta:hover { background:var(--ink); color:var(--paper); transform:translateY(-2px); }
        .polished-rule { border:0; border-top:1px solid var(--line); margin:clamp(58px,12vh,128px) 0 24px; }
        .polished-stats { display:grid; grid-template-columns:1.2fr 1fr 1fr; gap:18px; }
        .polished-stat-label { display:block; margin-bottom:9px; color:var(--quiet); font-size:10px; letter-spacing:.12em; text-transform:uppercase; }
        .polished-stat-value { display:block; font:500 21px 'Playfair Display',serif; }
        .polished-stat-note { display:block; max-width:130px; margin-top:5px; color:var(--quiet); font-size:11px; line-height:1.35; }
        .polished-next { display:flex; align-items:center; gap:8px; margin-top:42px; padding:0; border:0; background:transparent; color:var(--quiet); font:11px 'DM Sans',sans-serif; cursor:pointer; }
        .polished-next strong { color:var(--ink); font-weight:600; }
        @media (max-width:700px) {
          .polished-top { height:62px; }
          .polished-top-right { display:none; }
          .polished-menu { display:flex; }
          .polished-body { display:block; min-height:calc(100dvh - 62px); }
          .polished-index { border:0; padding:25px 20px 20px; display:block; }
          .polished-eyebrow { margin-bottom:15px; }
          .polished-intro { max-width:none; margin-bottom:18px; font-size:20px; }
          .polished-list { display:none; }
          .polished-list[data-open="true"] { display:flex; }
          .polished-availability { display:none; }
          .polished-stage { min-height:calc(100dvh - 225px); padding:34px 20px 43px; }
          .polished-stage:before { width:78vw; height:78vw; top:22%; right:-13%; }
          .polished-stage:after { top:40%; right:5%; }
          .polished-stage-top { margin-bottom:60px; }
          .polished-title { font-size:55px; }
          .polished-description { margin:22px 0 29px; font-size:14px; }
          .polished-stats { gap:10px; }
          .polished-stat-value { font-size:18px; }
          .polished-stat-note { font-size:10px; }
        }
      `}</style>
      <header className="polished-top">
        <div className="polished-brand"><i className="polished-brand-mark" aria-hidden="true" /> Satoko Gruson</div>
        <div className="polished-top-right"><span>Digital product / Tokyo</span><button className="polished-email" onClick={() => { window.location.href = "mailto:fsjm1210@gmail.com"; }}>Let&apos;s talk ↗</button></div>
        <button className="polished-menu" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle selected work">{menuOpen ? <X size={16} /> : <Menu size={16} />}</button>
      </header>
      <div className="polished-body">
        <aside className="polished-index">
          <p className="polished-eyebrow">Selected work / 2022—24</p>
          <p className="polished-intro">I make digital things feel <em>human</em> when they need to.</p>
          <nav className="polished-list" data-open={menuOpen}>
            {work.map((item) => (
              <button key={item.id} className="polished-item" data-active={item.id === active.id} style={{ "--tone": item.accent } as CSSProperties} onClick={() => select(item.id)}>
                <span className="polished-no">{item.no}</span>
                <span><span className="polished-item-title">{item.title}</span><span className="polished-item-meta">{item.discipline}</span></span>
              </button>
            ))}
          </nav>
          <p className="polished-availability"><strong>Currently available</strong>For product teams who care about the details between the lines.</p>
        </aside>
        <section className="polished-stage" aria-live="polite">
          <div className="polished-content">
            <div className="polished-stage-top"><span>{active.discipline}</span><span>{active.year} / Case study</span></div>
            <h1 className="polished-title">{active.title.split(" ").map((word, index, words) => <span key={`${word}-${index}`}>{index === words.length - 1 ? <em>{word}</em> : `${word} `}</span>)}</h1>
            <p className="polished-description">{active.description} I work across product thinking, interface design, and the words that help people move forward.</p>
            <button className="polished-cta" onClick={() => window.alert(`Opening the ${active.title} case study`)}>Read the case study <ArrowUpRight size={14} /></button>
            <hr className="polished-rule" />
            <div className="polished-stats">
              <div><span className="polished-stat-label">Outcome</span><span className="polished-stat-value">{active.result}</span><span className="polished-stat-note">{active.resultLabel}</span></div>
              <div><span className="polished-stat-label">Role</span><span className="polished-stat-value">Lead</span><span className="polished-stat-note">Strategy → shipped UI</span></div>
              <div><span className="polished-stat-label">Made with</span><span className="polished-stat-value">Figma</span><span className="polished-stat-note">Research · flows · systems</span></div>
            </div>
            <button className="polished-next" onClick={() => select(next.id)}>Next story <ChevronRight size={13} /> <strong>{next.title}</strong></button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default CaseStudyPolished;