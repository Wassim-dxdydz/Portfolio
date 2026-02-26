"use client";

import { useState } from "react";
import { workItems } from "@/data/work";
import WorkCard from "@/components/work/WorkCard";
import WorkRow from "@/components/work/WorkRow";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutGrid, List } from "lucide-react";


export default function WorkPage() {
  const [view, setView] = useState<"grid" | "list">("list");

  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="font-display text-4xl">Work</h1>
          <p className="text-white/60 mt-2">
            Projects I worked on — web, data, and product-focused.
          </p>
        </div>

        <ToggleGroup
          type="single"
          value={view}
          onValueChange={(v) => v && setView(v as "grid" | "list")}
          className="border border-white/10 bg-white/5 rounded-xl p-1"
        >
          <ToggleGroupItem
            value="grid"
            className="rounded-lg text-white/80 data-[state=on]:bg-emerald-400 data-[state=on]:text-black px-3 py-2"
            aria-label="Grid view"
          >
            <LayoutGrid className="w-4 h-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="list"
            className="rounded-lg text-white/80 data-[state=on]:bg-emerald-400 data-[state=on]:text-black px-3 py-2"
            aria-label="List view"
          >
            <List className="w-4 h-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {workItems.map((item) => (
            <WorkRow key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
