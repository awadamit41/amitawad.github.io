"use client";

import dynamic from "next/dynamic";

const HeroVisual = dynamic(
  () => import("./HeroVisual").then((mod) => mod.HeroVisual),
  {
    ssr: false,
    loading: () => (
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-webgl" />
        <div className="hero-grid" />
        <div className="hero-orbit hero-orbit--one" />
        <div className="hero-orbit hero-orbit--two" />
        <span className="hero-node hero-node--one" />
        <span className="hero-node hero-node--two" />
        <div className="hero-system-label">
          SYSTEM / 01 — CONTINUOUS LOOP
        </div>
      </div>
    ),
  }
);

export function HeroVisualLoader() {
  return <HeroVisual />;
}