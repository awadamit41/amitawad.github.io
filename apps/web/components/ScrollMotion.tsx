"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        y: 42,
        opacity: 0,
        duration: 1,
        stagger: 0.09,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".section-heading, .project-card, .timeline-item, .achievement-card, .contact-block").forEach((el) => {
        gsap.from(el, {
          y: 45,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });

      gsap.to(".hero-grid", {
        yPercent: 14,
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);
  return null;
}
