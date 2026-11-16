import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Kitchen Display System",
    category: "Mobile Application",
    description:
      "A real-time kitchen display system for managing orders, tracking preparation status, and improving kitchen workflows.",
    image: "/images/projects/kds.png",
    technologies: ["Flutter", "Dart", "Firebase", "Provider"],
    slug: "kds",
  },
  {
    title: "Foresight Petrol Station",
    category: "Business Application",
    description:
      "A petrol station management solution designed to support daily business operations and management workflows.",
    image: "/images/projects/foresight.png",
    technologies: ["Flutter", "Dart", "Firebase", "Firestore"],
    slug: "foresight",
  },
  {
    title: "FCS Logistics",
    category: "Mobile Application",
    description:
      "A logistics application built to support delivery operations and streamline business processes.",
    image: "/images/projects/fcs-logistics.png",
    technologies: ["Flutter", "Dart", "Firebase"],
    slug: "fcs-logistics",
  },
];

export default function SelectedProjects() {
  return (
    <section id="projects" className="py-10">
      {/* Section heading */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-slate-500">MY WORK</p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Selected Projects
          </h2>
          <p className="text-slate-500 mt-2">Some projects I have worked on.</p>
        </div>
        <Link
          href="/projects"
          className="hidden text-slate-500 sm:inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition"
        >
          View All Projects
          <span>→</span>
        </Link>
      </div>
      {/* Project cards */}
    </section>
  );
}
