import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata: Metadata = {
  title: "Aafi Malek - MLE",
  description:
    "Aafi Malek is a Machine Learning Engineer and loves working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          "flex antialiased h-screen overflow-hidden bg-black"
        )}
      >
        <Sidebar />
        <div className="bg-neutral-100 flex-1 overflow-y-auto border-l-2">
          <div className="flex-1 bg-black text-white min-h-screen border border-transparent overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
