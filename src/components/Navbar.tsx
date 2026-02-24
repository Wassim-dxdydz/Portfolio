import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        
        {/* Left */}
        <Link href="/" className="font-display text-xl">
          Wassim<span className="text-emerald-400">.</span>
        </Link>

        {/* Middle */}
        <nav className="hidden md:flex items-center gap-24 text-sm text-white/70">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/work" className="hover:text-white transition">
            Work
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>

        {/* Right */}
        <Link
          href="/contact"
          className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-black hover:bg-emerald-300 transition"
        >
          Hire me
        </Link>
      </div>
    </header>
  );
}