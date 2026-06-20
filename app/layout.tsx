import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://kamta-rathour.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kamta Prasad Rathour | Python & GenAI Engineer",
    template: "%s | Kamta Prasad Rathour",
  },
  description:
    "Portfolio of Kamta Prasad Rathour — Python Developer, AI Engineer & GenAI Engineer specializing in LLMs, RAG, LangChain, Next.js and cloud-native AI applications.",
  keywords: [
    "Kamta Prasad Rathour",
    "Python Developer",
    "AI Engineer",
    "GenAI Engineer",
    "LangChain Developer",
    "RAG",
    "LLM Engineer",
    "Next.js Developer",
    "Bhopal Software Engineer",
  ],
  authors: [{ name: "Kamta Prasad Rathour", url: SITE_URL }],
  creator: "Kamta Prasad Rathour",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Kamta Prasad Rathour | Python & GenAI Engineer",
    description:
      "Python Developer, AI Engineer & GenAI Engineer building real-world AI-powered applications with LLMs, RAG and LangChain.",
    siteName: "Kamta Prasad Rathour Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamta Prasad Rathour | Python & GenAI Engineer",
    description:
      "Python Developer, AI Engineer & GenAI Engineer building real-world AI-powered applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05060f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kamta Prasad Rathour",
    jobTitle: "Python Developer | AI Engineer | GenAI Engineer",
    url: SITE_URL,
    email: "mailto:Kamtaprasadrathour559@gmail.com",
    telephone: "+91-7828817176",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/kamta-prasad-rathour-36116833a/",
      "https://github.com/Kamta-135",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Radharaman Engineering College, RGPV University",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} bg-void font-body antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-cyan-glow focus:px-4 focus:py-2 focus:text-void"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
