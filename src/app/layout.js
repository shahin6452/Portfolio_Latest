import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Shahin Alam — Full Stack Developer Portfolio",
  description:
    "Explore Shahin Alam's portfolio, web development skills, projects, and journey as a Full Stack Developer.",
  keywords: [
    "Shahin Alam",
    "Full Stack Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Portfolio",
    "Web Developer",
  ],
  openGraph: {
    title: "Shahin Alam — Full Stack Developer",
    description:
      "Building modern web applications with React, Next.js, and Node.js.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}