import type { Metadata } from "next";
import FlyonuiScript from "../components/FlyonuiScript";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to Karnataka Orthopaedic Association",
  description:
    "This community has been setup for the Karnataka Orthopaedic Association Members and will attempt to be a high quality forum for academic discussion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        <div className="w-full h-screen flex flex-col justify-between">
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>

        <FlyonuiScript />
      </body>
    </html>
  );
}
