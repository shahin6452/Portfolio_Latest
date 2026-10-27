import Link from "next/link";

export const metadata = {
    title: "Fit-Log | Shahin Alam",
    description: "Fit-Log fitness tracking website project details.",
};

export default function FitLogPage() {
    return (
        <main className="section-container py-20">
            <Link href="/#projects" className="btn-outline inline-flex mb-8">
                ← Back to Projects
            </Link>

            <p className="section-label">PROJECT DETAILS</p>
            <h1 className="section-title">
                Fit-Log <span className="highlight">Website</span>
            </h1>

            <p className="section-subtitle">
                A fitness website built to explore exercises and support fitness
                planning with a clean, responsive interface.
            </p>

            <div className="project-card p-6 mt-8">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <p className="text-secondary leading-7">
                    Fit-Log is a fitness web project built with Next.js, Tailwind CSS,
                    and DaisyUI. It includes reusable components for displaying
                    exercises and organizing fitness-related content.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "Tailwind CSS", "DaisyUI", "REST API"].map(
                        (tech) => (
                            <span className="skill-tag" key={tech}>{tech}</span>
                        )
                    )}
                </div>

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