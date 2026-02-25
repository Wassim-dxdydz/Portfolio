"use client";

import { useState } from "react";
import { WorkItem } from "@/types/work";
import WorkImages from "./WorkImages";
import ImageLightbox from "./ImageLightbox";
import { Button } from "@/components/ui/button";

export default function WorkRow({ item }: { item: WorkItem }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = item.images ?? [];

  const openAt = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length));
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));

  return (
    <>
      {lightboxIndex !== null && (
        <ImageLightbox
          images={images}
          index={lightboxIndex}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="grid md:grid-cols-[360px_1fr] gap-6 items-end">
          <div className="w-full overflow-hidden rounded-lg">
            <WorkImages item={item} variant="row" onOpen={openAt} />
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-xl">{item.title}</h3>
                <span className="text-xs text-white/60 border border-white/10 rounded-full px-3 py-1 bg-zinc-900/60">
                  {item.start} — {item.end}
                </span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
            </div>

            <div className="space-y-2 mt-4">
              <TagRow label="Stack" items={item.stack} />
              {item.tools?.length ? <TagRow label="Tools & Quality" items={item.tools} emerald /> : null}

              <div className="flex flex-wrap gap-3 pt-1">
                {(item.github || item.behance || item.zip) && (
                  <div className="w-full">
                    <p className="text-white/50 text-xs mb-2">Links</p>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-3">
                        {item.github?.visibility === "public" && item.github.url ? (
                          <Button asChild className="rounded-full bg-emerald-400 text-black hover:bg-emerald-300">
                            <a href={item.github.url} target="_blank" rel="noreferrer">GitHub</a>
                          </Button>
                        ) : item.github?.visibility === "private" ? (
                          <Button disabled variant="secondary" className="rounded-full bg-zinc-900/60 border border-white/10">
                            Private repo
                          </Button>
                        ) : null}
                        {item.behance ? (
                          <Button asChild variant="secondary" className="rounded-full bg-zinc-900/60 border border-white/10">
                            <a href={item.behance} target="_blank" rel="noreferrer">Behance</a>
                          </Button>
                        ) : null}
                      </div>
                      {item.zip ? (
                        <Button asChild variant="secondary" className="rounded-full bg-zinc-900/60 border border-white/10 ml-auto">
                          <a href={item.zip} download>↓ Download ZIP</a>
                        </Button>
                      ) : null}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TagRow({ label, items, emerald }: { label: string; items: string[]; emerald?: boolean }) {
  return (
    <div>
      <p className="text-white/50 text-xs mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((x) => (
          <span
            key={x}
            className={[
              "text-xs px-2 py-1 rounded-full border",
              emerald
                ? "bg-emerald-400/10 text-emerald-200 border-emerald-400/20"
                : "bg-zinc-900/60 text-white/80 border-white/10",
            ].join(" ")}
          >
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}
