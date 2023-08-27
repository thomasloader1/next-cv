import { ContactBox } from "@/components/ContactBox";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";


const outfit = Outfit({ subsets: ["latin"], weight: ["800"] });

export const metadata: Metadata = {
  title: "Gomez Tomas Gonzalo - CV",
  description: "Curriculum Vitae de Gomez Tomas Gonzalo - Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} text-dark_custom`}>
      <ContactBox />

        {children}
        </body>
    </html>
  );
}
