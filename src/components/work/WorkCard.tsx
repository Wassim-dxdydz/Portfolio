"use client";

import { useState } from "react";
import { WorkItem } from "@/types/work";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WorkImages from "./WorkImages";
import ImageLightbox from "./ImageLightbox";

export default function WorkCard({ item }: { item: WorkItem }) {
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

      <Card className="rounded-sm border-white/10 bg-white/5 overflow-hidden hover:border-emerald-400/30 transition">
        <WorkImages item={item} variant="card" onOpen={openAt} />

        <CardHeader className="pb-1 px-3">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="font-display text-base leading-snug">{item.title}</CardTitle>
            <Badge variant="secondary" className="bg-zinc-900/60 border border-white/10 shrink-0 text-xs">
              {item.start} — {item.end}
            </Badge>
          </div>
          <p className="text-white/70 text-xs leading-relaxed mt-1 line-clamp-2">{item.description}</p>
        </CardHeader>

        <CardContent className="space-y-2 pb-3 px-3">
          <Badges title="Stack" items={item.stack} />
          {item.tools?.length ? <Badges title="Tools & Quality" items={item.tools} tone="emerald" /> : null}

          {(item.github || item.behance || item.zip) && (
            <div>
              <p className="text-white/50 text-xs mb-2">Links</p>
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-2">
                  {item.github?.visibility === "public" && item.github.url ? (
                    <Button asChild size="sm" className="rounded-full bg-emerald-400 text-black hover:bg-emerald-300 h-7 text-xs px-3">
                      <a href={item.github.url} target="_blank" rel="noreferrer">GitHub</a>
                    </Button>
                  ) : item.github?.visibility === "private" ? (
                    <Button disabled size="sm" variant="secondary" className="rounded-full bg-zinc-900/60 border border-white/10 h-7 text-xs px-3">
                      Private repo
                    </Button>
                  ) : null}
                  {item.behance ? (
                    <Button asChild size="sm" variant="secondary" className="rounded-full bg-zinc-900/60 border border-white/10 h-7 text-xs px-3">
                      <a href={item.behance} target="_blank" rel="noreferrer">Behance</a>
                    </Button>
                  ) : null}
                </div>
                {item.zip ? (
                  <div className="flex flex-col items-end gap-1 ml-auto shrink-0">
                    <Button asChild size="sm" variant="secondary" className="rounded-full bg-zinc-900/60 border border-white/10 h-7 text-xs px-3">
                      <a href={item.zip} download>↓ Download ZIP</a>
                    </Button>
                    <p className="text-white/30 text-[10px] text-right">
                    The app is unlicensed but safe to use.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}

function Badges({ title, items, tone }: { title: string; items: string[]; tone?: "emerald" }) {
  return (
    <div>
      <p className="text-white/50 text-xs mb-2">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((x) => (
          <span
            key={x}
            className={[
              "text-xs px-2 py-1 rounded-full border",
              tone === "emerald"
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
