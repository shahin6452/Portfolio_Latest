import Link from "next/link";

export const metadata = {
    title: "Bazar Dor | Shahin Alam",
    description: "Bazar Dor web application project details.",
};

export default function BazarDorPage() {
    return (
        <main className="section-container py-20">
            <Link href="/#projects" className="btn-outline inline-flex mb-8">
                ← Back to Projects
            </Link>

            <p className="section-label">PROJECT DETAILS</p>
            <h1 className="section-title">
                Bazar <span className="highlight">Dor</span>
            </h1>

            <p className="section-subtitle">
                A web application project focused on product and market-related
                information, with authentication features.
            </p>

            <div className="project-card p-6 mt-8">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <p className="text-secondary leading-7">
                    Bazar Dor is a Next.js project that uses MongoDB for data storage
                    and Better Auth for authentication. Google and GitHub sign-in
                    functionality has also been integrated.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                    {["Next.js", "React", "MongoDB", "Better Auth", "GitHub OAuth", "Google OAuth"].map(
                        (tech) => (
                            <span className="skill-tag" key={tech}>{tech}</span>
                        )
                    )}
                </div>

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