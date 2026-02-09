// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar"; // <--- Import this
import Footer from "@/components/Footer"; // <--- Import this

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kingdom Baptist Church",
  description: "Making disciples in Fredericksburg, VA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />        {/* <--- Stays here forever */}
        
        {children}        {/* <--- This is where page.tsx / about/page.tsx loads */}
        
        <Footer />        {/* <--- Stays here forever */}
      </body>
    </html>
  );
}