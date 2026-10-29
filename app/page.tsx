import Image from "next/image";
import { projects } from "../data/projects";

const skills = [
  "Flutter", "Dart", "Firebase", "REST APIs", "Provider",
  "GetX", "GoRouter", "Clean Architecture", "React.js", "React Native", "Redux",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="text-lg font-bold tracking-tight">
            <span className="text-blue-600">Phyo’s Portfolio</span>
          </a>
          <div className="flex items-center gap-4 text-sm text-slate-600 sm:gap-7">
            <a className="transition hover:text-blue-600" href="#projects">Projects</a>
            <a className="hidden transition hover:text-blue-600 sm:inline" href="#about">About</a>
            <a className="transition hover:text-blue-600" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          Senior Flutter Developer · Mobile Application Engineer
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          I build mobile applications for real-world business needs.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          I’m Phyo Thandar, a software developer with 9+ years of experience, including 5+ years
          focused on Flutter and cross-platform mobile applications.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Explore projects <span aria-hidden="true">↓</span>
          </a>
          <a href="/cv.pdf" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:border-slate-900">
            View CV <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">Flutter · Dart · Firebase · REST APIs · React.js</p>
      </section>

      <section id="projects" className="scroll-mt-20 border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Selected work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Projects I’ve contributed to</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            A selection of business applications. Each overview focuses on the product,
            my contribution, and the technologies used.
          </p>

          <div className="mt-10 grid gap-6">
            {projects.map((project, index) => (
              <article key={project.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.02]">
                <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative flex min-h-64 items-center justify-center bg-slate-100 p-5 sm:min-h-80">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    ) : (
                      <div className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                            Project {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500">Preview</span>
                        </div>
                        <div className="mt-5 h-2 w-3/4 rounded bg-slate-200" />
                        <div className="mt-3 h-2 w-full rounded bg-slate-100" />
                        <div className="mt-2 h-2 w-5/6 rounded bg-slate-100" />
                        <div className="mt-6 grid grid-cols-3 gap-2">
                          <div className="h-12 rounded-md bg-slate-100" />
                          <div className="h-12 rounded-md bg-slate-100" />
                          <div className="h-12 rounded-md bg-slate-100" />
                        </div>
                        <p className="mt-4 text-xs text-slate-500">Add an approved project screenshot</p>
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{project.category}</p>
                    <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">{project.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{project.summary}</p>

                    <h4 className="mt-6 text-sm font-semibold">My contribution</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{project.contribution}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700">{item}</span>
                      ))}
                    </div>
                    {project.note && <p className="mt-5 text-xs leading-5 text-slate-500">{project.note}</p>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">About</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">How I work</h2>
        <p className="mt-5 max-w-3xl leading-7 text-slate-600">
          I develop and maintain mobile applications, integrate APIs and backend services,
          troubleshoot application issues, and collaborate with developers and QA teams.
          I’ve also provided technical guidance to junior mobile developers.
        </p>
        <h3 className="mt-8 text-sm font-semibold">Core technologies</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">{skill}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Let’s talk about your next product.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            I’m interested in Flutter and mobile application development opportunities,
            including remote roles with international teams.
          </p>
          <div className="mt-7 flex flex-wrap gap-5 text-sm font-medium">
            <a className="underline underline-offset-4 hover:text-blue-300" href="mailto:phyothandar394@gmail.com">Email</a>
            <a className="underline underline-offset-4 hover:text-blue-300" href="https://www.linkedin.com/in/phyo-thandar-643736170/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="underline underline-offset-4 hover:text-blue-300" href="https://github.com/phyotd" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Phyo · Built with Next.js and TypeScript
      </footer>
    </main>
  );
}
