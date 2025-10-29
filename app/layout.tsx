import type { Metadata } from "next";
import { Rubik, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rubik = Rubik({ subsets: ["latin"], variable: '--font-rubik' });
const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ["latin"], variable: '--font-roboto' });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], variable: '--font-roboto-slab' });

export const metadata: Metadata = {
  title: "Digital Insights UAE - Advanced Cybersecurity Solutions",
  description: "Keep companies safe from cyber attacks. 24/7 threat detection, incident response, and cutting-edge security services for UAE businesses.",
  keywords: "Cybersecurity, Digital Forensics, SOC, Penetration Testing, Security Assessments, AI Security, UAE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${roboto.variable} ${robotoSlab.variable} font-rubik bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
