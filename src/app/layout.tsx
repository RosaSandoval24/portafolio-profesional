import type { Metadata } from "next";
import { Great_Vibes, Space_Grotesk } from "next/font/google";
import "./globals.css";

export const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rosa Sandoval | Portafolio",
  description: "Portafolio profesional de Rosa Sandoval",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={greatVibes.variable}
    >
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  );
}