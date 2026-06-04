import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const LINES = [
  "> INITIALIZING DEDSYS v3.14.1...",
  "> LOADING KERNEL MODULES........ [OK]",
  "> MOUNTING /dev/secure ........... [OK]",
  "> BYPASSING FIREWALL .......... [DONE]",
  "> DECRYPTING IDENTITY MATRIX ... [OK]",
  "> ESTABLISHING SECURE TUNNEL .. [OK]",
  "> NODE :: MUMBAI/IN .............. [LIVE]",
  "> CLEARANCE LEVEL ........... [VERIFIED]",
  "> ACCESS GRANTED. WELCOME, OPERATOR.",
];

export function Boot({ onDone }: { onDone: () => void }) {
  const [shown, setShown] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    setShown([]);
    setDone(false);
    let i = 0;
    let doneTimer: ReturnType<typeof setTimeout> | undefined;
    let finishTimer: ReturnType<typeof setTimeout> | undefined;
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

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] bg-black flex flex-col p-6 md:p-10 font-mono text-sm md:text-base text-white crt-flicker"
        >
          <div className="flex items-center justify-between text-xs text-white/50 uppercase tracking-[0.3em] border-b border-white/10 pb-3">
            <span>dedsys // terminal</span>
            <span className="blink">●</span>
          </div>
          <div className="mt-6 space-y-1">
            {shown.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="whitespace-pre"
              >
                {l}
              </motion.div>
            ))}
            <div className="inline-block w-2 h-4 bg-white align-middle blink" />
          </div>
          <div className="mt-auto text-[10px] uppercase tracking-[0.4em] text-white/30">
            press ctrl+c to abort // do not power off
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
