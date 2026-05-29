import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LayoutNav from "@/components/LayoutNav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soap. | Franchise Marketing Platform",
  description:
    "Soap is a multi-tenant marketing platform built for franchise systems. Unified visibility for franchisors. Turnkey local marketing for franchisees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LayoutNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
