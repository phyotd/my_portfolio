import { Code, Code2 } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
      <a href="#home" className="text-lg font-bold tracking-tight">
        <div className="flex flex-1 ">
          <Code2 className="text-primary" /> 
          <span className="pl-1 text-foreground">Dev</span>
          <span className="text-primary">Portfolio</span>
        </div>
      </a>
      <div className="flex items-center gap-4 text-md text-slate-600 sm:gap-7">
         <a className="transition hover:text-primary-hover" href="#home">
          Home
        </a>
        <a className="transition hover:text-primary-hover" href="#projects">
          Projects
        </a>
        <a
          className="hidden transition hover:text-primary-hover sm:inline"
          href="#about"
        >
          About
        </a>
        <a className="transition hover:text-primary-hover" href="#contact">
          Contact
        </a>
      </div>
      <ThemeToggle />
    </nav>
  );
}
