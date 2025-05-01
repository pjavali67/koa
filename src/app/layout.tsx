import type { Metadata } from "next";
import FlyonuiScript from "../components/FlyonuiScript";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//import Navbar from "../components/navbar";
//import Footer from "../components/footer";
import NavigationBar from "../components/custom-components/NavigationBar";
import TopBarActionLinks from "../components/TopBarActionLinks";
import FooterComponent from "../components/custom-components/footer/FooterComponet";

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
        <div className="w-full h-screen flex flex-col justify-between min-h-screen">
          <header>
            <nav>
              <div className="bg-cyan-600 w-100%  ">
                <TopBarActionLinks />
              </div>
            </nav>
            {/* <Navbar /> */}
            <NavigationBar />
          </header>
          <main>{children}</main>
          <footer>
            {/* <Footer /> */}
            <FooterComponent />
          </footer>
        </div>

        <FlyonuiScript />
      </body>
    </html>
  );
}
