import type { Metadata } from "next";
import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "jnde.dev — Mohammad Joundi | Power Platform Developer",
  description:
    "Portfolio of Mohammad Joundi — Power Platform Developer at CMA CGM, Lebanese University CS graduate, 42 Beirut graduate. Specializing in Power Apps, Power Automate, and enterprise automation.",
  keywords: [
    "Power Platform", "Power Apps", "Power Automate", "42 Beirut",
    "Lebanese University", "CMA CGM", "Mohammad Joundi", "jnde", "Automation",
  ],
  authors: [{ name: "Mohammad Joundi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jnde.dev",
    title: "jnde.dev — Mohammad Joundi | Power Platform Developer",
    description:
      "Enterprise automation engineer with a CS background from Lebanese University and 42 Beirut. Building powerful workflows and apps at CMA CGM.",
    siteName: "jnde.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
