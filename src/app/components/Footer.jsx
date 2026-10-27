export default function Footer() {
    return (
        <footer className="relative z-[1] py-6 text-center">
            <div className="section-divider" />

            <p className="text-sm text-secondary px-4">
                © {new Date().getFullYear()} Shahin Alam.
                All rights reserved.
            </p>
        </footer>
    );
}