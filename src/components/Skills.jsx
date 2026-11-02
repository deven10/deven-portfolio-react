import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiJira,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "MUI", icon: SiMui, color: "#007FFF" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: TbApi, color: "#4DE39C" },
      { name: "Prisma", icon: SiPrisma, color: "#FFFFFF" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
    ],
  },
];

export const Skills = () => {
  return (
    <section className="skills-main pt-24 pb-32">
      <h2 className="mb-12 headline text-left leading-none">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <p className="mb-5 text-[13px] tracking-[0.25em] uppercase text-[#4de39c]">
              {group.title}
            </p>
            <div className="flex flex-wrap gap-3">
              {group.skills.map(({ name, icon: Icon, color }) => (
                <span
                  key={name}
                  className="skill-chip"
                  style={{ "--brand": color }}
                >
                  <Icon className="skill-icon" aria-hidden="true" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
