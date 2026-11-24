type SkillGroup = {
  title: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Mobile",
    skills: ["Flutter", "Dart", "React Native", "TypeScript", "JavaScript"],
  },
  {
    title: "Architecture and state",
    skills: [
      "Clean Architecture",
      "MVVM",
      "Repository Pattern",
      "Riverpod",
      "Provider",
      "GetX",
      "Redux",
    ],
  },
  {
    title: "Firebase",
    skills: ["Auth", "Firestore", "FCM", "Remote Config", "Analytics"],
  },
  {
    title: "APIs and data",
    skills: ["REST", "Dio", "SQLite (Drift)", "MongoDB", "MySQL"],
  },
  {
    title: "Release",
    skills: [
      "Google Play Console",
      "App Store Connect",
      "TestFlight",
      "GitHub Actions",
    ],
  },
  {
    title: "Web",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="skills-heading"
      className="mx-auto w-full max-w-5xl px-6 py-20"
    >
      <h3
        id="skills-heading"
        className="uppercase font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl"
      >
        Core technologies
      </h3>
      <dl className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-3 py-5 md:grid-cols-[14rem_1fr] md:gap-8"
          >
            <dt className="font-medium text-neutral-900 dark:text-neutral-100">
              {group.title}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-neutral-300 px-3 py-1 text-sm text-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
