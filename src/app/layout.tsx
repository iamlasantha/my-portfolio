import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleNetwork from "./components/ParticleNetwork";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Devfolio | Senior Full Stack Developer Portfolio",
  description: "Portfolio of a Senior Full Stack Developer specializing in Next.js, React, and DevOps. View my projects, skills, and contact information.",
  openGraph: {
    title: "Devfolio | Senior Full Stack Developer Portfolio",
    description: "Showcasing projects and skills in Full Stack Development and DevOps.",
    url: "https://devfolio-nextjs.vercel.app", // Replace with actual URL if known, or keep generic relative
    siteName: "Devfolio",
    images: [
      {
        url: "/og-image.png", // Ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "Devfolio Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devfolio | Senior Full Stack Developer Portfolio",
    description: "Showcasing projects and skills in Full Stack Development and DevOps.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-dark text-white transition-colors ${inter.variable} antialiased`}>
        <ThemeProvider>
          <ParticleNetwork />
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
