import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sanFrancisco = localFont({
  src: [
    {
      path: "../assets/fonts/SFNSDisplay-Light.otf",
      weight: "200",
      style: "light",
    },
    {
      path: "../assets/fonts/SFNSDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/SFNSDisplay-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../assets/fonts/SFNSDisplay-Semibold.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../assets/fonts/SFNSDisplay-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
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
