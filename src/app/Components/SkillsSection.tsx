
import {
  Code2,
  Palette,
  Database,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces.",
    icon: Code2,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },
  {
    title: "UI & Styling",
    description:
      "Creating clean layouts and mobile-friendly designs.",
    icon: Palette,
    technologies: [
      "Tailwind CSS",
      "Responsive Design",
      "DaisyUI",
    ],
  },
  {
    title: "Backend & APIs",
    description:
      "Exploring server-side development and data integration.",
    icon: Database,
    technologies: [
      "REST APIs",
      "Authentication",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Managing code and deploying web projects.",
    icon: GitBranch,
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#090b0e] px-7 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-500">
          My Skills
        </p>

        <h2 className="mb-3 text-3xl font-bold md:text-4xl">
          Technologies I Work With
        </h2>

        <p className="mb-10 max-w-2xl text-sm leading-7 text-gray-400">
          Tools and technologies I use to build responsive,
          modern web applications and continue growing as a developer.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="group rounded-xl border border-gray-800 bg-[#11151b] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <Icon size={23} />
                </div>

                <h3 className="mb-2 text-lg font-semibold">
                  {skill.title}
                </h3>

                <p className="mb-5 text-sm leading-6 text-gray-400">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-gray-800/80 px-2 py-1 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center gap-3 text-sm text-gray-400">
          <span className="h-1 w-7 rounded-full bg-orange-500" />
          Always learning. Always building.
        </div>
      </div>
    </section>
  );
};

export default Skills;
