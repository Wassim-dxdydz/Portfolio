import HeroActions from "./HeroActions";
import HeroSocials from "./HeroSocials";

export default function HeroIntro() {
  return (
    <div className="space-y-6">

      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
        Hello I'm
        <br />
        <span className="text-emerald-400"> ABAHRI Wassim</span>
      </h1>

      <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
        I craft high-performance web applications with strong UI/UX focus
        and a data-driven mindset — combining clean architecture,
        modern frontend engineering, and analytical thinking.
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