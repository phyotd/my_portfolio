import Image from "next/image";
import { projects } from "../data/projects";
import { Navbar } from "./components/navbar";
import { Stats } from "./components/stats";
import SelectedProjects from "./components/selected-projects";

const skills = [
  "Flutter",
  "Dart",
  "Firebase",
  "REST APIs",
  "Provider",
  "GetX",
  "Riverpod",
  "GoRouter",
  "Clean Architecture",
  "React.js",
  "React Native",
  "Redux",
  "Git",
  "Github",
];

const stats = [
  { value: "8+", label: "Apps built" },
  { value: "3+", label: "Apps published" },
  { value: "2", label: "Dashboards" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-slate-900">
      <header className="sticky top-0 z-20  backdrop-blur">
        <Navbar />
      </header>

      <section id="home" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-10">
        <div className="flex flex-row text-foreground gap-3">
          <div className="flex-3 p-4">
            <p className="text-sm font-semibold text-slate-600 pb-1">
              Hi there! I’m
            </p>
            <h1 className="text-foreground text-5xl font-bold pb-2 flex items-center gap-3 flex-wrap">
              Phyo Thandar
              <span className="text-xs font-medium text-green-700 bg-green-100 border border-green-300 rounded-full px-3 py-1">
                Open to Opportunities
              </span>
            </h1>
            <h1 className="text-4xl font-bold  text-primary">
              Mobile Developer (Flutter & Dart)
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I develop responsive, user-friendly mobile and web applications
              tailored to real-world business needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Explore projects <span aria-hidden="true">↗</span>
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold transition hover:border-slate-900"
              >
                View CV <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="flex-1 p-4">
            <Image
              src="/avatar.png"
              alt="Phyo Thandar"
              width={350}
              height={350}
            />{" "}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl scroll-mt-24 px-5">
        <Stats />
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
        <div className="flex flex-row gap-4 px-3">
          <div className="flex-1">
            <h2 className="text-xl font-semibold uppercase  text-primary">
              About Me
            </h2>

            <p className="mt-5 max-w-3xl leading-7 text-slate-600">
              I develop and maintain mobile applications, integrate APIs and
              backend services, troubleshoot application issues, and collaborate
              with developers and QA teams. I’ve also provided technical
              guidance to junior mobile developers.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold uppercase text-primary">
              Core technologies
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-500"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
        <SelectedProjects/>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl scroll-mt-20 bg-slate-900 text-white"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Let’s talk about your next product.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            I’m interested in Flutter and mobile application development
            opportunities, including remote roles with international teams.
          </p>
          <div className="mt-7 flex flex-wrap gap-5 text-sm font-medium">
            <a
              className="underline underline-offset-4 hover:text-blue-300"
              href="mailto:phyothandar394@gmail.com"
            >
              Email
            </a>
            <a
              className="underline underline-offset-4 hover:text-blue-300"
              href="https://www.linkedin.com/in/phyo-thandar-643736170/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="underline underline-offset-4 hover:text-blue-300"
              href="https://github.com/phyotd"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Phyo · Built with Next.js and TypeScript
      </footer>
    </main>
  );
}
