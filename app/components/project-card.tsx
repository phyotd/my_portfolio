import Image from "next/image";
import Link from "next/link";

export interface Project {
  title: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
  screenshots: string[];
  slug: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl">
      {/* Actual application screenshots */}
      <div className="p-3">
        <div className="grid grid-cols-[1.6fr_1fr] gap-2 overflow-hidden rounded-xl bg-muted aspect-16/10">
          <div className="relative overflow-hidden">
            <Image
              src={project.screenshots[0]}
              alt={`${project.title} main screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="grid grid-rows-2 gap-2 min-h-0">
            {project.screenshots.slice(1, 3).map((image, index) => (
              <div key={image} className="relative overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 2}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project information */}
      <div className="px-5 pb-5 pt-2">
        <span className="inline-flex rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
          {project.category}
        </span>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>

        <p className="mt-2 min-h-15 text-sm leading-relaxed text-slate-500">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-500  px-2.5 py-1 text-xs text-slate-500"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Role */}
        {/* <div className="mt-5 border-t border-border pt-4">
          <p className="text-xs text-muted-foreground">
            MY ROLE
          </p>
          <p className="mt-1 text-sm font-medium">
            {project.role}
          </p> */}
        {/* </div> */}

        {/* Details link */}
        {/* <Link
          href={`/projects/${project.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
        >
          View Project Details
          <span aria-hidden="true">→</span>
        </Link> */}
      </div>
    </article>
  );
}
