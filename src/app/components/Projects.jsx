import Link from "next/link";

const projects = [
    {
        id: "fitlog",
        title: "Fit-Log",
        image: "/assets/fitlog-preview.png",
        description:
            "A fitness web application for tracking workouts and managing fitness goals.",
        live: "https://fit-log-website-delta.vercel.app/",
        repo: "https://github.com/shahin6452/Fit-Log-Website",
        technologies: ["Next.js", "React", "Tailwind CSS"],
    },
    {
        id: "bazardoor",
        title: "Bazar Dor",
        image: "/assets/bazardoor-preview.png",
        description:
            "An e-commerce marketplace project built with modern web technologies.",
        live: "https://shahin-bazar-dor.vercel.app/",
        repo: "https://github.com/shahin6452/Bazar-Dor",
        technologies: ["Next.js", "MongoDB", "Authentication"],
    },
    {
        id: "devstack",
        title: "Dev Stack Builder",
        image: "/assets/devstack-preview.png",
        description:
            "A tool for exploring and generating development stack configurations.",
        live: "https://devstack6452.netlify.app/",
        repo: "https://github.com/shahin6452/Dev-Stack-Builder",
        technologies: ["React", "JavaScript", "Node.js"],
    },
];

export default function Projects() {
    return (
        <section id="projects">
            <div className="section-divider" />

            <div className="section-container">
                <div className="text-center mb-16">
                    <span className="section-label justify-center">
                        My Work
                    </span>

                    <h2 className="section-title">
                        Featured <span className="highlight">Projects</span>
                    </h2>

                    <p className="section-subtitle mx-auto">
                        A selection of projects I have built while learning
                        and practising web development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="project-card"
                        >
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    loading="lazy"
                                />
                            </div>

                            <div className="project-body">
                                <h3 className="project-title">
                                    {project.title}
                                </h3>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 my-4">
                                    {project.technologies.map((technology) => (
                                        <span className="skill-tag" key={technology}>
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                    >
                                        Live Demo
                                    </a>

                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-outline"
                                    >
                                        Source Code
                                    </a>

                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="btn-outline"
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}