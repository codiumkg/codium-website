"use client";

import Image from "next/image";

import Logo from "@/assets/codium_logo_solo.png";
import CodiumLogo from "@/assets/codium_logo_text.svg";
import { Button, Link, useDisclosure } from "@nextui-org/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import RegModal from "./RegModal";

export default function Header() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

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
      className="p-4 md:px-12 lg:px-40 w-screen flex fixed backdrop-blur-md z-10"
    >
      <div className="flex items-center justify-between p-2 h-full w-full">
        <Link href="/#hero" className="flex gap-3 items-center">
          <Image src={CodiumLogo} alt="logo" height={48} />
        </Link>

        <div className="hidden md:flex items-center gap-6 font-bold">
          <Link href="/#contact" color="foreground">
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
            <Button color="primary" onPress={onOpen}>
              Записаться
            </Button>
          </div>
        </div>
      </div>

      <RegModal onOpenChange={onOpenChange} isOpen={isOpen} onClose={onClose} />
    </header>
  );
}
