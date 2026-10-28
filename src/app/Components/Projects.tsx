
import { ExternalLink} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";


const projects = [
  {
    title: "FitLog",
    category: "Fitness Web App",
    description:
      "A fitness workout app where users can explore exercises, save workouts, and manage their daily workout plans.",
    image: "/asset/FitLog.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "JavaScript"
    ],
    liveLink: "https://fitlog-mahin.vercel.app",
    githubLink:
      "https://github.com/tanvirahmedmahin10/FitLog",
  },
  
{
  title: "My Portfolio",
  category: "Personal Portfolio Website",
  description:
    "A personal portfolio website showcasing my skills, projects, and experience as a web developer, with links to my work and contact information.",
  image: "/asset/Profile.png",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "JavaScript"
  ],
  liveLink: "https://my-portfolio-three-tau-9m11t2s5o7.vercel.app",
  githubLink: "https://github.com/tanvirahmedmahin10/my-portfolio",
},
  {
    title: "BazarDor",
    category: "Market Price App",
    description:
      "A Bangla-language web application for browsing market prices of everyday essentials with filtering and sorting features.",
    image: "/asset/BazarDorFinal.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "API Integration",
      "Better Auth",
      "JavaScript"
    ],
    liveLink: "https://bazardor-uwv1.vercel.app",
    githubLink:
      "https://github.com/tanvirahmedmahin10/full-project-with-auth",
  },
  {
  title: "Bangla News",
  category: "News Web App",
  description:
    "A news web application that allows users to browse the latest news and explore articles across different categories through a clean and responsive interface.",
  image: "/asset/BanglaNews.png",
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "API Integration",
      "Better Auth",
      "JavaScript"
  ],
  liveLink: "https://banlanews.vercel.app",
  githubLink: "https://github.com/tanvirahmedmahin10/full-project-with-auth",
},
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#090b0e] px-7 py-5 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-500">
          My Projects
        </p>

        <h2 className="mb-3 text-3xl font-bold md:text-4xl">
          Things I&apos;ve Built
        </h2>

        <p className="mb-10 max-w-2xl text-sm leading-7 text-gray-400">
          A selection of projects where I turn ideas
          into functional, responsive web experiences.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-xl border border-gray-800 bg-[#11151b] transition duration-300 hover:-translate-y-1 hover:border-orange-500/50"
            >
              
              <div className="relative aspect-video overflow-hidden bg-gray-900">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold">
                    {project.title}
                  </h3>

                  <span className="rounded-md bg-orange-500/10 px-3 py-1 text-xs text-orange-400">
                    {project.category}
                  </span>
                </div>

                <p className="mb-5 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md bg-gray-800 px-2.5 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

             
                <div className="flex flex-wrap gap-3">
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2.5 text-sm font-medium text-black transition hover:bg-orange-400"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  )}

                  <Link

              href={project.githubLink}

              className="px-6 py-3 bg-[#161821] border border-slate-700 text-white font-medium rounded-lg hover:bg-slate-800/80 transition duration-200 text-sm md:text-base">

              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
              <FaGithub size={22} />
            </div>
                    GitHub
                    </div>

            </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          More projects coming soon.
        </p>
      </div>
    </section>
  );
};

export default Projects;
