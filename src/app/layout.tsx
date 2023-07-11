import "./globals.css";
import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={`${poppins.className} ${outfit.className}`}>
        {children}
      </body>
    </html>
  );
}
