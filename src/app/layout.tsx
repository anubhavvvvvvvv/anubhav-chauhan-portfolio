import type { Metadata } from "next";
import "@fontsource/bebas-neue/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

const SITE_URL = "https://anubhavchauhan.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Anubhav Chauhan | Data & Product Analyst",
    template: "%s | Anubhav Chauhan",
  },
  description:
    "Portfolio of Anubhav Chauhan, a Data & Product Analyst specializing in SQL, Python, and Tableau — turning messy business data into decisions that matter.",
  keywords: [
    "Anubhav Chauhan",
    "Data Analyst",
    "Product Analyst",
    "SQL",
    "Python",
    "Tableau",
    "Business Intelligence",
    "Portfolio",
  ],
  authors: [{ name: "Anubhav Chauhan" }],
  creator: "Anubhav Chauhan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Anubhav Chauhan | Data & Product Analyst",
    description:
      "Turning messy business data into decisions that matter. Explore projects in SQL, Python, and Tableau.",
    siteName: "Anubhav Chauhan Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Anubhav Chauhan — Data & Product Analyst" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anubhav Chauhan | Data & Product Analyst",
    description:
      "Turning messy business data into decisions that matter. Explore projects in SQL, Python, and Tableau.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

