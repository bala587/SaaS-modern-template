import "./globals.css";
import { ClerkProvider, UserProfile } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "SaaS Template",
  description: "This is the software you need",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Navbar />
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
