import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

const socials = [
  { label: "GitHub", href: "https://github.com/Wassim-dxdydz", icon: FaGithub },
  { label: "Behance", href: "https://www.behance.net/wassimabh", icon: FaBehance },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/wassim-abahri-91ba98284/", icon: FaLinkedin },
];

export default function HeroSocials() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-emerald-400/30 hover:bg-white/10 transition"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}