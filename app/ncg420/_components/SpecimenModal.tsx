"use client";

import { useState } from "react";
import { Specimen } from "./data";

interface SpecimenModalProps {
  specimen: Specimen;
  onClose: () => void;
}

export default function SpecimenModal({
  specimen,
  onClose,
}: SpecimenModalProps) {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* accent bar */}
        <div className="modal__bar" style={{ background: specimen.color }} />

        {/* header */}
        <div className="modal__head">
          <span className="modal__num">
            Specimen #{specimen.specimen}
          </span>
          <span
            className="modal__tag"
            style={{
              borderColor: specimen.color,
              color: specimen.color,
            }}
          >
            {specimen.classification}
          </span>
        </div>

        {/* photo strip */}
        <div className="modal__photos">
          {specimen.images.map((src, i) => (
            <div
              key={i}
              className={`modal__photo ${
                imgIndex === i ? "modal__photo--active" : ""
              }`}
              onClick={() => setImgIndex(i)}
            >
              <img src={src} alt={`${specimen.label} ${i + 1}`} loading="lazy"/>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="modal__dots">
          {specimen.images.map((_, i) => (
            <button
              key={i}
              className={`modal__dot ${
                imgIndex === i ? "modal__dot--on" : ""
              }`}
              onClick={() => setImgIndex(i)}
              style={
                imgIndex === i
                  ? { background: specimen.color }
                  : undefined
              }
            />
          ))}
        </div>

        {/* content */}
        <h2 className="modal__title">{specimen.label}</h2>
        <p className="modal__body">{specimen.content}</p>

        <button className="modal__close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}
