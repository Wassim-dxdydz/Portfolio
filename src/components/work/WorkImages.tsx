"use client";

import Image from "next/image";
import { WorkItem } from "@/types/work";

type Props = {
  item: WorkItem;
  variant?: "card" | "row";
  onOpen: (index: number) => void;
};

export default function WorkImages({ item, variant = "card", onOpen }: Props) {
  const images = item.images ?? [];
  const img0 = images[0];
  const img1 = images[1];
  const img2 = images[2];

  if (!img0) return null;

  const mainH = variant === "row" ? "h-44" : "h-32";
  const thumbH = variant === "row" ? "h-32" : "h-20";
  const singleH = variant === "row" ? "h-[280px]" : "h-[208px]";

  if (images.length === 1) {
    return (
      <div className="w-full overflow-hidden cursor-zoom-in" onClick={() => onOpen(0)}>
        <div className={`relative w-full ${singleH} bg-zinc-900`}>
          <Image src={img0.src} alt={img0.alt} fill className="object-cover" loading="lazy" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      <div
        className={`relative w-full ${mainH} bg-zinc-900 cursor-zoom-in`}
        onClick={() => onOpen(0)}
      >
        <Image src={img0.src} alt={img0.alt} fill className="object-cover" loading="lazy" />
      </div>
      <div className="flex w-full">
        <div
          className={`relative ${thumbH} w-1/2 bg-zinc-900 cursor-zoom-in`}
          onClick={() => onOpen(1)}
        >
          <Image
            src={img1?.src ?? "/work/placeholder.png"}
            alt={img1?.alt ?? "Project image"}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div
          className={`relative ${thumbH} w-1/2 bg-zinc-900 cursor-zoom-in`}
          onClick={() => onOpen(2)}
        >
          <Image
            src={img2?.src ?? "/work/placeholder.png"}
            alt={img2?.alt ?? "Project image"}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
