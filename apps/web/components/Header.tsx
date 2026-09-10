"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "../data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    const ids = ["about", "engineering", "projects", "experience", "entrepreneurship", "dharma", "achievement", "contact"];
    if (pathname !== "/") {
      setActive(pathname.slice(1));
      return () => {
        window.removeEventListener("keydown", onKeyDown);
      };
    }
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -65%" });
    ids.forEach((id) => document.getElementById(id) && observer.observe(document.getElementById(id)!));
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [pathname]);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" onClick={() => setOpen(false)} aria-label="Amit Awad home">{site.name.split(" ")[0].toUpperCase()}</Link>
      <button className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((v) => !v)}>
        <span>{open ? "CLOSE" : "MENU"}</span>
      </button>
      <nav id="primary-navigation" className={open ? "is-open" : ""} aria-label="Primary navigation">
        {nav.map((item) => {
          const id = item.href.split("#")[1] || item.label.toLowerCase();
          return <Link className={active === id ? "is-active" : ""} key={item.label} href={item.href} onClick={() => setOpen(false)} aria-current={active === id ? "page" : undefined}>{item.label}</Link>;
        })}
      </nav>
    </header>
  );
}
