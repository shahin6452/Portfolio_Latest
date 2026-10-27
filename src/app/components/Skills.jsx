const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Docker"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-divider" />

      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-label justify-center">
            My Expertise
          </span>

          <h2 className="section-title">
            Skills & <span className="highlight">Technologies</span>
          </h2>

          <p className="section-subtitle mx-auto">
            Technologies and tools I use while learning and building
            web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="skill-category-card"
            >
              <h3 className="text-xl font-bold mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}