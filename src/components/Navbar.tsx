"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HireMeModal from "./HireMeModal";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl">
          Wassim<span className="text-emerald-400">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-24 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] w-full transition ${
                    isActive ? "bg-emerald-400" : "bg-transparent"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <HireMeModal />
      </div>
    </header>
  );
}