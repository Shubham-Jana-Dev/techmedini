import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechMedini | Simple & Reliable Cloud Hosting for Indian Businesses",
  description:
    "Fast, reliable cloud server hosting and ERP solutions for Schools, Restaurants, and Small Businesses in India. High uptime, daily backups, and dedicated WhatsApp support.",
  keywords: [
    "TechMedini",
    "School ERP Hosting India",
    "Restaurant POS Billing Hosting",
    "Small Business ERP India",
    "Reliable Local Cloud Hosting India",
    "techmedini.in"
  ],
  openGraph: {
    title: "TechMedini | Simple & Reliable Cloud Hosting for Indian Businesses",
    description: "Fast, reliable server hosting and custom ERP software so your business operations run smoothly 24/7.",
    url: "https://techmedini.in",
    siteName: "TechMedini Business Solutions",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
