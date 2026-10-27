"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right, .stagger-children").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: "🎓",
      title: "Learning Journey",
      description: "Currently building strong foundations in full stack development through Programming Hero's structured curriculum.",
    },
    {
      icon: "💻",
      title: "Backend Enthusiast",
      description: "Passionate about backend architectures, APIs, databases, and building scalable server-side solutions.",
    },
    {
      icon: "✈️",
      title: "Explorer at Heart",
      description: "When not coding, I love traveling to new places and watching movies to recharge creativity.",
    },
  ];

  return (
    <section id="about" ref={sectionRef} style={{ background: "var(--bg-secondary)" }}>
      <div className="section-divider" />
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label justify-center">About Me</span>
          <h2 className="section-title">
            Get to Know <span className="highlight">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A glimpse into who I am, what drives me, and where I&apos;m headed in my development journey.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left — Story */}
          <div className="flex-1 reveal-left">
            <div className="glass-card-static p-6 sm:p-8">
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  color: "var(--accent-primary)",
                }}
              >
                My Story
              </h3>
              <div
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                }}
              >
                <p style={{ marginBottom: "1rem" }}>
                  Hi! I&apos;m <strong style={{ color: "var(--text-primary)" }}>Shahin Alam</strong>, an aspiring Full Stack Developer from Bangladesh. My journey into web development started with a deep curiosity about how modern web applications work — from the visual interfaces users interact with to the complex server logic running behind the scenes.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  I&apos;m currently learning and growing through <strong style={{ color: "var(--accent-primary)" }}>Programming Hero</strong>, where I&apos;ve been building real-world projects that challenge me to apply HTML, CSS, JavaScript, React, Next.js, and more. Each project pushes me to write cleaner code and think more critically about user experience.
                </p>
                <p>
                  My long-term goal is to specialize in <strong style={{ color: "var(--accent-secondary)" }}>backend development</strong> — building robust APIs, working with databases, and designing scalable system architectures. Outside of coding, I find inspiration in traveling and watching movies.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Highlights */}
          <div className="flex-1 stagger-children">
            <div className="flex flex-col gap-5">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card-static p-5 flex gap-4 items-start"
                  style={{
                    borderLeft: "3px solid",
                    borderImage: "var(--gradient-accent) 1",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        marginBottom: "0.35rem",
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div
              className="grid grid-cols-2 gap-4 mt-6 reveal"
              style={{ transitionDelay: "0.4s" }}
            >
              {[
                { label: "Projects Built", value: "3+", color: "var(--accent-primary)" },
                { label: "Currently Learning", value: "Full Stack", color: "var(--accent-secondary)" },
                { label: "Focus Area", value: "Backend", color: "var(--accent-warm)" },
                { label: "Available for", value: "Opportunities", color: "var(--accent-pink)" },
              ].map((fact, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-xl"
                  style={{
                    background: "rgba(45, 212, 191, 0.04)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: fact.color,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {fact.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      fontWeight: 500,
                    }}
                  >
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
