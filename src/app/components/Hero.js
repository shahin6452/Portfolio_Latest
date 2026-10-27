"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    // Create floating particles
    const container = particlesRef.current;
    if (!container) return;

    const colors = [
      "rgba(45, 212, 191, 0.4)",
      "rgba(129, 140, 248, 0.3)",
      "rgba(249, 115, 22, 0.3)",
    ];

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 6 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(particle);
    }

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      <div className="section-container w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div
            className="flex-1 text-center lg:text-left"
            style={{ animation: "fadeInUp 0.8s ease-out forwards" }}
          >
            {/* Greeting badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(45, 212, 191, 0.08)",
                border: "1px solid rgba(45, 212, 191, 0.2)",
              }}
            >
              <span className="text-lg" role="img" aria-label="wave">
                👋
              </span>
              <span
                style={{
                  color: "var(--accent-primary)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                Hello there, I&apos;m
              </span>
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: "clamp(2.2rem, 6vw, 4rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                marginBottom: "0.75rem",
              }}
            >
              Shahin{" "}
              <span
                style={{
                  background: "var(--gradient-accent)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Alam
              </span>
            </h1>

            {/* Designation with typing effect */}
            <div
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                color: "var(--text-secondary)",
                fontWeight: 500,
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
              className="lg:justify-start"
            >
              <span
                style={{
                  color: "var(--accent-warm)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9em",
                }}
              >
                {"<"}
              </span>
              Full Stack Developer
              <span
                style={{
                  color: "var(--accent-warm)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9em",
                }}
              >
                {"/>"}
              </span>
              <span className="typing-cursor" aria-hidden="true" />
            </div>

            {/* Brief intro */}
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                maxWidth: "540px",
                marginBottom: "2rem",
              }}
              className="mx-auto lg:mx-0"
            >
              Passionate about crafting clean, performant web applications with
              modern technologies. Currently sharpening my skills through
              Programming Hero and building real-world projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn-primary">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                View Projects
              </a>
              <a
                href="#"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div
              className="flex gap-3 mt-8 justify-center lg:justify-start"
              style={{ animation: "fadeInUp 1s ease-out 0.4s both" }}
            >
              {[
                {
                  href: "https://github.com/shahin6452/",
                  label: "GitHub",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  href: "https://www.linkedin.com/in/shahinalam2/",
                  label: "LinkedIn",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: "https://facebook.com/shahin6452",
                  label: "Facebook",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="flex-shrink-0"
            style={{ animation: "slideInRight 0.8s ease-out 0.2s both" }}
          >
            <div className="hero-image-wrapper w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px]">
              <div className="relative w-full h-full rounded-full overflow-hidden z-[1]">
                <Image
                  src="/assets/pic.png"
                  alt="Shahin Alam — Full Stack Developer"
                  fill
                  sizes="(max-width: 640px) 250px, (max-width: 1024px) 300px, 380px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating badges around image */}
            <div
              className="hidden lg:block absolute"
              style={{
                top: "15%",
                right: "-10px",
                animation: "float 3s ease-in-out infinite",
              }}
            >
              <div
                className="glass-card-static px-3 py-2 flex items-center gap-2"
                style={{ fontSize: "0.8rem" }}
              >
                <span>⚡</span>
                <span style={{ color: "var(--accent-primary)", fontWeight: 600 }}>
                  Next.js
                </span>
              </div>
            </div>

            <div
              className="hidden lg:block absolute"
              style={{
                bottom: "20%",
                left: "-20px",
                animation: "float 3.5s ease-in-out 0.5s infinite",
              }}
            >
              <div
                className="glass-card-static px-3 py-2 flex items-center gap-2"
                style={{ fontSize: "0.8rem" }}
              >
                <span>🚀</span>
                <span
                  style={{ color: "var(--accent-secondary)", fontWeight: 600 }}
                >
                  React
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: "float 2s ease-in-out infinite" }}
      >
        <div
          className="flex flex-col items-center gap-2"
          style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}
        >
          <span>Scroll Down</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
