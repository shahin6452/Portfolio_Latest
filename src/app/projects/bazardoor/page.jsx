import Link from "next/link";

export const metadata = {
  title: "Bazar Dor | Shahin Alam",
  description: "Bazar Dor project details, technologies, challenges and future plans.",
};

const technologies = [
  "Next.js",
  "React",
  "MongoDB",
  "Better Auth",
  "Google OAuth",
  "GitHub OAuth",
];

const challenges = [
  "Configuring authentication and session handling.",
  "Connecting the application to MongoDB.",
  "Handling sign-in, sign-up and sign-out feedback consistently.",
  "Managing authentication redirects and protected pages.",
];

const improvements = [
  "Improve form validation and authentication error handling.",
  "Strengthen security and protected-route handling.",
  "Expand product and market-related features.",
  "Improve loading states, accessibility and mobile usability.",
];

export default function BazarDorPage() {
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
        Bazar <span className="highlight">Dor</span>
      </h1>

      <p className="section-subtitle">
        A web application project focused on market-related information
        and user authentication.
      </p>

      <div className="project-card p-5 sm:p-8 mt-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p className="text-secondary leading-7">
            Bazar Dor is a Next.js application using MongoDB for data storage
            and Better Auth for authentication. Google and GitHub sign-in
            functionality has been integrated into the project.
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
            href="https://shahin-bazar-dor.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Live Website ↗
          </a>

          <a
            href="https://github.com/shahin6452/Bazar-Dor"
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