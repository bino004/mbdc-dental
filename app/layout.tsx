import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MBDC Dental College",
  description: "Premium Dental College Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* CHANGED bg-[#eaf2ff] to bg-[#06111f] so the document itself is dark */}
      <body
        className={`${geist.className} bg-[#06111f] antialiased text-white`}
      >
        <ScrollProgress />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
