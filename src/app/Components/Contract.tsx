
import { Mail, ArrowUpRight, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#090b0e] px-4 py-16 text-white sm:px-7 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-500 sm:text-sm">
          Get In Touch
        </p>

        <h2 className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl">
          Let&apos;s Connect
        </h2>

        <p className="mb-10 max-w-2xl text-sm leading-7 text-gray-400">
          Have an opportunity, a project idea, or just want
          to connect? Feel free to reach out. I&apos;m always
          open to learning and collaborating.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        
          <a
            href="mailto:tanvirahmedmahinsarker@gmail.com"
            className="group flex items-center gap-4 rounded-xl border border-gray-800 bg-[#11151b] p-5 transition hover:border-orange-500/50"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
              <Mail size={22} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="mb-1 text-sm text-gray-400">
                Email
              </p>
              <p className="truncate text-sm font-medium">
                tanvirahmedmahinsarker@gmail.com
              </p>
            </div>

            <ArrowUpRight
              size={18}
              className="shrink-0 text-gray-500 transition group-hover:text-orange-500"
            />
          </a>

    
          <a
            href="https://github.com/tanvirahmedmahin10"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-gray-800 bg-[#11151b] p-5 transition hover:border-orange-500/50"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
              <FaGithub size={22} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="mb-1 text-sm text-gray-400">
                GitHub
              </p>
              <p className="text-sm font-medium">
                Explore my projects
              </p>
            </div>

            <ArrowUpRight
              size={18}
              className="shrink-0 text-gray-500 transition group-hover:text-orange-500"
            />
          </a>

         
          <a
            href="https://www.linkedin.com/in/tanvir-ahmed-mahin-720255289/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-gray-800 bg-[#11151b] p-5 transition hover:border-orange-500/50"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
              <FaLinkedinIn size={22} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="mb-1 text-sm text-gray-400">
                LinkedIn
              </p>
              <p className="text-sm font-medium">
                Connect professionally
              </p>
            </div>

            <ArrowUpRight
              size={18}
              className="shrink-0 text-gray-500 transition group-hover:text-orange-500"
            />
          </a>

<a
  href="tel:+8801996091143"
  className="group flex items-center gap-4 rounded-xl border border-gray-800 bg-[#11151b] p-5 transition hover:border-orange-500/50"
>
  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
    <Phone size={22} />
  </div>

  <div className="min-w-0 flex-1">
    <p className="mb-1 text-sm text-gray-400">
      Phone
    </p>
    <p className="text-sm font-medium">
      +880 1996091143
    </p>
  </div>

  <ArrowUpRight
    size={18}
    className="shrink-0 text-gray-500 transition group-hover:text-orange-500"
  />
</a>

        </div>

        <div className="mt-8 rounded-xl border border-gray-800 bg-[#11151b] p-5 sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="mb-1 font-semibold">
              Open to opportunities
            </h3>
            <p className="text-sm text-gray-400">
              Interested in web development roles and
              collaborative projects.
            </p>
          </div>

          <span className="mt-4 inline-flex items-center gap-2 text-sm text-orange-500 sm:mt-0">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Available to connect
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
