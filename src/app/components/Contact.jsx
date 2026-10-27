const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/shahin6452/",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shahinalam2/",
    },
    {
        name: "Facebook",
        url: "https://facebook.com/shahin6452",
    },
];

export default function Contact() {
    return (
        <section id="contact">
            <div className="section-divider" />

            <div className="section-container text-center">
                <span className="section-label justify-center">
                    Get in Touch
                </span>

                <h2 className="section-title">
                    Let's <span className="highlight">Connect</span>
                </h2>

                <p className="section-subtitle mx-auto">
                    Have a project idea or an opportunity? Feel free to
                    contact me.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <a
                        href="mailto:shahin.shohag6452@gmail.com"
                        className="btn-primary"
                    >
                        Email Me
                    </a>

                    <a
                        href="tel:+8801521333943"
                        className="btn-outline"
                    >
                        Call Me
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mt-8">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link"
                        >
                            {social.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}