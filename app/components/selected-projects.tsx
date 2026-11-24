import Link from "next/link";
import ProjectCard from "./project-card";

const projects = [
  {
    title: "KDS - Kitchen Display System",
    category: "Mobile Application",
    description:
      "A real-time kitchen display system for managing orders, tracking preparation status, and improving kitchen workflows.",
    screenshots: [
      "/images/kds/kds_1.jpg",
      "/images/kds/kds_2.jpg",
      "/images/kds/kds_3.jpg",
    ],
    role: "",
    technologies: ["Flutter", "Dart", "Firebase", "Provider"],
    slug: "kds",
  },
  {
    title: "WeSuccess",
    category: "E-commerce Application",
    role: "",
    description:
      "A user-friendly e-commerce platform for showcasing products, simplifying checkout, and managing orders.",
    screenshots: [
      "/images/ws/ws_1.png",
      "/images/ws/ws_2.png",
      "/images/ws/ws_3.png",
    ],
    technologies: ["React Native", "Javascript", "Firebase", "Redux"],
    slug: "wesuccess",
  },
  {
    title: "Showlike",
    category: "Mobile Application",
    role: "",
    description:
      "An entertainment platform for discovering and watching documentaries, series, and movies in one place",
    screenshots: [
      "/images/showlike/home.png",
      "/images/showlike/login.png",
      "/images/showlike/search.png",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "GetX"],
    slug: "showlike",
  },
  {
    title: "Smoove",
    category: "Mobile Application",
    role: "",
    description:
      "A travel guide application for exploring attractions, discovering famous places, and finding great restaurants.",
    screenshots: [
      "/images/smoove/sm_1.png",
      "/images/smoove/sm_2.png",
      "/images/smoove/sm_3.png",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "GetX"],
    slug: "smoove",
  },

  {
    title: "Foresight",
    category: "Business Application",
    role: "",
    description:
      "A petrol station management solution designed to support daily business operations and management workflows.",
    screenshots: [
      "/images/sme/sme_1.png",
      "/images/sme/sme_2.png",
      "/images/sme/sme_3.png",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Firestore","Provider"],
    slug: "foresight",
  },
  {
    title: "FCS",
    category: "Web Application",
    role: "",
    description:
      "A web application for tracking package status, with admin tools to manage users’ packages, routes, and shipments.",
    screenshots: [
      "/images/fcs/logo.jpeg",
      "/images/fcs/search.jpg",
      "/images/fcs/login.png",
    ],
    technologies: ["ReactJS", "Javascript", "Redux", "Firebase", "Firestore"],
    slug: "fcs",
  },
  {
    title: "SME Foresight",
    category: "Web Application",
    role: "",
    description:
      "A web-based system for managing multiple petrol stations, their staff, and fuel and product stock levels.",
    screenshots: [
      "/images/sme/login.png",
      "/images/sme/qr_login.png",
      "/images/sme/ph_login.png",
    ],
    technologies: ["Flutter Web", "Dart", "Provider", "Firebase", "Firestore"],
    slug: "sme",
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
        {/* <Link
          href="/projects"
          className="hidden text-slate-500 sm:inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition"
        >
          View All Projects
          <span>→</span>
        </Link> */}
      </div>
      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </section>
  );
}
