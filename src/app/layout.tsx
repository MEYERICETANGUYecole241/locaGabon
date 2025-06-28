import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  ClerkProvider,
} from "@clerk/nextjs";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LocaGabon",
  description: "Plateforme de location immobilière au Gabon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="fr" className={`${roboto.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-blue-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
   
            
        
  