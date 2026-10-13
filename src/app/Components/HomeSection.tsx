
import Image from "next/image";

import logo from "@/Assests/ProfileMain.png"

import Link from "next/link";
import { FaGithub } from "react-icons/fa";



const HomeSection = () => {

  return (

    <div>

      <section id="home" className="text-[#e5e5e5] min-h-screen flex items-center justify-center p-3 md:p-6 lg:p-10 overflow-hidden">

        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">





          <div className="lg:col-span-5 flex justify-center lg:justify-end">

            <div className="relative w-full max-w-100 aspect-4/5 md:max-w-112.5">



              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent scale-150 -z-10" />





              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-800/80 bg-[#12131a] shadow-2xl group">

                <Image

                  src={logo}

                  alt="Tanvir Ahmed Mahin"

                  fill

                  priority

                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"

                />



                <div className="absolute inset-0 bg-linear-to-t from-[#0b0c10] via-transparent to-transparent opacity-60" />

              </div>

            </div>

          </div>





          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6 lg:space-y-8">





            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#ff8a00] uppercase">

              Full-Stack Web Developer

            </span>



            <div className="space-y-2">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none">

                Tanvir Ahmed Mahin

              </h1>

            </div>



            <p className="text-base md:text-lg text-[#94a3b8] leading-relaxed max-w-xl font-light">

              I build responsive, high-performance web applications and am actively expanding my capabilities in robust backend development. I’m passionate about bridging the gap between visually rich user interfaces and scalable, efficient backend systems.

            </p>





            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">

              <a

                href="#projects"

                className="px-6 py-3 bg-[#ff8a00] text-black font-semibold rounded-lg hover:bg-[#ff9f24] transition duration-200 text-sm md:text-base shadow-lg shadow-orange-500/10"

              >

                View My Projects

              </a>



              <Link

                href="https://github.com/tanvirahmedmahin10"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#161821] border border-slate-700 text-white font-medium rounded-lg hover:bg-slate-800/80 transition duration-200 text-sm md:text-base">
 <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
              <FaGithub size={22} />
            </div>
                    GitHub
                    </div>

              </Link>


              <a

                href="https://www.linkedin.com/in/tanvir-ahmed-mahin-720255289"

                target="_blank"

                rel="noopener noreferrer"

                className="p-3 bg-[#161821] border border-slate-700 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/80 transition duration-200"

                aria-label="LinkedIn"

              >

                <svg className="bg-orange-500/10 text-orange-500 w-5 h-5 fill-current" viewBox="0 0 24 24">

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