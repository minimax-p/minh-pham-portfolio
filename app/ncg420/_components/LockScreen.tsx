"use client";

import { useState, useCallback, useRef } from "react";
import { BATCH_CODE } from "./data";

interface LockScreenProps {
  onUnlock: () => void;
}

const CODE_LENGTH = 7;

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [digits, setDigits] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [shake, setShake] = useState(false);
  const [unlocking, setUnlocking] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    const next = [...digits];
    next[index] = value.toUpperCase();
    setDigits(next);

    // auto-advance to next box
    if (value && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // auto-submit when all filled
    const full = next.join("");
    if (full.length === CODE_LENGTH && !next.includes("")) {
      setTimeout(() => trySubmit(full), 150);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "Enter") {
      trySubmit(digits.join(""));
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").toUpperCase().slice(0, CODE_LENGTH);
    const next = [...digits];
    for (let i = 0; i < pasted.length; i++) {
      next[i] = pasted[i];
    }
    setDigits(next);
    const focusIdx = Math.min(pasted.length, CODE_LENGTH - 1);
    inputRefs.current[focusIdx]?.focus();
    if (pasted.length === CODE_LENGTH) {
      setTimeout(() => trySubmit(next.join("")), 150);
    }
  };

  const trySubmit = useCallback(
    (code: string) => {
      if (code === BATCH_CODE) {
        setUnlocking(true);
        setTimeout(onUnlock, 1600);
      } else {
        setShake(true);
        setTimeout(() => setShake(false), 600);
      }
    },
    [onUnlock]
  );

  return (
    <div className={`lock paper-bg ${unlocking ? "lock--out" : ""}`}>
      <div className="grid-overlay" />
      <div className="lock__body">
        <div className="lock__stamp">CLASSIFIED</div>
        <h1 className="lock__title">Specimen File</h1>
        <p className="lock__desc">Authorization required to proceed</p>
        <div className={`passcode ${shake ? "shake" : ""}`}>
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => { inputRefs.current[i] = el; }}
              className="passcode__box"
              type="text"
              maxLength={1}
              value={d}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onPaste={i === 0 ? handlePaste : undefined}
              autoFocus={i === 0}
              spellCheck={false}
              autoComplete="off"
            />
          ))}
        </div>
        <p className="lock__hint">hint: check your gift ✨</p>
      </div>
    </div>
  );
}
