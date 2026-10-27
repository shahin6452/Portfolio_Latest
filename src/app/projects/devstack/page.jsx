import Link from "next/link";

export const metadata = {
    title: "Dev Stack Builder | Shahin Alam",
    description: "Dev Stack Builder project details.",
};

export default function DevStackPage() {
    return (
        <main className="section-container py-20">
            <Link href="/#projects" className="btn-outline inline-flex mb-8">
                ← Back to Projects
            </Link>

            <p className="section-label">PROJECT DETAILS</p>
            <h1 className="section-title">
                Dev Stack <span className="highlight">Builder</span>
            </h1>

            <p className="section-subtitle">
                A developer-focused web project designed to help organize and
                explore development tools and technologies.
            </p>

            <div className="project-card p-6 mt-8">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <p className="text-secondary leading-7">
                    Dev Stack Builder is a web project published on Netlify. This
                    page provides a project overview and links to the live website
                    and source code.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                    {["JavaScript", "React", "Web Development", "Netlify"].map(
                        (tech) => (
                            <span className="skill-tag" key={tech}>{tech}</span>
                        )
                    )}
                </div>

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