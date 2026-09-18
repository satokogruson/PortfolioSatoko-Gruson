import { useState, type CSSProperties } from "react";
import { ArrowUpRight, ChevronDown, Circle, Menu, X } from "lucide-react";

type Project = {
  id: string;
  number: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  accent: string;
  metric: string;
  metricLabel: string;
};

const projects: Project[] = [
  {
    id: "navigator",
    number: "01",
    title: "AI Intake Navigator",
    type: "Product strategy / UX",
    year: "2024",
    summary: "A calmer front door for complex healthcare decisions.",
    accent: "#f46f61",
    metric: "−37%",
    metricLabel: "time to first useful answer",
  },
  {
    id: "savor",
    number: "02",
    title: "Savor the Globe",
    type: "Web experience / Content",
    year: "2023",
    summary: "Turning a global recipe archive into a place to wander.",
    accent: "#739b8d",
    metric: "4.8×",
    metricLabel: "more recipe saves",
  },
  {
    id: "clock",
    number: "03",
    title: "World Clock",
    type: "UI system / Frontend",
    year: "2022",
    summary: "A tiny utility with enough atmosphere to become a ritual.",
    accent: "#e9aa5a",
    metric: "18",
    metricLabel: "time zones, one glance",
  },
];

export function CaseStudyAtlas() {
  const [activeId, setActiveId] = useState("navigator");
  const [menuOpen, setMenuOpen] = useState(false);
  const active = projects.find((project) => project.id === activeId) ?? projects[0];

  const selectProject = (id: string) => {
    setActiveId(id);
    setMenuOpen(false);
  };

  return (
    <main className="atlas-shell">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap');
        .atlas-shell { --ink:#24201d; --paper:#f8f3ed; --muted:#81766d; --line:#ded5cc; min-height:100dvh; background:var(--paper); color:var(--ink); font-family:'DM Sans',sans-serif; overflow:hidden; }
        .atlas-shell * { box-sizing:border-box; }
        .atlas-topbar { height:74px; border-bottom:1px solid var(--line); display:flex; align-items:center; justify-content:space-between; padding:0 34px; }
        .atlas-mark { display:flex; align-items:center; gap:11px; font-size:13px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; }
        .atlas-mark i { display:block; width:18px; height:18px; border-radius:50%; background:#f46f61; box-shadow:7px 0 0 #e9aa5a; }
        .atlas-meta { display:flex; align-items:center; gap:25px; color:var(--muted); font-size:12px; letter-spacing:.04em; }
        .atlas-contact { border:0; border-bottom:1px solid var(--ink); background:transparent; color:var(--ink); padding:3px 0; font:600 12px 'DM Sans',sans-serif; cursor:pointer; }
        .atlas-grid { min-height:calc(100dvh - 74px); display:grid; grid-template-columns:clamp(220px,26vw,330px) 1fr; }
        .atlas-index { border-right:1px solid var(--line); padding:40px 28px; display:flex; flex-direction:column; }
        .atlas-kicker { color:var(--muted); text-transform:uppercase; font-size:10px; font-weight:700; letter-spacing:.16em; margin:0 0 38px; }
        .atlas-intro { font-family:'Playfair Display',serif; font-size:24px; line-height:1.18; margin:0 0 46px; max-width:210px; }
        .atlas-intro em { color:#f46f61; font-style:italic; }
        .atlas-projects { display:flex; flex-direction:column; gap:2px; }
        .atlas-project { position:relative; display:grid; grid-template-columns:30px 1fr; gap:12px; padding:17px 12px; margin-left:-12px; border:0; text-align:left; background:transparent; color:var(--muted); cursor:pointer; border-radius:5px; font-family:inherit; }
        .atlas-project:hover { background:#efe8e0; color:var(--ink); }
        .atlas-project[data-active="true"] { color:var(--ink); background:#eee6dc; }
        .atlas-project[data-active="true"]:before { content:''; position:absolute; left:0; top:18px; bottom:18px; width:3px; border-radius:3px; background:var(--accent); }
        .atlas-project-num { font-size:10px; letter-spacing:.1em; padding-top:2px; }
        .atlas-project-title { display:block; font-size:13px; font-weight:600; line-height:1.2; }
        .atlas-project-type { display:block; font-size:11px; margin-top:6px; color:var(--muted); }
        .atlas-index-bottom { margin-top:auto; padding-top:55px; color:var(--muted); font-size:11px; line-height:1.6; }
        .atlas-index-bottom span { display:block; color:var(--ink); font-weight:600; margin-bottom:4px; }
        .atlas-stage { position:relative; padding:48px clamp(28px,6vw,96px) 52px; background:#fbf8f4; }
        .atlas-stage:before { content:''; position:absolute; right:11%; top:11%; width:31vw; height:31vw; max-width:430px; max-height:430px; border-radius:50%; background:#f8e1d8; z-index:0; }
        .atlas-stage-inner { position:relative; z-index:1; max-width:800px; }
        .atlas-stage-head { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:clamp(40px,9vh,90px); }
        .atlas-eyebrow { font-size:11px; color:var(--muted); letter-spacing:.12em; text-transform:uppercase; }
        .atlas-year { font-size:11px; color:var(--muted); }
        .atlas-title { font:500 clamp(44px,7vw,92px)/.98 'Playfair Display',serif; letter-spacing:-.045em; max-width:800px; margin:0; }
        .atlas-title i { color:#f46f61; }
        .atlas-summary { max-width:480px; color:#655b54; font-size:16px; line-height:1.55; margin:28px 0 44px; }
        .atlas-action { display:inline-flex; align-items:center; gap:12px; color:var(--ink); border:1px solid var(--ink); border-radius:100px; padding:12px 17px 12px 20px; font-size:12px; font-weight:600; background:transparent; cursor:pointer; transition:background .2s, color .2s, transform .2s; }
        .atlas-action:hover { background:var(--ink); color:var(--paper); transform:translateY(-2px); }
        .atlas-action svg { width:14px; height:14px; }
        .atlas-divider { border:0; border-top:1px solid var(--line); margin:clamp(52px,11vh,120px) 0 25px; }
        .atlas-data { display:grid; grid-template-columns:1.2fr 1fr 1fr; gap:18px; }
        .atlas-data-label { display:block; color:var(--muted); font-size:10px; letter-spacing:.11em; text-transform:uppercase; margin-bottom:10px; }
        .atlas-data-value { display:block; font:500 21px 'Playfair Display',serif; }
        .atlas-data-small { display:block; color:var(--muted); font-size:11px; margin-top:5px; line-height:1.35; }
        .atlas-next { margin-top:45px; display:flex; align-items:center; gap:10px; color:var(--muted); font-size:11px; cursor:pointer; background:none; border:0; padding:0; font-family:inherit; }
        .atlas-next strong { color:var(--ink); font-weight:600; }
        .atlas-mobile-toggle { display:none; }
        @media (max-width:700px) {
          .atlas-topbar { height:62px; padding:0 20px; }
          .atlas-meta { display:none; }
          .atlas-mobile-toggle { display:flex; align-items:center; justify-content:center; width:34px; height:34px; border:1px solid var(--line); border-radius:50%; background:transparent; color:var(--ink); }
          .atlas-grid { display:block; min-height:calc(100dvh - 62px); }
          .atlas-index { border:0; padding:26px 20px 22px; display:block; }
          .atlas-kicker { margin-bottom:16px; }
          .atlas-intro { font-size:19px; max-width:none; margin-bottom:20px; }
          .atlas-projects { display:none; }
          .atlas-projects[data-open="true"] { display:flex; }
          .atlas-index-bottom { display:none; }
          .atlas-stage { padding:36px 20px 48px; min-height:calc(100dvh - 240px); }
          .atlas-stage:before { width:72vw; height:72vw; top:22%; right:-11%; }
          .atlas-stage-head { margin-bottom:60px; }
          .atlas-title { font-size:54px; }
          .atlas-summary { font-size:15px; margin:22px 0 32px; }
          .atlas-data { gap:12px; }
          .atlas-data-value { font-size:18px; }
        }
      `}</style>
      <header className="atlas-topbar">
        <div className="atlas-mark"><i aria-hidden="true" /> Satoko Gruson</div>
        <div className="atlas-meta">
          <span>Digital product / Tokyo</span>
          <button className="atlas-contact" onClick={() => { window.location.href = "mailto:fsjm1210@gmail.com"; }}>Let&apos;s talk ↗</button>
        </div>
        <button className="atlas-mobile-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle project list">
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </header>
      <div className="atlas-grid">
        <aside className="atlas-index">
          <p className="atlas-kicker">Selected work / 2022—24</p>
          <p className="atlas-intro">I make digital things feel <em>human</em> at the exact moment they need to.</p>
          <nav className="atlas-projects" data-open={menuOpen}>
            {projects.map((project) => (
              <button key={project.id} className="atlas-project" data-active={project.id === activeId} style={{ "--accent": project.accent } as CSSProperties} onClick={() => selectProject(project.id)}>
                <span className="atlas-project-num">{project.number}</span>
                <span><span className="atlas-project-title">{project.title}</span><span className="atlas-project-type">{project.type}</span></span>
              </button>
            ))}
          </nav>
          <div className="atlas-index-bottom"><span>Currently available</span>For product teams who care about the details between the lines.</div>
        </aside>
        <section className="atlas-stage" aria-live="polite">
          <div className="atlas-stage-inner">
            <div className="atlas-stage-head"><span className="atlas-eyebrow">{active.type}</span><span className="atlas-year">{active.year} / Case study</span></div>
            <h1 className="atlas-title">{active.title.split(" ").map((word, index) => <span key={`${word}-${index}`}>{index === active.title.split(" ").length - 1 ? <><i>{word}</i></> : `${word} `}</span>)}</h1>
            <p className="atlas-summary">{active.summary} I work across product thinking, interface design, and the words that help people move forward.</p>
            <button className="atlas-action" onClick={() => window.alert(`Opening the ${active.title} case study`)}>Read the case study <ArrowUpRight /></button>
            <hr className="atlas-divider" />
            <div className="atlas-data">
              <div><span className="atlas-data-label">Outcome</span><span className="atlas-data-value">{active.metric}</span><span className="atlas-data-small">{active.metricLabel}</span></div>
              <div><span className="atlas-data-label">Role</span><span className="atlas-data-value">Lead</span><span className="atlas-data-small">Strategy → shipped UI</span></div>
              <div><span className="atlas-data-label">Made with</span><span className="atlas-data-value">Figma</span><span className="atlas-data-small">Research · flows · systems</span></div>
            </div>
            <button className="atlas-next" onClick={() => selectProject(projects[(projects.findIndex((project) => project.id === activeId) + 1) % projects.length].id)}><Circle size={9} fill="currentColor" /> Next story: <strong>{projects[(projects.findIndex((project) => project.id === activeId) + 1) % projects.length].title}</strong></button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default CaseStudyAtlas;