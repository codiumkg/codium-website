import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sanFrancisco = localFont({
  src: "../assets/fonts/SFNSDisplay-Regular.otf",
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
      <body className={sanFrancisco.className}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
