import Link from "next/link";

export const metadata = {
  title: "Dev Stack Builder | Shahin Alam",
  description: "Dev Stack Builder project details, technologies, challenges and future plans.",
};

const technologies = [
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Netlify",
];

const challenges = [
  "Organizing the interface so users can navigate development-related content easily.",
  "Maintaining consistent styling and layout.",
  "Making the interface usable across desktop and mobile screen sizes.",
];

const improvements = [
  "Add more development tools and technology resources.",
  "Introduce search and category filters.",
  "Improve the user interface and accessibility.",
  "Add regularly maintained resources and useful documentation links.",
];

export default function DevStackPage() {
  return (
    <main className="section-container py-16 sm:py-20">
      <Link
        href="/#projects"
        className="btn-outline inline-flex mb-8"
      >
        ← Back to Projects
      </Link>

      <p className="section-label">PROJECT DETAILS</p>

      <h1 className="section-title">
        Dev Stack <span className="highlight">Builder</span>
      </h1>

      <p className="section-subtitle">
        A developer-focused web project designed to organize and explore
        development tools and technologies.
      </p>

      <div className="project-card p-5 sm:p-8 mt-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p className="text-secondary leading-7">
            Dev Stack Builder is a web project published on Netlify.
            This project page describes its purpose, technology stack,
            development challenges and possible future enhancements.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span className="skill-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-3">
            Challenges Faced
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-secondary leading-7">
            {challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-3">
            Future Improvements
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-secondary leading-7">
            {improvements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://devstack6452.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Live Website ↗
          </a>

          <a
            href="https://github.com/shahin6452/Dev-Stack-Builder"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub Repository ↗
          </a>
        </div>
      </div>
    </main>
  );
}