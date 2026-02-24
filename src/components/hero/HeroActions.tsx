import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild className="rounded-full bg-emerald-400 text-black hover:bg-emerald-300">
        <Link href="/work">View Work</Link>
      </Button>

      <Button
        asChild
        variant="outline"
        className="rounded-full border-white/15 text-white hover:bg-white/5 hover:text-white"
      >
        <a href="/cv.pdf" download>
          Download CV
        </a>
      </Button>
    </div>
  );
}