import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#01ABCDEF$%@";

export function Scramble({ text, className, trigger = "mount" }: { text: string; className?: string; trigger?: "mount" | "hover" }) {
  const [out, setOut] = useState(text);
  const raf = useRef(0);
  const running = useRef(false);

  const run = () => {
    if (running.current) return;
    running.current = true;
    const start = performance.now();
    const dur = 600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      let s = "";
      for (let i = 0; i < text.length; i++) {
        if (i < p * text.length) s += text[i];
        else if (text[i] === " ") s += " ";
        else s += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setOut(s);
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else { setOut(text); running.current = false; }
    };
    raf.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    if (trigger === "mount") run();
    return () => cancelAnimationFrame(raf.current);
    // eslint-disable-next-line
  }, []);

  return (
    <span className={className} onMouseEnter={trigger === "hover" ? run : undefined}>
      {out}
    </span>
  );
}
