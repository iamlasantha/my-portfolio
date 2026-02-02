import type { Metadata } from "next";
import { Inter, Roboto, Bilbo } from "next/font/google"; // Import Roboto and Bilbo
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleNetwork from "./components/ParticleNetwork";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const bilbo = Bilbo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bilbo",
});

export const metadata: Metadata = {
  title: "Lasantha Wellalage",
  description: "MIS Undergraduate Student at NSBM Green University. Enthusiast in Linux, DevOps, and Cloud Technologies.",
  openGraph: {
    title: "Lasantha Wellalage",
    description: "MIS Undergraduate Student at NSBM Green University. Enthusiast in Linux, DevOps, and Cloud Technologies.",
    url: "https://lasanthawellalage.com",
    siteName: "Lasantha Wellalage",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lasantha Wellalage Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lasantha Wellalage",
    description: "MIS Undergraduate Student at NSBM Green University. Enthusiast in Linux, DevOps, and Cloud Technologies.",
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
      <body className={`bg-dark text-white transition-colors ${inter.variable} ${roboto.variable} ${bilbo.variable} antialiased`}>
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
