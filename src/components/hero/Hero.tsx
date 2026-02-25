import HeroAvatar from "./HeroAvatar";
import HeroIntro from "./HeroIntro";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <HeroAvatar />
        <HeroIntro />
      </div>
    </section>
  );
}