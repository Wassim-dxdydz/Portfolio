import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiSpringboot,
  SiDocker,
  SiGithubactions,
  SiSonarqube,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScipy,
  SiOpencv,
  SiPlotly,
  SiJupyter,
  SiScikitlearn,
} from "react-icons/si";
import { FaLinux, FaFlask } from "react-icons/fa";

type Skill = {
  label: string;
  icon: React.ReactNode;
  colorClass: string;
};

export default function SkillsGrid() {
  const frontend: Skill[] = [
    { label: "React", icon: <SiReact />, colorClass: "text-[#61DAFB]" },
    { label: "Next.js", icon: <SiNextdotjs />, colorClass: "text-white" },
    { label: "TypeScript", icon: <SiTypescript />, colorClass: "text-[#3178C6]" },
    { label: "Tailwind", icon: <SiTailwindcss />, colorClass: "text-[#38BDF8]" },
  ];

  const backend: Skill[] = [
    { label: "Node.js", icon: <SiNodedotjs />, colorClass: "text-[#339933]" },
    { label: "Express", icon: <SiExpress />, colorClass: "text-white" },
    { label: "Django / DRF", icon: <SiDjango />, colorClass: "text-[#0C4B33]" },
    { label: "Spring Boot", icon: <SiSpringboot />, colorClass: "text-[#6DB33F]" },
  ];

  const devopsQuality: Skill[] = [
    { label: "Docker", icon: <SiDocker />, colorClass: "text-[#2496ED]" },
    { label: "CI/CD", icon: <SiGithubactions />, colorClass: "text-[#2088FF]" },
    { label: "SonarQube", icon: <SiSonarqube />, colorClass: "text-[#4E9BCD]" },
    { label: "Linux", icon: <FaLinux />, colorClass: "text-[#FCC624]" },
    { label: "Playwright", icon: <FaFlask />, colorClass: "text-emerald-400" }, // no official icon in react-icons
  ];

  const databases: Skill[] = [
    { label: "PostgreSQL", icon: <SiPostgresql />, colorClass: "text-[#4169E1]" },
    { label: "MySQL", icon: <SiMysql />, colorClass: "text-[#4479A1]" },
    { label: "MongoDB", icon: <SiMongodb />, colorClass: "text-[#47A248]" },
    { label: "SQLite", icon: <SiSqlite />, colorClass: "text-[#003B57]" },
  ];

  const dataBI: Skill[] = [
    { label: "Qlik Sense", icon: <FaFlask />, colorClass: "text-emerald-300" },
    { label: "Pentaho", icon: <FaFlask />, colorClass: "text-emerald-300" }, 
  ];

  const pythonEco: Skill[] = [
    { label: "Python", icon: <SiPython />, colorClass: "text-[#3776AB]" },
    { label: "Pandas", icon: <SiPandas />, colorClass: "text-[#150458]" },
    { label: "Jupyter", icon: <SiJupyter />, colorClass: "text-[#F37626]" },
    { label: "Scikit-learn", icon: <SiScikitlearn />, colorClass: "text-[#F7931E]" },
    { label: "NumPy", icon: <SiNumpy />, colorClass: "text-[#013243]" },
    { label: "SciPy", icon: <SiScipy />, colorClass: "text-[#8CAAE6]" },
    { label: "OpenCV", icon: <SiOpencv />, colorClass: "text-[#5C3EE8]" },
    { label: "Plotly", icon: <SiPlotly />, colorClass: "text-[#3F4F75]" },
  ];

  return (
    <section className="mx-auto mt-36 max-w-6xl px-6 md:px-10 pb-20">
      <h2 className="font-display text-3xl mb-3">Skills</h2>
      <p className="text-white/60 mb-10">
        A quick overview of technologies that I've worked with.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
        <SkillCard title="Frontend" items={frontend} className="md:col-start-1 md:row-start-1" />
        <SkillCard title="Backend" items={backend} className="md:col-start-2 md:row-start-1" />
        <SkillCard title="DevOps & Quality" items={devopsQuality} className="md:col-start-1 md:row-start-2" />
        <SkillCard title="Databases" items={databases} className="md:col-start-2 md:row-start-2" />

        <Card className="rounded-2xl border-white/10 bg-white/5 md:col-start-3 md:row-start-1 md:row-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-xl">Data & Python</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h4 className="text-emerald-400 font-semibold mb-4">Data / BI</h4>
              <SkillGridItems items={dataBI} />
            </div>

            <div>
              <h4 className="text-emerald-400 font-semibold mb-4">Python Ecosystem</h4>
              <SkillGridItems items={pythonEco} />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function SkillCard({
  title,
  items,
  className,
}: {
  title: string;
  items: Skill[];
  className?: string;
}) {
  return (
    <Card className={`rounded-2xl border-white/10 bg-white/5 ${className ?? ""}`}>
      <CardHeader className="pb-2">
        <CardTitle className="font-display text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <SkillGridItems items={items} />
      </CardContent>
    </Card>
  );
}

function SkillGridItems({ items }: { items: Skill[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((s) => (
        <div
          key={s.label}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-950/40 px-3 py-2"
        >
          <span className={`text-lg ${s.colorClass}`}>{s.icon}</span>
          <span className="text-sm text-white/80">{s.label}</span>
        </div>
      ))}
    </div>
  );
}