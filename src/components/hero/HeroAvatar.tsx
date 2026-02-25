import { FaStar } from "react-icons/fa";

type OrbitItem = {
  kind: "dot" | "star";
  size?: "xs" | "sm" | "md";
  opacity?: "70";
};

export default function HeroAvatar() {
  const orbit1: OrbitItem[] = [
    { kind: "dot", size: "md" },
    { kind: "dot", size: "sm", opacity: "70" },
    { kind: "star", size: "sm" },
  ];

  const orbit2: OrbitItem[] = [
    { kind: "dot", size: "sm" },
    { kind: "dot", size: "xs", opacity: "70" },
    { kind: "dot", size: "sm", opacity: "70" },
    { kind: "star", size: "xs" },
  ];

  const orbit3: OrbitItem[] = [
    { kind: "dot", size: "sm" },
    { kind: "dot", size: "xs", opacity: "70" },
    { kind: "dot", size: "md" },
    { kind: "star", size: "xs" },
    { kind: "star", size: "sm", opacity: "70" },
  ];

  return (
    <div className="flex justify-center md:justify-start">
      <div className="relative w-80 h-80 md:w-[360px] md:h-[360px]">

        <OrbitRing
          insetClass="-inset-6"
          borderClass="border border-emerald-400/20"
          animClass="animate-orbit-pause"
        >
          <OrbitItems items={orbit1} />
        </OrbitRing>

        <OrbitRing
        insetClass="-inset-16"
        borderClass="border border-emerald-400/10 [border-style:dashed]"
        animClass="animate-orbit-pause-reverse"
        style={{ ["--orbit-offset" as any]: "40deg" }}
        >
        <OrbitItems items={orbit2} />
        </OrbitRing>

        <OrbitRing
          insetClass="-inset-28"
          borderClass="border border-emerald-400/10"
          animClass="animate-orbit-pause"
        >
          <OrbitItems items={orbit3} />
        </OrbitRing>

        <div className="absolute inset-6 rounded-full overflow-hidden border border-white/10 bg-zinc-900">
          <img
            src="/profile.jpg"
            alt="Wassim"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function OrbitRing({
  insetClass,
  borderClass,
  animClass,
  style,
  children,
}: {
  insetClass: string;
  borderClass: string;
  animClass: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={`absolute ${insetClass} rounded-full ${borderClass}`} />
      <div className={`absolute ${insetClass} ${animClass}`} style={style}>
        {children}
      </div>
    </>
  );
}

function OrbitItems({ items }: { items: OrbitItem[] }) {
  const step = 360 / items.length;

  return (
    <>
      {items.map((item, i) => (
        <OrbitPlaced key={i} angleDeg={i * step}>
          {item.kind === "dot" ? (
            <Dot
              className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              size={item.size}
              opacity={item.opacity}
            />
          ) : (
            <Star
              className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              size={item.size}
              opacity={item.opacity}
            />
          )}
        </OrbitPlaced>
      ))}
    </>
  );
}

function OrbitPlaced({
  angleDeg,
  children,
}: {
  angleDeg: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute inset-0"
      style={{ transform: `rotate(${angleDeg}deg)` }}
    >
      {children}
    </div>
  );
}

function Dot({
  className,
  size = "sm",
  opacity,
}: {
  className: string;
  size?: "xs" | "sm" | "md";
  opacity?: "70";
}) {
  const sizes =
    size === "xs" ? "h-2 w-2" : size === "md" ? "h-3 w-3" : "h-2.5 w-2.5";

  const alpha =
    opacity === "70" ? "bg-emerald-400/70" : "bg-emerald-400";

  return (
    <div
      className={[
        "absolute rounded-full",
        sizes,
        alpha,
        "shadow shadow-emerald-400/40",
        className,
      ].join(" ")}
    />
  );
}

function Star({
  className,
  size = "sm",
  opacity,
}: {
  className: string;
  size?: "xs" | "sm" | "md";
  opacity?: "70";
}) {
  const px = size === "xs" ? 12 : size === "md" ? 16 : 14;

  const alpha =
    opacity === "70"
      ? "text-emerald-400/70"
      : "text-emerald-400";

  return (
    <span
      className={[
        "absolute",
        alpha,
        "drop-shadow-[0_0_10px_rgba(52,211,153,0.35)]",
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      <FaStar size={px} />
    </span>
  );
}