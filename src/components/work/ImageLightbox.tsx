"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export default function ImageLightbox({ images, index, onClose, onNext, onPrev }: Props) {
  const img = images[index];
  const hasMany = images.length > 1;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNext, onPrev]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl mx-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-9 right-0 text-white/70 hover:text-white transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image — no background wrapper, just the image itself */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={img.src}
            alt={img.alt}
            width={1200}
            height={800}
            className="w-full h-auto object-contain rounded-xl"
            priority
          />
        </div>

        {/* Prev / Next */}
        {hasMany && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {hasMany && (
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, i) => (
              <span
                key={i}
                className={[
                  "w-1.5 h-1.5 rounded-full transition",
                  i === index ? "bg-emerald-400" : "bg-white/30",
                ].join(" ")}
              />
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
