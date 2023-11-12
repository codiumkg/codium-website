import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const firaSans = Fira_Sans({
  subsets: ["cyrillic"],
  weight: ["200", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Codium KG",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={firaSans.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
