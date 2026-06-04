import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Boot } from "@/components/boot";
import { Cursor } from "@/components/cursor";
import { Scramble } from "@/components/scramble";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ARNEL ROY" },
      { name: "description", content: "Encrypted personal archive of a creative technologist. Building systems, breaking rules." },
      { property: "og:title", content: "Arnel Roy" },
      { property: "og:description", content: "Encrypted personal archive of a creative technologist." },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "intro", label: "intro" },
  { id: "experiences", label: "experiences" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

function Index() {
  const [booted, setBooted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const t = () => {
      const d = new Date();
      setTime(
        d.toISOString().replace("T", " ").split(".")[0] + " UTC"
      );
    };
    t();
    const id = setInterval(t, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Boot onDone={() => setBooted(true)} />
      <Cursor />
      <div className="grain" />
      <div className="scanlines" />
      <div className="vignette" />

      {booted && (
        <>
          <TopBar time={time} onNav={scrollTo} />
          <Hero onNav={scrollTo} />
          <Marquee />
          <Experiences />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

/* --------------------------------- TOP BAR --------------------------------- */
function TopBar({ time, onNav }: { time: string; onNav: (id: string) => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#c5ff00] rounded-full blink" />
          <span className="hidden sm:inline">mrreal.dedsys.kernel</span>
          <span className="text-white/40">v15.06.07</span>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-hover
              onClick={() => onNav(n.id)}
              className="group px-3 py-1 hover:bg-white hover:text-black transition-colors"
            >
              <span className="text-white/40 group-hover:text-black">{">"}</span>{" "}
              {n.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="text-white/40">{time}</span>
          <span className="hidden md:inline">node::mumbai</span>
        </div>
      </div>
    </header>
  );
}

/* ----------------------------------- HERO ---------------------------------- */
function Hero({ onNav }: { onNav: (id: string) => void }) {
  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  useEffect(() => {
    const h = (e: MouseEvent) => {
      setMx((e.clientX / window.innerWidth - 0.5) * 20);
      setMy((e.clientY / window.innerHeight - 0.5) * 20);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  return (
    <section id="intro" className="relative min-h-screen pt-24 pb-16 px-4 md:px-8 flex flex-col bg-grid">
      {/* corner brackets */}
      <Brackets />

      {/* floating ascii circle */}
      <div className="absolute right-4 md:right-12 top-32 opacity-40 pointer-events-none">
        <AsciiCircle />
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/50 font-mono mb-6"
        >
          <span className="inline-block w-8 h-px bg-white/40" />
          encrypted personal archive // 003
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ transform: `translate(${mx * 0.4}px, ${my * 0.4}px)` }}
          className="font-display font-black uppercase leading-[0.85] tracking-tighter text-[18vw] md:text-[14vw] lg:text-[11vw]"
        >
          <span className="glitch block" data-text="DEVELOPER">DEVELOPER</span>
          <span className="block text-stroke">.ARNEL_ROY</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 grid md:grid-cols-3 gap-6 max-w-5xl"
        >
          <div className="md:col-span-2">
            <p className="font-mono text-base md:text-lg leading-relaxed text-white/80">
              <span className="text-[#c5ff00]">&gt;</span>{" "}
              <Scramble text="DEVELOPER" /> //{" "}
              <Scramble text="DESIGNER" /> // <Scramble text="CREATOR" />
              <br />
              <span className="text-white/50">
                crafting apps, interfaces, and systems that blend engineering, creativity, and real-world impact.
              </span>
            </p>
          </div>

          <div className="border border-white/20 p-4 font-mono text-[11px] uppercase tracking-wider space-y-1">
            <Row k="status" v="active" accent />
            <Row k="clearance" v="verified" />
            <Row k="node" v="mumbai" />
            <Row k="role" v="Developer" />
            <Row k="domain" v="APPS • UI/UX • MUSIC" />
          </div>
        </motion.div>

        {/* command nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 border border-white/20 bg-black/40 backdrop-blur-sm max-w-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono">
            <span>~mrreal/dedsys/nav.sh</span>
            <span>● ● ●</span>
          </div>
          <div className="p-4 font-mono text-sm space-y-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                data-hover
                onClick={() => onNav(n.id)}
                className="block w-full text-left hover:bg-white hover:text-black px-2 py-1 transition-colors"
              >
                <span className="text-[#c5ff00]">$</span> cd ./{n.label}
              </button>
            ))}
            <div className="px-2 py-1">
              <span className="text-[#c5ff00]">$</span>{" "}
              <span className="inline-block w-2 h-4 bg-white align-middle blink" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* bottom bar */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
        <span>scroll // initiate sequence ↓</span>
        <span>signal: ▮▮▮▮▮▮▯▯</span>
      </div>
    </section>
  );
}

function Row({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-white/40">{k}</span>
      <span className={accent ? "text-[#c5ff00]" : "text-white"}>{v}</span>
    </div>
  );
}

function Brackets() {
  const c = "absolute w-6 h-6 border-white";
  return (
    <>
      <div className={`${c} top-20 left-4 border-t border-l`} />
      <div className={`${c} top-20 right-4 border-t border-r`} />
      <div className={`${c} bottom-4 left-4 border-b border-l`} />
      <div className={`${c} bottom-4 right-4 border-b border-r`} />
    </>
  );
}

function AsciiCircle() {
  return (
    <div className="relative w-40 h-40 md:w-60 md:h-60">
      <div className="absolute inset-0 border border-white/30 rounded-full spin-slow" />
      <div className="absolute inset-4 border border-dashed border-white/20 rounded-full spin-slow" style={{ animationDirection: "reverse" }} />
      <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-white/60 uppercase tracking-widest text-center leading-tight">
        my<br />real<br />ideology<br />###
      </div>
    </div>
  );
}

/* --------------------------------- MARQUEE --------------------------------- */
function Marquee() {
  const items = [
    "STATE LEVEL PROJECT AWARD // RECORDED",
    "RESEARCH PAPER PUBLISHED // VERIFIED",
    "INSTITUTE HEAD // TECHSHALA",
    "VPOES NETWORK",
    "CLYRA // FINAL YEAR PROJECT",
    "BUILDING STUDENT DASHBOARD",
    "DIPLOMA IN IT // 2026",
  ];
  const row = [...items, ...items, ...items];
  return (
    <div className="border-y border-white/20 bg-white text-black py-3 overflow-hidden">
      <div className="marquee">
        <div className="marquee-track font-display font-black uppercase text-2xl md:text-3xl tracking-tighter">
          {row.map((t, i) => (
            <span key={i} className="px-6 flex items-center gap-6">
              {t} <span className="opacity-40">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- EXPERIENCES ------------------------------- */
const EXP = [
  {
    year: "2025 — 2026",
    role: "INSTITUTE HEAD",
    org: "TECHSHALA // VPT",
    desc: "Led technical operations, organized workshops and institute events, and managed planning and execution across multiple student-led initiatives.",
    tags: ["management", "technical leadership", "events", "operations"],
    clearance: "L4",
  },
  {
    year: "2025",
    role: "APP DEVELOPER",
    org: "VIDYALANKAR CONSULTANCY SERVICES",
    desc: "Designed and developed student and examination applications using Flutter. Worked across frontend systems, backend integration, testing, and deployment.",
    tags: ["flutter", "backend", "frontend", "deployment"],
    clearance: "L3",
  },
  {
    year: "2025",
    role: "APP DEVELOPMENT HEAD",
    org: "TECHSHALA // VPT",
    desc: "Conducted app development workshops, organized a student hackathon, and guided teams through mobile app development workflows.",
    tags: ["flutter", "workshops", "hackathon", "leadership"],
    clearance: "L2",
  },
];

function Experiences() {
  return (
    <section id="experiences" className="relative py-24 px-4 md:px-8 border-b border-white/10">
      <SectionHeader idx="02" title="EXPERIENCES" sub="classified employment records // declassified upon request" />

      <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-[200px_1fr] gap-6">
        {/* timeline */}
        <aside className="hidden md:flex flex-col gap-6 font-mono text-xs uppercase tracking-[0.2em] text-white/40 sticky top-24 self-start">
          {EXP.map((e, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white" />
              {e.year.split(" — ")[0]}
            </div>
          ))}
          <div className="flex-1 border-l border-white/20 ml-[3px] mt-2 h-32" />
        </aside>

        <div className="space-y-4">
          {EXP.map((e, i) => (
            <ExpCard key={i} {...e} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpCard({ year, role, org, desc, tags, clearance, idx }: any) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: idx * 0.05 }}
      data-hover
      className="group relative border border-white/15 hover:border-white bg-black/40 transition-colors"
    >
      {/* header strip */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 group-hover:text-white">
        <span>file_{String(idx + 1).padStart(3, "0")}.log</span>
        <span className="flex items-center gap-3">
          <span>clearance: {clearance}</span>
          <span className="w-2 h-2 bg-[#c5ff00] blink" />
        </span>
      </div>

      <div className="grid md:grid-cols-[1fr_auto] gap-6 p-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-white/50 mb-3">
            {year} &middot; {org}
          </div>
          <h3 className="font-display font-black uppercase text-2xl md:text-4xl tracking-tight leading-none">
            <Scramble text={role} trigger="hover" />
          </h3>
          <p className="mt-4 font-mono text-sm text-white/70 max-w-2xl leading-relaxed">
            {desc}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider">
            {tags.map((t: string) => (
              <span key={t} className="border border-white/30 px-2 py-1 text-white/70">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          <div className="text-right space-y-1">
            <div>Learned</div>
          </div>
          <div className="font-display text-6xl text-white/10">
            {String(idx + 1).padStart(2, "0")}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* --------------------------------- PROJECTS -------------------------------- */
const PROJECTS = [
  {
    name: "CLYRA",
    tag: "AI PLATFORM // V1.0",
    desc: "Interview preparation platform simulating aptitude tests, coding rounds, technical interviews, HR interviews, and viva examinations for diploma students.",
    tech: ["react", "python", "ai", "supabase", "LLAMA", "next.js"],
    signal: 9,
    enc: "OWNER VERIFIED",
    nodes: 500,
    span: "md:col-span-2",
  },
  {
    name: "STUDENT DASHBOARD",
    tag: "CAMPUS HUB // V1.0",
    desc: "Centralized student platform bringing notes, resources, and academic services into a single mobile application for easier access across campus.",
    tech: ["flutter", "php", "mysql"],
    signal: 8,
    enc: "AUTH VERIFIED",
    nodes: 1500,
    span: "",
  },
  {
    name: "DIGITAL_CLOCK \n SCREENSAVER",
    tag: "TIME NODE // V1.0",
    desc: "Terminal-inspired fullscreen clock system built for continuous desktop operation. Displays live time with a minimal cyberpunk aesthetic and zero interface clutter.",
    tech: ["python", "tkinter"],
    signal: 7,
    enc: "SYNCED",
    nodes: 24,
    span: "",
  },
  {
    name: "VPOES",
    tag: "SECURE EXAM SYSTEM // V1.0",
    desc: "Mobile examination platform for internal tests and mock exams with authentication, result management, review systems, and anti-app-switch protection.",
    tech: ["flutter", "php", "mysql"],
    signal: 10,
    enc: "SESSION LOCK",
    nodes: 1500,
    span: "md:col-span-2",
  },

];

function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 border-b border-white/10">
      <SectionHeader idx="03" title="PROJECTS" sub="modules from the collective // use at your own risk" />

      <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-3 gap-4">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} {...p} idx={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ name, tag, desc, tech, signal, enc, nodes, span, idx }: any) {
  const bars = Array.from({ length: 10 }, (_, i) => i < signal);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: idx * 0.06 }}
      data-hover
      className={`group relative border border-white/15 hover:border-white bg-black/40 flex flex-col transition-colors ${span}`}
    >
      {/* header */}
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
        <span>./pkg/{String(idx + 1).padStart(2, "0")}</span>
        <span>{tag}</span>
      </div>

      {/* preview area */}
      <div className="relative h-44 border-b border-white/10 overflow-hidden bg-grid">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-display font-black uppercase text-[18vw] md:text-7xl text-white/10 tracking-tighter group-hover:text-white/20 transition-colors">
            {name.split("")[0]}
          </div>
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-mono text-xs uppercase tracking-[0.3em] text-[#c5ff00]">
          <span className="animate-pulse">[ run module ]</span>
        </div>
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-white/40">
          <span>signal</span>
          <span className="flex gap-px">
            {bars.map((on, i) => (
              <span key={i} className={`w-1 h-3 ${on ? "bg-white" : "bg-white/15"}`} />
            ))}
          </span>
        </div>
      </div>

      {/* body */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-display font-black uppercase text-2xl md:text-3xl tracking-tight">
          <Scramble text={name} trigger="hover" />
        </h3>
        <p className="mt-2 font-mono text-xs text-white/60 leading-relaxed flex-1">
          {desc}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-wider border-t border-white/10 pt-3">
          <div className="flex justify-between"><span className="text-white/40">enc</span><span>{enc}</span></div>
          <div className="flex justify-between"><span className="text-white/40">nodes</span><span>{nodes}</span></div>
          <div className="flex justify-between"><span className="text-white/40">status</span><span className="text-[#c5ff00]">live</span></div>
          <div className="flex justify-between"><span className="text-white/40">v</span><span>{tag.split("V")[1]}</span></div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1 font-mono text-[10px] uppercase">
          {tech.map((t: string) => (
            <span key={t} className="border border-white/20 px-1.5 py-0.5 text-white/60">{t}</span>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-[10px] uppercase tracking-[0.3em]">
          <button data-hover className="border border-white/40 py-2 hover:bg-white hover:text-black transition-colors">
            ./live
          </button>
          <button data-hover className="border border-white/40 py-2 hover:bg-white hover:text-black transition-colors">
            ./source
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* --------------------------------- CONTACT --------------------------------- */
function Contact() {
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const channels = [
    { k: "email", v: "arnelroy1506@gmail.com" },
    { k: "github", v: "https://github.com/real-arnel-roy" },
    { k: "linkedin", v: "https://www.linkedin.com/in/arnel-anthony-roy-7a992b2a1/" },
    { k: "instagram", v: "https://www.instagram.com/arnel_for_real/" },
  ];

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8">
      <SectionHeader idx="04" title="CONTACT" sub="open secure channel // end-to-end encrypted" />

      <div className="max-w-5xl mx-auto mt-12 border border-white/20 bg-black/60">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
          <span>~/secure_channel.sh</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#c5ff00] blink" /> connected
          </span>
        </div>

        <div className="grid md:grid-cols-2">
          {/* left: channels */}
          <div className="p-6 border-r border-white/10 space-y-3 font-mono text-sm">
            <div className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-2">
              &gt; available_channels
            </div>
            {channels.map((c) => (
              <a
                key={c.k}
                href="#"
                data-hover
                className="flex items-center justify-between border border-white/15 px-3 py-2 hover:bg-white hover:text-black transition-colors group"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-black">
                  {c.k}
                </span>
                <span className="text-sm">{c.v}</span>
              </a>
            ))}

            <div className="mt-6 text-[10px] uppercase tracking-[0.3em] text-white/40 leading-relaxed">
              transmissions are logged on the relay
              <br />
              for 72 hours then permanently purged.
            </div>
          </div>

          {/* right: form */}
          <form
            className="p-6 space-y-4 font-mono text-sm"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                &gt; identify_self
              </label>
              <input
                required
                placeholder="codename"
                className="w-full bg-transparent border border-white/20 px-3 py-2 outline-none focus:border-white"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                &gt; return_address
              </label>
              <input
                required
                type="email"
                placeholder="you@encrypted.net"
                className="w-full bg-transparent border border-white/20 px-3 py-2 outline-none focus:border-white"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">
                &gt; payload
              </label>
              <textarea
                required
                rows={4}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="// type your message..."
                className="w-full bg-transparent border border-white/20 px-3 py-2 outline-none focus:border-white resize-none"
              />
            </div>
            <button
              data-hover
              type="submit"
              className="w-full border border-white py-3 uppercase tracking-[0.4em] text-xs hover:bg-white hover:text-black transition-colors"
            >
              {sent ? "// transmission complete" : ">> transmit data"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- COMMON --------------------------------- */
function SectionHeader({ idx, title, sub }: { idx: string; title: string; sub: string }) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-end justify-between border-b border-white/10 pb-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2">
            // section {idx}
          </div>
          <h2 className="font-display font-black uppercase text-5xl md:text-7xl tracking-tighter leading-none">
            <Scramble text={title} />
          </h2>
        </div>
        <div className="hidden md:block font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 text-right">
          {sub}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 md:px-8 py-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div>© dedsys — no rights reserved // anti-copyright</div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#c5ff00] blink" />
          channel still open
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 font-mono text-[10px] text-white/20 break-all leading-relaxed">
        {"01000100 01000101 01000100 01010011 01011001 01010011 // building systems / breaking rules / "}
        {"trust no binary / no gods no masters / signal strong / channel alive / "}
        {"if you can read this you are already inside."}
      </div>
    </footer>
  );
}
