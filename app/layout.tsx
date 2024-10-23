import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Roboto_Flex } from "next/font/google";
import Header from "@/components/Header";
import cn from "classnames";

import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { UIProvider } from "@/components/UIProvider";

const font = Roboto_Flex({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Курсы программирования Токмок | Codium KG",
  description: "Курсы программирования Codium в городе Токмок. | Кодиум Токмок",
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
    "ИТ",
    "Кодиум",
    "Кодиум Токмок",
    "Курсы кодиум",
    "центр курсов программирования",
    "центр курсов",
    "Чуйская область",
    "Чуй",
    "KG",
    "город Токмок",
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
      <body className={cn(font.className, "bg-background light")}>
        <UIProvider>
          <SmoothScroll>
            <Toaster />
            <Header />

            {children}
            {/* <Footer /> */}
          </SmoothScroll>
        </UIProvider>
      </body>
    </html>
  );
}
