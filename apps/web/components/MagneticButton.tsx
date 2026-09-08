"use client";

import { useEffect, useRef, useState } from "react";

export function MagneticButton({ children, href, copy }: { children: React.ReactNode; href?: string; copy?: boolean }) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const move = (e: React.PointerEvent) => {
    if (reduced || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.14;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.14;
    ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };
  const leave = () => { if (ref.current) ref.current.style.transform = "translate3d(0,0,0)"; };
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText("amit41thinkpad@gmail.com"); setCopied(true); window.setTimeout(() => setCopied(false), 1600); } catch {}
  };

  if (copy) return <button data-cursor="COPY" ref={ref} className="button button--magnetic" onClick={handleCopy} onPointerMove={move} onPointerLeave={leave}>{copied ? "COPIED" : children}</button>;
  return <a data-cursor="OPEN" ref={ref} className="button button--magnetic" href={href} onPointerMove={move} onPointerLeave={leave}>{children}</a>;
}
