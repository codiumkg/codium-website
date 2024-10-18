"use client";

import Image from "next/image";

import Logo from "@/assets/codium_logo_solo.png";
import { Button, Link } from "@nextui-org/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Header() {
  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: 0,
    });

    tl.from("#navbar", {
      y: -20,
      opacity: 0,
      duration: 2,
      ease: "elastic.inOut",
    });
  }, []);

  return (
    <header
      id="navbar"
      className="p-4 md:px-6 w-screen flex fixed backdrop-blur-md z-10"
    >
      <div className="flex items-center justify-between p-2 h-full w-full">
        <Link href="/#hero" className="flex gap-3 items-center">
          <Image src={Logo} alt="logo" height={32} />
          <span className="text-foreground font-bold text-xl">Codium</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 font-bold">
          <Link href="/#contacts" color="foreground">
            Контакты
          </Link>
          <Link href="/#courses" color="foreground">
            Курсы
          </Link>
          <Link href="/#faq" color="foreground">
            Часто задаваемые вопросы
          </Link>
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <div className="flex gap-4">
            <Link href="https://platform.codiumdev.com">
              <Button color="primary" variant="light">
                <span className="text-foreground">Войти</span>
              </Button>
            </Link>
            <Button color="primary">Записаться</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
