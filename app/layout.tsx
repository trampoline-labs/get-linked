import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/main-nav";

const monserrat = localFont({
  src: "../assets/fonts/montserrat/Montserrat-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-montserrat",
});

const clashDisplay = localFont({
  src: "../assets/fonts/clash-display/ClashDisplay-Variable.woff2",
  display: "swap",
  variable: "--font-clash-display",
});

const unicaOne = localFont({
  src: "../assets/fonts/unica-one/unica-one-latin-400-normal.woff2",
  display: "swap",
  weight: "400",
  style: "normal",
  variable: "--font-unica-one",
});

export const metadata: Metadata = {
  title: "GetLinked🌟",
  description: "GetLinked Hackathon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${monserrat.variable} ${clashDisplay.variable} ${unicaOne.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
