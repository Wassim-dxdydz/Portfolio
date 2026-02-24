import HeroActions from "./HeroActions";
import HeroSocials from "./HeroSocials";

export default function HeroIntro() {
  return (
    <div>
      <p className="text-white/60 text-sm">Full-stack developer</p>

      <h1 className="mt-3 text-5xl md:text-6xl font-display leading-tight">
        Hello, I’m <span className="text-emerald-400">Wassim</span>
      </h1>

      <p className="mt-5 text-white/70 leading-relaxed max-w-xl">
        Full-stack developer blending engineering, UI/UX design, and data-driven
        thinking to build scalable, high-impact web applications.
      </p>

      <div className="mt-7">
        <HeroActions />
      </div>

      <div className="mt-5">
        <HeroSocials />
      </div>
    </div>
  );
}