"use client";

import { useState, useEffect } from "react";
import { SPECIMENS, HER_NAME } from "./_components/data";
import STYLES from "./_components/styles";
import LockScreen from "./_components/LockScreen";
import Sticker from "./_components/Sticker";
import SpecimenModal from "./_components/SpecimenModal";
import Finale from "./_components/Finale";

export default function BirthdayPage() {
  const [mounted, setMounted] = useState(false);
  const [tooSmall, setTooSmall] = useState(false);
  const [locked, setLocked] = useState(true);
  const [ready, setReady] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [visited, setVisited] = useState<Set<number>>(new Set());
  const [finale, setFinale] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setTooSmall(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (locked) return;
    SPECIMENS.forEach((spec) => {
      spec.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, [locked]);

  const handleUnlock = () => {
    setLocked(false);
    setTimeout(() => setReady(true), 100);
  };

  const handleStickerClick = (id: number) => {
    setSelected(id);
    setVisited((prev) => new Set(prev).add(id));
  };

  const handleCloseModal = () => setSelected(null);

  const handleReplay = () => {
    setFinale(false);
    setVisited(new Set());
    setSelected(null);
  };

  const activeSpecimen = SPECIMENS.find((s) => s.id === selected);
  const allDone = visited.size === SPECIMENS.length;

  if (!mounted) return null;

  if (tooSmall) {
    return (
      <>
        <style>{STYLES}</style>
        <div className="gate paper-bg">
          <div className="grid-overlay" />
          <p style={{ fontSize: "2.5rem", marginBottom: "0.8rem" }}>🖥️</p>
          <h1 className="gate__title">Desktop only.</h1>
          <p className="gate__sub">
            The developer had no time for
            <br />
            fucking mobile phones.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{STYLES}</style>

      {locked && <LockScreen onUnlock={handleUnlock} />}

      {!locked && (
        <div className={`surface paper-bg ${ready ? "surface--in" : ""}`}>
          <div className="grid-overlay" />

          <header className="surface__head">
            <span className="surface__pre">✦ Field Notes</span>
            <h1 className="surface__title">{HER_NAME}&apos;s Collection</h1>
            <p className="surface__sub">
              {allDone
                ? "all specimens cataloged ✓"
                : `${visited.size} / ${SPECIMENS.length} specimens — click to examine`}
            </p>
          </header>

          {SPECIMENS.map((spec) => (
            <Sticker
              key={spec.id}
              specimen={spec}
              visited={visited.has(spec.id)}
              onClick={() => handleStickerClick(spec.id)}
            />
          ))}

          {allDone && !finale && (
            <button
              className="surface__trigger"
              onClick={() => setFinale(true)}
            >
              one last thing&hellip;
            </button>
          )}
        </div>
      )}

      {activeSpecimen && (
        <SpecimenModal
          specimen={activeSpecimen}
          onClose={handleCloseModal}
        />
      )}

      {finale && <Finale onReplay={handleReplay} />}
    </>
  );
}
