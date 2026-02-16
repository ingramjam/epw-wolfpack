import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Escondido Pop Warner | EPW Wolfpack - Youth Football & Cheer",
  description: "Join Escondido Pop Warner (EPW) - Premier youth football and cheer program. Flag football, tackle football, and cheerleading for kids ages 5-14. Register now!",
  keywords: "youth football, pop warner, flag football, tackle football, cheerleading, escondido, youth sports",
  openGraph: {
    title: "Escondido Pop Warner | EPW Wolfpack",
    description: "Premier youth football and cheer program in Escondido",
    type: "website",
    url: "https://www.epwwolfpack.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
