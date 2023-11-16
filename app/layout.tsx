import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

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
  title: "Курсы программирования Токмок | Codium KG",
  description: "Курсы программирования Codium в городе Токмок.",
  keywords: [
    "курсы",
    "программирование",
    "Токмок",
    "Кыргызстан",
    "оффлайн-курсы",
    "Codium",
    "Codium KG",
    "обучение",
    "образование",
    "база данных",
    "SQL",
    "python",
    "django",
    "IT",
    "информационные технологии",
    "введение в IT",
    "Codium Tokmok",
    "Codium Токмок",
  ],
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
        <Toaster />
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
