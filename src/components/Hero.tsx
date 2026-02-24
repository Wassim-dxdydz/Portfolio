export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div className="flex justify-center md:justify-start">
          <div className="relative w-64 h-64 rounded-full border border-white/10 overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Wassim"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-white/60 text-sm">
            Full-stack developer
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-display">
            Hello, I’m <span className="text-emerald-400">Wassim</span>
          </h1>

          <p className="mt-5 text-white/70 leading-relaxed max-w-xl">
            Full-stack developer blending engineering, UI/UX design, and data-driven thinking
            to build scalable, high-impact web applications.
          </p>

          <div className="mt-7 flex gap-3">
            <a
              href="#work"
              className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-black hover:bg-emerald-300"
            >
              View Work
            </a>

            <a
              href="/cv.pdf"
              className="rounded-full border border-white/15 px-5 py-2 text-sm text-white/90 hover:border-white/30"
            >
              Download CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}