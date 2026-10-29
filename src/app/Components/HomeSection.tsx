import Image from "next/image";

import logo from "@/Assests/ProfileMain.png";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const HomeSection = () => {
  return (
    <div>
      <section
        id="home"
        className="flex min-h-[calc(100svh-4.5rem)] items-center justify-center overflow-hidden px-4 py-10 text-[#e5e5e5] sm:px-6 md:px-8 lg:px-10 lg:py-16"
      >
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative aspect-4/5 w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md">
              <div className="absolute inset-0 -z-10 scale-150 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

              <div className="group relative h-full w-full overflow-hidden rounded-3xl border border-slate-800/80 bg-[#12131a] shadow-2xl">
                <Image
                  src={logo}
                  alt="Tanvir Ahmed Mahin"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 448px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#0b0c10] via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 text-center lg:col-span-7 lg:space-y-8 lg:text-left">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ff8a00] sm:text-xs sm:tracking-[0.25em] md:text-sm">
              Full-Stack Web Developer
            </span>

            <div className="space-y-2">
              <h1 className="break-words text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl lg:leading-none">
                Tanvir Ahmed Mahin
              </h1>
            </div>

            <p className="mx-auto max-w-xl text-sm font-light leading-relaxed text-[#94a3b8] sm:text-base md:text-lg lg:mx-0">
              I build responsive, high-performance web applications and am
              actively expanding my capabilities in robust backend development.
              I&apos;m passionate about bridging the gap between visually rich
              user interfaces and scalable, efficient backend systems.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4 sm:gap-4 lg:justify-start">
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#ff8a00] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/10 transition duration-200 hover:bg-[#ff9f24] sm:w-auto md:text-base"
              >
                View My Projects
              </a>

              <Link
                href="https://github.com/tanvirahmedmahin10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-[#161821] px-6 py-3 text-sm font-medium text-white transition duration-200 hover:bg-slate-800/80 sm:w-auto md:text-base"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <FaGithub size={22} />
                </span>
                GitHub
              </Link>

              <a
                href="https://www.linkedin.com/in/tanvir-ahmed-mahin-720255289"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-[#161821] p-3 text-slate-300 transition duration-200 hover:bg-slate-800/80 hover:text-white"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-5 w-5 fill-current text-orange-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
