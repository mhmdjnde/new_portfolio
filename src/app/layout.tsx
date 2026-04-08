import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamad Joundi — Power Platform Developer",
  description:
    "Portfolio of Mohamad Joundi — Power Platform Developer at CMA CGM, Lebanese University CS graduate, 42 Beirut graduate. Specializing in Power Apps, Power Automate, and enterprise automation.",
  keywords: [
    "Mohamad Joundi", "mohamad Joundi", "mhmdjnde", "mhmdjnde.dev",
    "Power Platform", "Power Apps", "Power Automate",
    "42 Beirut", "Lebanese University", "CMA CGM",
    "Power Platform Developer Lebanon", "Automation Engineer",
  ],
  authors: [{ name: "Mohamad Joundi", url: "https://mhmdjnde.dev" }],
  metadataBase: new URL("https://mhmdjnde.dev"),
  alternates: { canonical: "https://mhmdjnde.dev" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mhmdjnde.dev",
    title: "Mohamad Joundi — Power Platform Developer",
    description:
      "Enterprise automation engineer with a CS background from Lebanese University and 42 Beirut. Building powerful workflows and apps at CMA CGM.",
    siteName: "mhmdjnde.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamad Joundi — Power Platform Developer",
    description:
      "Power Platform Developer at CMA CGM. Lebanese University CS graduate, 42 Beirut graduate.",
    creator: "@mhmdjnde",
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
    <html
      lang="en"
      className={`${bricolage.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohamad Joundi",
              alternateName: ["mohamad Joundi", "mhmdjnde"],
              url: "https://mhmdjnde.dev",
              email: "contact@mhmdjnde.dev",
              jobTitle: "Power Platform Developer",
              worksFor: { "@type": "Organization", name: "CMA CGM" },
              alumniOf: [
                { "@type": "CollegeOrUniversity", name: "Lebanese University" },
                { "@type": "EducationalOrganization", name: "42 Beirut" },
              ],
              knowsAbout: ["Power Apps", "Power Automate", "Dataverse", "SharePoint", "Enterprise Automation"],
              sameAs: [
                "https://www.linkedin.com/in/mohamad-joundi/",
                "https://github.com/mhmdjnde",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
