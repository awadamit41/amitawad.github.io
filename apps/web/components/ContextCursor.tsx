"use client";

import { useEffect, useRef, useState } from "react";

export function ContextCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer:fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(fine.matches && !reduced.matches);
    sync();
    fine.addEventListener("change", sync); reduced.addEventListener("change", sync);
    if (!fine.matches || reduced.matches) return () => { fine.removeEventListener("change", sync); reduced.removeEventListener("change", sync); };

    let raf = 0;
    let x = -100, y = -100, tx = -100, ty = -100;
    const move = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; };
    const over = (e: Event) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("a,button,[data-cursor]");
      const text = target?.dataset.cursor ?? (target?.tagName === "A" ? "OPEN" : "");
      label.current!.textContent = text;
      cursor.current?.classList.toggle("is-active", Boolean(target));
    };
    const loop = () => {
      x += (tx - x) * .18; y += (ty - y) * .18;
      if (cursor.current) cursor.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", move); document.removeEventListener("pointerover", over); fine.removeEventListener("change", sync); reduced.removeEventListener("change", sync); };
  }, []);

  if (!enabled) return null;
  return <div ref={cursor} className="context-cursor" aria-hidden="true"><span ref={label} /></div>;
}
