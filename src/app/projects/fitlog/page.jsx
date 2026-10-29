import Link from "next/link";

export const metadata = {
  title: "Fit-Log | Shahin Alam",
  description: "Fit-Log project details, technologies, challenges and future plans.",
};

const technologies = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "DaisyUI",
  "REST API",
];

const challenges = [
  "Fetching exercise data from an external API and displaying it correctly.",
  "Building reusable components for exercise cards and details.",
  "Maintaining a consistent, responsive layout across different screen sizes.",
];

const improvements = [
  "Add exercise search, filtering and category-based navigation.",
  "Introduce user accounts and personalized workout plans.",
  "Add workout history and progress tracking.",
  "Improve accessibility and loading performance.",
];

export default function FitLogPage() {
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
        Fit-Log <span className="highlight">Website</span>
      </h1>

      <p className="section-subtitle">
        A fitness website for exploring exercises and organizing
        fitness-related information through a clean, responsive interface.
      </p>

      <div className="project-card p-5 sm:p-8 mt-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p className="text-secondary leading-7">
            Fit-Log is a fitness web project built with Next.js, React,
            Tailwind CSS and DaisyUI. It uses reusable components to display
            exercise information and provide a consistent user experience.
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
            href="https://fit-log-website-delta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Live Website ↗
          </a>

          <a
            href="https://github.com/shahin6452/Fit-Log-Website"
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