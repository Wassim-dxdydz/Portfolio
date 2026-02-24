import HeroAvatar from "./HeroAvatar";
import HeroIntro from "./HeroIntro";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <HeroAvatar />
        <HeroIntro />
      </div>
    </section>
  );
}