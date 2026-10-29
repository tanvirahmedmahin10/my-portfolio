import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    period: "2022–2026",
    institution: "Mymensingh Engineering College, Bangladesh",
    status: "Final result pending",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-[#090b0e] px-4 py-16 text-white sm:px-7 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-500 sm:text-sm">
          My Education
        </p>

        <h2 className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl">
          Academic Background
        </h2>

        <p className="mb-10 max-w-2xl text-sm leading-7 text-gray-400">
          My academic journey in computer science and engineering,
          where I built the foundation for my development skills.
        </p>

        <div className="space-y-5">
          {education.map((item) => (
            <div
              key={item.degree}
              className="group rounded-xl border border-gray-800 bg-[#11151b] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <GraduationCap size={23} />
                </div>

                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-base font-semibold sm:text-lg">
                      {item.degree}
                    </h3>

                    <span className="rounded-md bg-orange-500/10 px-2.5 py-1 text-xs text-orange-400">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-gray-400">
                    {item.institution}
                  </p>

                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                    {item.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
