import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as emailjs } from "../_libs/emailjs__browser.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { M as Mail, G as Github, L as Linkedin, I as Instagram, C as Check, a as Copy, E as ExternalLink } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const LINES = [
  "> INITIALIZING DEDSYS v3.14.1...",
  "> LOADING KERNEL MODULES........ [OK]",
  "> MOUNTING /dev/secure ........... [OK]",
  "> BYPASSING FIREWALL .......... [DONE]",
  "> DECRYPTING IDENTITY MATRIX ... [OK]",
  "> ESTABLISHING SECURE TUNNEL .. [OK]",
  "> NODE :: MUMBAI/IN .............. [LIVE]",
  "> CLEARANCE LEVEL ........... [VERIFIED]",
  "> ACCESS GRANTED. WELCOME, OPERATOR."
];
function Boot({ onDone }) {
  const [shown, setShown] = reactExports.useState([]);
  const [done, setDone] = reactExports.useState(false);
  const onDoneRef = reactExports.useRef(onDone);
  reactExports.useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);
  reactExports.useEffect(() => {
    setShown([]);
    setDone(false);
    let i = 0;
    let doneTimer;
    let finishTimer;
    const id = setInterval(() => {
      setShown((s) => [...s, LINES[i]]);
      i++;
      if (i >= LINES.length) {
        clearInterval(id);
        doneTimer = setTimeout(() => {
          setDone(true);
          finishTimer = setTimeout(() => onDoneRef.current(), 400);
        }, 500);
      }
    }, 180);
    return () => {
      clearInterval(id);
      if (doneTimer) clearTimeout(doneTimer);
      if (finishTimer) clearTimeout(finishTimer);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !done && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, filter: "blur(8px)" },
      transition: { duration: 0.4 },
      className: "fixed inset-0 z-[200] bg-black flex flex-col p-6 md:p-10 font-mono text-sm md:text-base text-white crt-flicker",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-white/50 uppercase tracking-[0.3em] border-b border-white/10 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "dedsys // terminal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink", children: "●" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-1", children: [
          shown.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -8 },
              animate: { opacity: 1, x: 0 },
              className: "whitespace-pre",
              children: l
            },
            i
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-block w-2 h-4 bg-white align-middle blink" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto text-[10px] uppercase tracking-[0.4em] text-white/30", children: "press ctrl+c to abort // do not power off" })
      ]
    }
  ) });
}
function Cursor() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let x = 0, y = 0, tx = 0, ty = 0;
    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const over = (e) => {
      const t = e.target;
      if (t.closest("a, button, [data-hover]")) el.classList.add("hover");
      else el.classList.remove("hover");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    let raf = 0;
    const tick = () => {
      x += (tx - x) * 0.25;
      y += (ty - y) * 0.25;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "cursor-dot" });
}
const CHARS = "!<>-_\\/[]{}—=+*^?#01ABCDEF$%@";
function Scramble({ text, className, trigger = "mount" }) {
  const [out, setOut] = reactExports.useState(text);
  const raf = reactExports.useRef(0);
  const running = reactExports.useRef(false);
  const run = () => {
    if (running.current) return;
    running.current = true;
    const start = performance.now();
    const dur = 600;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      let s = "";
      for (let i = 0; i < text.length; i++) {
        if (i < p * text.length) s += text[i];
        else if (text[i] === " ") s += " ";
        else s += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setOut(s);
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else {
        setOut(text);
        running.current = false;
      }
    };
    raf.current = requestAnimationFrame(tick);
  };
  reactExports.useEffect(() => {
    if (trigger === "mount") run();
    return () => cancelAnimationFrame(raf.current);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className, onMouseEnter: trigger === "hover" ? run : void 0, children: out });
}
const EJS_SERVICE = "service_ipampcu";
const EJS_TEMPLATE = "template_2dd7j7j";
const EJS_KEY = "57FIQP16lT0JSGtPL";
const NAV = [{
  id: "intro",
  label: "intro"
}, {
  id: "experiences",
  label: "experiences"
}, {
  id: "projects",
  label: "projects"
}, {
  id: "contact",
  label: "contact"
}];
const PROJECTS = [{
  name: "CLYRA",
  tag: "AI PLATFORM // V1.0",
  desc: "Interview preparation platform simulating aptitude tests, coding rounds, technical interviews, HR interviews, and viva examinations for diploma students.",
  tech: ["react", "python", "ai", "supabase", "LLAMA", "next.js"],
  signal: 9,
  enc: "OWNER VERIFIED",
  nodes: 500,
  span: "md:col-span-2",
  liveEnabled: false,
  sourceEnabled: true,
  sourceUrl: "https://github.com/AradhyaPatil/CLYRA-ai-interview-simulator",
  image: "/projects/clyra.jpeg"
}, {
  name: "STUDENT DASHBOARD",
  tag: "CAMPUS HUB // V1.0",
  desc: "Centralized student platform bringing notes, resources, and academic services into a single mobile application for easier access across campus.",
  tech: ["flutter", "php", "mysql"],
  signal: 8,
  enc: "AUTH VERIFIED",
  nodes: 1500,
  span: "",
  liveEnabled: false,
  sourceEnabled: false,
  image: "/projects/student_dash.jpeg"
}, {
  name: "DIGITAL_CLOCK \n SCREENSAVER",
  tag: "TIME NODE // V1.0",
  desc: "Terminal-inspired fullscreen clock system built for continuous desktop operation. Displays live time with a minimal cyberpunk aesthetic and zero interface clutter.",
  tech: ["python", "tkinter"],
  signal: 7,
  enc: "SYNCED",
  nodes: 24,
  span: "",
  liveEnabled: true,
  liveUrl: "https://github.com/real-arnel-roy/digi_clock/releases/tag/V1.0.0",
  sourceEnabled: true,
  sourceUrl: "https://github.com/real-arnel-roy/digi_clock",
  image: "/projects/digi_clock.jpeg"
}, {
  name: "VPOES",
  tag: "SECURE EXAM SYSTEM // V1.0",
  desc: "Mobile examination platform for internal tests and mock exams with authentication, result management, review systems, and anti-app-switch protection.",
  tech: ["flutter", "php", "mysql"],
  signal: 10,
  enc: "SESSION LOCK",
  nodes: 1500,
  span: "md:col-span-2",
  liveEnabled: false,
  sourceEnabled: false,
  image: "/projects/vpoes2.jpeg"
}];
const EMAIL = "arnelroy1506@gmail.com";
const SOCIALS = [{
  key: "email",
  label: "EMAIL",
  url: `mailto:${EMAIL}`,
  icon: Mail,
  isEmail: true
}, {
  key: "github",
  label: "GITHUB",
  url: "https://github.com/real-arnel-roy",
  icon: Github
}, {
  key: "linkedin",
  label: "LINKEDIN",
  url: "https://www.linkedin.com/in/arnel-anthony-roy-7a992b2a1/",
  icon: Linkedin
}, {
  key: "instagram",
  label: "INSTAGRAM",
  url: "https://www.instagram.com/arnel_for_real/",
  icon: Instagram
}];
function Index() {
  const [booted, setBooted] = reactExports.useState(false);
  const [time, setTime] = reactExports.useState("");
  reactExports.useEffect(() => {
    const t = () => {
      const d = /* @__PURE__ */ new Date();
      setTime(d.toISOString().replace("T", " ").split(".")[0] + " UTC");
    };
    t();
    const id = setInterval(t, 1e3);
    return () => clearInterval(id);
  }, []);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-black text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Boot, { onDone: () => setBooted(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scanlines" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "vignette" }),
    booted && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { time, onNav: scrollTo }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { onNav: scrollTo }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experiences, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] });
}
function TopBar({
  time,
  onNav
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 md:px-8 py-3 text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-[#c5ff00] rounded-full blink" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "mrreal.dedsys.kernel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "v15.06.07" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { "data-hover": true, onClick: () => onNav(n.id), className: "group px-3 py-1 hover:bg-white hover:text-black transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 group-hover:text-black", children: ">" }),
      " ",
      n.label
    ] }, n.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: time }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "node::mumbai" })
    ] })
  ] }) });
}
function Hero({
  onNav
}) {
  const [mx, setMx] = reactExports.useState(0);
  const [my, setMy] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const h = (e) => {
      setMx((e.clientX / window.innerWidth - 0.5) * 20);
      setMy((e.clientY / window.innerHeight - 0.5) * 20);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "intro", className: "relative min-h-screen pt-24 pb-16 px-4 md:px-8 flex flex-col bg-grid", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Brackets, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 md:right-12 top-32 opacity-40 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AsciiCircle, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.2
      }, className: "flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-white/50 font-mono mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-8 h-px bg-white/40" }),
        "encrypted personal archive // 003"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.4
      }, style: {
        transform: `translate(${mx * 0.4}px, ${my * 0.4}px)`
      }, className: "font-display font-black uppercase leading-[0.85] tracking-tighter text-[18vw] md:text-[14vw] lg:text-[11vw]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glitch block", "data-text": "DEVELOPER", children: "DEVELOPER" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-stroke", children: ".ARNEL_ROY" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.8
      }, className: "mt-8 grid md:grid-cols-3 gap-6 max-w-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-base md:text-lg leading-relaxed text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c5ff00]", children: ">" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Scramble, { text: "DEVELOPER" }),
          " //",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Scramble, { text: "DESIGNER" }),
          " // ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Scramble, { text: "CREATOR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50", children: "crafting apps, interfaces, and systems that blend engineering, creativity, and real-world impact." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-white/20 p-4 font-mono text-[11px] uppercase tracking-wider space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "status", v: "active", accent: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "clearance", v: "verified" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "node", v: "mumbai" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "role", v: "Developer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "domain", v: "APPS • UI/UX • MUSIC" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 1
      }, className: "mt-12 border border-white/20 bg-black/40 backdrop-blur-sm max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-white/40 font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "~mrreal/dedsys/nav.sh" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "● ● ●" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 font-mono text-sm space-y-1", children: [
          NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { "data-hover": true, onClick: () => onNav(n.id), className: "block w-full text-left hover:bg-white hover:text-black px-2 py-1 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c5ff00]", children: "$" }),
            " cd ./",
            n.label
          ] }, n.id)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-2 py-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c5ff00]", children: "$" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-4 bg-white align-middle blink" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "scroll // initiate sequence ↓" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "signal: ▮▮▮▮▮▮▯▯" })
    ] })
  ] });
}
function Row({
  k,
  v,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: accent ? "text-[#c5ff00]" : "text-white", children: v })
  ] });
}
function Brackets() {
  const c = "absolute w-6 h-6 border-white";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${c} top-20 left-4 border-t border-l` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${c} top-20 right-4 border-t border-r` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${c} bottom-4 left-4 border-b border-l` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${c} bottom-4 right-4 border-b border-r` })
  ] });
}
function AsciiCircle() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-40 h-40 md:w-60 md:h-60", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 border border-white/30 rounded-full spin-slow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-4 border border-dashed border-white/20 rounded-full spin-slow", style: {
      animationDirection: "reverse"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex items-center justify-center font-mono text-[10px] text-white/60 uppercase tracking-widest text-center leading-tight", children: [
      "my",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "real",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "ideology",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "###"
    ] })
  ] });
}
function Marquee() {
  const items = ["STATE LEVEL PROJECT AWARD // RECORDED", "RESEARCH PAPER PUBLISHED // VERIFIED", "INSTITUTE HEAD // TECHSHALA", "VPOES NETWORK", "CLYRA // FINAL YEAR PROJECT", "BUILDING STUDENT DASHBOARD", "DIPLOMA IN IT // 2026"];
  const row = [...items, ...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-white/20 bg-white text-black py-3 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track font-display font-black uppercase text-2xl md:text-3xl tracking-tighter", children: row.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-6 flex items-center gap-6", children: [
    t,
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "/" })
  ] }, i)) }) }) });
}
const EXP = [{
  year: "2025 — 2026",
  role: "INSTITUTE HEAD",
  org: "TECHSHALA // VPT",
  desc: "Led technical operations, organized workshops and institute events, and managed planning and execution across multiple student-led initiatives.",
  tags: ["management", "technical leadership", "events", "operations"],
  clearance: "L4"
}, {
  year: "2025",
  role: "APP DEVELOPER",
  org: "VIDYALANKAR CONSULTANCY SERVICES",
  desc: "Designed and developed student and examination applications using Flutter. Worked across frontend systems, backend integration, testing, and deployment.",
  tags: ["flutter", "backend", "frontend", "deployment"],
  clearance: "L3"
}, {
  year: "2025",
  role: "APP DEVELOPMENT HEAD",
  org: "TECHSHALA // VPT",
  desc: "Conducted app development workshops, organized a student hackathon, and guided teams through mobile app development workflows.",
  tags: ["flutter", "workshops", "hackathon", "leadership"],
  clearance: "L2"
}];
function Experiences() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "experiences", className: "relative py-24 px-4 md:px-8 border-b border-white/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { idx: "02", title: "EXPERIENCES", sub: "classified employment records // declassified upon request" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto mt-12 grid md:grid-cols-[200px_1fr] gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden md:flex flex-col gap-6 font-mono text-xs uppercase tracking-[0.2em] text-white/40 sticky top-24 self-start", children: [
        EXP.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-white" }),
          e.year.split(" — ")[0]
        ] }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 border-l border-white/20 ml-[3px] mt-2 h-32" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: EXP.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ExpCard, { ...e, idx: i }, i)) })
    ] })
  ] });
}
function ExpCard({
  year,
  role,
  org,
  desc,
  tags,
  clearance,
  idx
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { initial: {
    opacity: 0,
    y: 20
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-80px"
  }, transition: {
    delay: idx * 0.05
  }, "data-hover": true, className: "group relative border border-white/15 hover:border-white bg-black/40 transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 group-hover:text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "file_",
        String(idx + 1).padStart(3, "0"),
        ".log"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "clearance: ",
          clearance
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-[#c5ff00] blink" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1fr_auto] gap-6 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-white/50 mb-3", children: [
          year,
          " · ",
          org
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black uppercase text-2xl md:text-4xl tracking-tight leading-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scramble, { text: role, trigger: "hover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-mono text-sm text-white/70 max-w-2xl leading-relaxed", children: desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider", children: tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border border-white/30 px-2 py-1 text-white/70", children: t }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex flex-col items-end justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right space-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Learned" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl text-white/10", children: String(idx + 1).padStart(2, "0") })
      ] })
    ] })
  ] });
}
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "relative py-24 px-4 md:px-8 border-b border-white/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { idx: "03", title: "PROJECTS", sub: "modules from the collective // use at your own risk" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto mt-12 grid md:grid-cols-3 gap-4", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { ...p, idx: i }, i)) })
  ] });
}
function ProjectCard({
  name,
  tag,
  desc,
  tech,
  signal,
  enc,
  nodes,
  span,
  liveEnabled,
  liveUrl,
  sourceEnabled,
  sourceUrl,
  image,
  idx
}) {
  const bars = Array.from({
    length: 10
  }, (_, i) => i < signal);
  const hasButtons = liveEnabled || sourceEnabled;
  const [imgError, setImgError] = reactExports.useState(false);
  const showImage = !!image && !imgError;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 20
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-80px"
  }, transition: {
    delay: idx * 0.06
  }, "data-hover": true, className: `group relative border border-white/15 hover:border-white bg-black/40 flex flex-col transition-colors ${span}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "./pkg/",
        String(idx + 1).padStart(2, "0")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tag })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 border-b border-white/10 overflow-hidden bg-grid", children: [
      showImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: image, alt: name, onError: () => setImgError(true), className: "absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black uppercase text-[18vw] md:text-7xl text-white/10 tracking-tighter group-hover:text-white/20 transition-colors", children: name.split("")[0] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-mono text-xs uppercase tracking-[0.3em] text-[#c5ff00]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-pulse", children: "[ run module ]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-2 left-2 right-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-white/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "signal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex gap-px", children: bars.map((on, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-1 h-3 ${on ? "bg-white" : "bg-white/15"}` }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex-1 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-black uppercase text-2xl md:text-3xl tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scramble, { text: name, trigger: "hover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-mono text-xs text-white/60 leading-relaxed flex-1", children: desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-wider border-t border-white/10 pt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "enc" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: enc })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "nodes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: nodes })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#c5ff00]", children: "live" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40", children: "v" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tag.split("V")[1] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1 font-mono text-[10px] uppercase", children: tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border border-white/20 px-1.5 py-0.5 text-white/60", children: t }, t)) }),
      hasButtons && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mt-4 grid gap-2 font-mono text-[10px] uppercase tracking-[0.3em] ${liveEnabled && sourceEnabled ? "grid-cols-2" : "grid-cols-1"}`, children: [
        liveEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: liveUrl, target: "_blank", rel: "noopener noreferrer", "data-hover": true, className: "flex items-center justify-center gap-2 border border-white/40 py-2 hover:bg-white hover:text-black transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 10 }),
          "./live"
        ] }),
        sourceEnabled && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: sourceUrl, target: "_blank", rel: "noopener noreferrer", "data-hover": true, className: "flex items-center justify-center gap-2 border border-white/40 py-2 hover:bg-white hover:text-black transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 10 }),
          "./source"
        ] })
      ] })
    ] })
  ] });
}
function Contact() {
  const formRef = reactExports.useRef(null);
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [msg, setMsg] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("idle");
  const [copied, setCopied] = reactExports.useState(false);
  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending" || status === "sent") return;
    setStatus("sending");
    try {
      await emailjs.send(EJS_SERVICE, EJS_TEMPLATE, {
        from_name: name,
        from_email: email,
        message: msg
      }, {
        publicKey: EJS_KEY
      });
      setStatus("sent");
      setName("");
      setEmail("");
      setMsg("");
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4e3);
    }
  };
  const btnLabel = {
    idle: ">> transmit data",
    sending: "// transmitting...",
    sent: "// transmission complete",
    error: "// transmission failed — retry"
  }[status];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative py-24 px-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { idx: "04", title: "CONTACT", sub: "open secure channel // end-to-end encrypted" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto mt-12 border border-white/20 bg-black/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "~/secure_channel.sh" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-[#c5ff00] blink" }),
          " connected"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-r border-white/10 space-y-2 font-mono text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/40 text-[10px] uppercase tracking-[0.3em] mb-3", children: "> available_channels" }),
          SOCIALS.map((s) => {
            const Icon = s.icon;
            const isEmail = s.isEmail;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: s.url, target: isEmail ? void 0 : "_blank", rel: isEmail ? void 0 : "noopener noreferrer", "data-hover": true, className: "group flex items-center justify-between border border-white/15 px-3 py-2.5 hover:bg-white hover:text-black transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 13, className: "text-white/40 group-hover:text-black transition-colors flex-shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-black transition-colors", children: s.label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs truncate max-w-[160px] md:max-w-[200px]", children: isEmail ? EMAIL : s.url.replace(/^https?:\/\//, "") }),
                isEmail && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleCopyEmail, "data-hover": true, title: "Copy email", className: "flex-shrink-0 flex items-center gap-1 border border-white/30 group-hover:border-black/30 px-1.5 py-0.5 text-[9px] uppercase tracking-wider hover:bg-black/10 transition-colors", children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 8 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "COPIED" })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 8 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "COPY" })
                ] }) })
              ] })
            ] }, s.key);
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 text-[10px] uppercase tracking-[0.3em] text-white/40 leading-relaxed", children: [
            "transmissions are logged on the relay",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "for 72 hours then permanently purged."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { ref: formRef, className: "p-6 space-y-4 font-mono text-sm", onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2", children: "> identify_self" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: name, onChange: (e) => setName(e.target.value), placeholder: "codename", className: "w-full bg-transparent border border-white/20 px-3 py-2 outline-none focus:border-white" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2", children: "> return_address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@encrypted.net", className: "w-full bg-transparent border border-white/20 px-3 py-2 outline-none focus:border-white" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2", children: "> payload" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 4, value: msg, onChange: (e) => setMsg(e.target.value), placeholder: "// type your message...", className: "w-full bg-transparent border border-white/20 px-3 py-2 outline-none focus:border-white resize-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "data-hover": true, type: "submit", disabled: status === "sending" || status === "sent", className: `w-full border py-3 uppercase tracking-[0.4em] text-xs transition-colors ${status === "sent" ? "border-[#c5ff00] text-[#c5ff00] cursor-default" : status === "error" ? "border-red-500 text-red-500 cursor-default" : status === "sending" ? "border-white/40 text-white/40 cursor-wait" : "border-white hover:bg-white hover:text-black"}`, children: btnLabel })
        ] })
      ] })
    ] })
  ] });
}
function SectionHeader({
  idx,
  title,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between border-b border-white/10 pb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2", children: [
        "// section ",
        idx
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black uppercase text-5xl md:text-7xl tracking-tighter leading-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scramble, { text: title }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 text-right", children: sub })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-white/10 px-4 md:px-8 py-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© dedsys — no rights reserved // anti-copyright" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-[#c5ff00] blink" }),
        "channel still open"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto mt-6 font-mono text-[10px] text-white/20 break-all leading-relaxed", children: [
      "01000100 01000101 01000100 01010011 01011001 01010011 // building systems / breaking rules / ",
      "trust no binary / no gods no masters / signal strong / channel alive / ",
      "if you can read this you are already inside."
    ] })
  ] });
}
export {
  Index as component
};
