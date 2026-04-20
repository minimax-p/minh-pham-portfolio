"use client";

import { useState, useRef, useEffect } from "react";
import { HER_NAME, LEGAL_AT_21 } from "./data";

function sr(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const CONFETTI_COLORS = [
  "#D4A373", "#E07A5F", "#81B29A", "#3D405B",
  "#F2CC8F", "#9B8EA0", "#C4635A", "#6B9080",
];

interface FinaleProps {
  onReplay: () => void;
}

export default function Finale({ onReplay }: FinaleProps) {
  const [copied, setCopied] = useState(false);
  const [listVisible, setListVisible] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setListVisible(true);
      },
      { threshold: 0.2 }
    );
    if (listRef.current) observer.observe(listRef.current);
    return () => observer.disconnect();
  }, []);

  const copyList = () => {
    const text = LEGAL_AT_21.join("\n");
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="finale paper-bg">
      <div className="grid-overlay" />

      {/* confetti */}
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="confetti"
          style={{
            left: `${sr(i * 4 + 100) * 100}%`,
            top: `${sr(i * 4 + 101) * 60}%`,
            background:
              CONFETTI_COLORS[
                Math.floor(sr(i * 4 + 102) * CONFETTI_COLORS.length)
              ],
            animationDelay: `${sr(i * 4 + 103) * 4}s`,
            animationDuration: `${sr(i * 4 + 104) * 2 + 2}s`,
            width: `${sr(i * 4 + 105) * 6 + 4}px`,
            height: `${sr(i * 4 + 105) * 6 + 4}px`,
            borderRadius: sr(i * 4 + 106) > 0.5 ? "50%" : "2px",
          }}
        />
      ))}

      <div className="finale__scroll-container">
        {/* ─── THE LETTER ─── */}
        <div className="letter">
          <div className="letter__inner">
            <p className="finale__emoji">🎂</p>
            <h1 className="letter__title">
              Happy 21st Birthday, {HER_NAME}
            </h1>
            <div className="letter__divider" />
            <p className="letter__date">April 20, 2026</p>
            <p className="letter__body">
              Dear Giang,
            </p>
            <p className="letter__body">

              I've known you for 6 years now, and every year it's like I know a different version of you, both good and bad. But you're a girl who just turned 21, and you're still figuring things out. That's normal. The fact that you're aware of that and actually trying is already admirable. We're all striving to be better people at the end of the day, me and you alike. It's going to be a long journey, but just because it's long doesn't mean it's not achievable. I think you have a good heart with good intentions, and eventually your actions will align with that. And one thing that’s been consistent is that no matter how much doubt you might have, you've always shown up. That is inspirational.
            </p>
            <p className="letter__body">
              You’re turning 21, congratulations! You can now take on more responsibilities!
            </p>
            <p className="letter__body">
              Just kidding, hehe. But I think that as we grow as people, we need more challenges to make us into better people. These are opportunities to grow our capacities as people. I hope you do not shy from these challenges. I wish that you do well in all things that you’re already doing now, and more: your two jobs, your schoolwork, and your upcoming internship. And I also wish that you can slow down sometimes to appreciate the little things and the people around you. And finally, I wish you a new year of constant self-discovery, reinvention, and moral progression, even though these things won’t come easy.
            </p>
            <p className="letter__sig">— with love ❤️</p>
          </div>
        </div>

        {/* scroll hint */}
        <div className="scroll-hint">
          <span>scroll for more</span>
          <span className="scroll-hint__arrow">↓</span>
        </div>

        {/* ─── LEGAL AT 21 ─── */}
        <div
          ref={listRef}
          className={`legal ${listVisible ? "legal--in" : ""}`}
        >
          <h2 className="legal__title">
            Things you can legally do now
          </h2>
          <p className="legal__sub">
            (a very important document)
          </p>
          <ul className="legal__list">
            {LEGAL_AT_21.map((item, i) => (
              <li
                key={i}
                className="legal__item"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="legal__copy" onClick={copyList}>
            {copied ? "copied ✓" : "copy list 📋"}
          </button>
        </div>

        {/* replay */}
        <div style={{ textAlign: "center", paddingBottom: "4rem" }}>
          <button className="finale__replay" onClick={onReplay}>
            replay ↻
          </button>
        </div>
      </div>
    </div>
  );
}
