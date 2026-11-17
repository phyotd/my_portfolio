import { Smartphone, Rocket, LayoutDashboard, Award } from "lucide-react";

const stats = [
  { icon: Smartphone, value: "8+", label: "Apps built" },
  { icon: Rocket, value: "3+", label: "Apps published" },
  { icon: LayoutDashboard, value: "2", label: "Dashboards" },
  { icon: Award, value: "5+", label: "Flutter experience" },
];

export function Stats() {
  return (
    <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border bg-card p-4 shadow-sm sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-border">
      {stats.map(({ icon: Icon, value, label }) => (
        <div
          key={label}
          className="flex items-center gap-3 sm:justify-center sm:px-4"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col-reverse">
            <dt className="text-xs text-foreground">{label}</dt>
            <dd className="text-xl font-bold leading-tight text-foreground sm:text-2xl">
              {value}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
