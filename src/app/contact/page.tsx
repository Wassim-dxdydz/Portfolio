import { Mail, Phone, MapPin} from "lucide-react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "abahriwassim8@gmail.com",
    href: "mailto:abahriwassim8@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+33 7 58 41 93 10",
    href: "tel:+33758419310",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Grenoble, France",
    href: "https://maps.google.com/?q=Grenoble,France",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Wassim-dxdydz",
    href: "https://github.com/Wassim-dxdydz",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/wassim-abahri",
    href: "https://www.linkedin.com/in/wassim-abahri",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 md:px-10 pt-8">
      <div className="mb-4">
        <h1 className="font-display text-4xl">Contact</h1>
        <p className="text-white/60 mt-2">
          Open to internship opportunities and collaborations. Feel free to reach out.
        </p>
      </div>

      <div className="space-y-3">
        {contacts.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:border-emerald-400/30 hover:bg-white/10 transition group"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-400/10 text-emerald-400 shrink-0">
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-white/40 text-xs">{label}</span>
              <span className="text-white/90 text-sm group-hover:text-emerald-300 transition">
                {value}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
