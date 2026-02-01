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
  title: "Lasantha Wellalage",
  description: "Undergraduate Sttudent at NSBM Green University | Linux | Devops | Cloud Enthusiast",
  openGraph: {
    title: "Lasantha Wellalage",
    description: "Undergraduate Sttudent at NSBM Green University | Linux | Devops | Cloud Enthusiast",
    url: "https://lasanthawellalage.com", // Replace with actual URL if known, or keep generic relative
    siteName: "Lasantha Wellalage",
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
    title: "Lasantha Wellalage",
    description: "Undergraduate Sttudent at NSBM Green University | Linux | Devops | Cloud Enthusiast",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/tab-logo.png",
    shortcut: "/tab-logo.png",
    apple: "/tab-logo.png",
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
