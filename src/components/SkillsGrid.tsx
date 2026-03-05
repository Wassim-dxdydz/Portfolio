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
  SiKotlin,
  SiJavascript,
} from "react-icons/si";
import { FaLinux, FaFlask, FaJava } from "react-icons/fa";

type Skill = {
  label: string;
  icon: React.ReactNode;
  colorClass: string;
};

export default function SkillsGrid() {

  const languages: Skill[] = [
    { label: "TypeScript", icon: <SiTypescript />, colorClass: "text-[#3178C6]" },
    { label: "JavaScript", icon: <SiJavascript />, colorClass: "text-[#F7DF1E]" },
    { label: "Python", icon: <SiPython />, colorClass: "text-[#3776AB]" },
    { label: "Kotlin", icon: <SiKotlin />, colorClass: "text-[#7F52FF]" },
    { label: "Java", icon: <FaJava />, colorClass: "text-[#ED8B00]" },
  ];

  const frontend: Skill[] = [
    { label: "React", icon: <SiReact />, colorClass: "text-[#61DAFB]" },
    { label: "Next.js", icon: <SiNextdotjs />, colorClass: "text-white" },
    { label: "Tailwind CSS", icon: <SiTailwindcss />, colorClass: "text-[#38BDF8]" },
  ];

  const backend: Skill[] = [
    { label: "Django / DRF", icon: <SiDjango />, colorClass: "text-[#44B78B]" },
    { label: "Spring Boot", icon: <SiSpringboot />, colorClass: "text-[#6DB33F]" },
    { label: "Express.js", icon: <SiExpress />, colorClass: "text-white" },
    { label: "Node.js", icon: <SiNodedotjs />, colorClass: "text-[#339933]" },
  ];

  const databases: Skill[] = [
    { label: "PostgreSQL", icon: <SiPostgresql />, colorClass: "text-[#4169E1]" },
    { label: "MySQL", icon: <SiMysql />, colorClass: "text-[#4479A1]" },
    { label: "MongoDB", icon: <SiMongodb />, colorClass: "text-[#47A248]" },
    { label: "SQLite", icon: <SiSqlite />, colorClass: "text-[#003B57]" },
  ];

  const devops: Skill[] = [
    { label: "Docker", icon: <SiDocker />, colorClass: "text-[#2496ED]" },
    { label: "CI/CD", icon: <SiGithubactions />, colorClass: "text-[#2088FF]" },
    { label: "SonarQube", icon: <SiSonarqube />, colorClass: "text-[#4E9BCD]" },
    { label: "Linux", icon: <FaLinux />, colorClass: "text-[#FCC624]" },
    { label: "Playwright", icon: <FaFlask />, colorClass: "text-emerald-400" },
  ];

  const dataML: Skill[] = [
    { label: "Pandas", icon: <SiPandas />, colorClass: "text-[#150458]" },
    { label: "NumPy", icon: <SiNumpy />, colorClass: "text-[#4DABCF]" },
    { label: "Scikit-learn", icon: <SiScikitlearn />, colorClass: "text-[#F7931E]" },
    { label: "OpenCV", icon: <SiOpencv />, colorClass: "text-[#5C3EE8]" },
    { label: "Plotly", icon: <SiPlotly />, colorClass: "text-[#636EFA]" },
    { label: "Jupyter Notebook", icon: <SiJupyter />, colorClass: "text-[#F37626]" },
    { label: "SciPy", icon: <SiScipy />, colorClass: "text-[#8CAAE6]" },
  ];

  const bi: Skill[] = [
    { label: "Qlik Sense", icon: <FaFlask />, colorClass: "text-emerald-300" },
    { label: "Pentaho", icon: <FaFlask />, colorClass: "text-emerald-300" },
  ];

  return (
    <section className="mx-auto mt-36 max-w-6xl px-6 md:px-10 pb-20">
      <h2 className="font-display text-3xl mb-3">Skills</h2>
      <p className="text-white/60 mb-10">
        A quick overview of technologies that I've worked with.
      </p>

      <div className="space-y-6">
        <SkillCard title="Languages" items={languages} cols={5} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCard title="Frontend" items={frontend} />
          <SkillCard title="Backend Frameworks" items={backend} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <SkillCard title="Databases" items={databases} />
            <SkillCard title="DevOps & Quality" items={devops} />
          </div>
          <Card className="rounded-2xl border-white/10 bg-white/5">
            <CardHeader className="pb-2">
              <CardTitle className="font-display text-xl">Data & Python Ecosystem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h4 className="text-emerald-400 text-sm font-semibold mb-4">BI & Data Engineering</h4>
                <SkillGridItems items={bi} cols={2} />
              </div>
              <div>
                <h4 className="text-emerald-400 text-sm font-semibold mb-4">Data & Machine Learning</h4>
                <SkillGridItems items={dataML} cols={2} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  title,
  items,
  className,
  cols = 2,
}: {
  title: string;
  items: Skill[];
  className?: string;
  cols?: number;
}) {
  return (
    <Card className={`rounded-2xl border-white/10 bg-white/5 ${className ?? ""}`}>
      <CardHeader className="pb-2">
        <CardTitle className="font-display text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <SkillGridItems items={items} cols={cols} />
      </CardContent>
    </Card>
  );
}

function SkillGridItems({ items, cols = 2 }: { items: Skill[]; cols?: number }) {
  const gridClass =
    cols === 5 ? "grid-cols-3 md:grid-cols-5" :
    cols === 3 ? "grid-cols-2 md:grid-cols-3" :
    cols === 1 ? "grid-cols-1" :
    "grid-cols-2";

  return (
    <div className={`grid ${gridClass} gap-3`}>
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
