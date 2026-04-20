"use client";

import { useState } from "react";
import { Specimen } from "./data";

const FALLBACK_EMOJI = ["🍦", "💛", "🍓", "🍵", "✨", "🌙", "🎂"];

interface StickerProps {
    specimen: Specimen;
    visited: boolean;
    onClick: () => void;
}

export default function Sticker({ specimen, visited, onClick }: StickerProps) {
    const [imgFailed, setImgFailed] = useState(false);

    return (
        <button
            className={`sticker ${visited ? "sticker--done" : ""}`}
            style={{
                left: `${specimen.x}%`,
                top: `${specimen.y}%`,
                transform: `rotate(${specimen.rotate}deg)`,
            }}
            onClick={onClick}
        >
            {imgFailed ? (
                <div className="sticker__fallback">
                    {FALLBACK_EMOJI[specimen.id - 1] || "🔬"}
                </div>
            ) : (
                <img
                    className="sticker__img"
                    src={specimen.sticker}
                    alt={specimen.label}
                    draggable={false}
                    onError={() => setImgFailed(true)}
                />
            )}
            <span className="sticker__label">specimen #{specimen.specimen}</span>
        </button>
    );
}