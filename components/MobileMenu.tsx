"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { HiAcademicCap, HiPhone } from "react-icons/hi";
import { RiLoginBoxFill } from "react-icons/ri";
import Link from "next/link";
import { PLATFORM_LOGIN } from "@/constants/constants";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <GiHamburgerMenu className="md:hidden text-4xl" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay></Dialog.Overlay>
        <Dialog.Content className="w-screen h-screen p-10 flex flex-col inset-y-2/4 inset-x-2/4 bg-primary opacity-95 fixed rounded-xl -translate-x-2/4 -translate-y-2/4">
          <div className="flex w-full justify-end p-4">
            <Dialog.Close className="outline-none">
              <AiOutlineClose className="text-3xl" />
            </Dialog.Close>
          </div>

          <div className="flex items-center justify-center h-full py-20">
            <div className="flex flex-col gap-10 text-3xl">
              <Dialog.Close asChild>
                <Link
                  href="/developing"
                  className="flex flex-row items-center hover:text-accent"
                >
                  <HiAcademicCap className="mx-4 text-4xl" />
                  Курсы
                </Link>
              </Dialog.Close>

              <Dialog.Close asChild>
                <Link
                  href="/#contact"
                  className="flex flex-row items-center hover:text-accent"
                >
                  <HiPhone className="mx-4 text-4xl" />
                  Контакты
                </Link>
              </Dialog.Close>

              <Dialog.Close asChild>
                <Link
                  href={PLATFORM_LOGIN}
                  className="flex flex-row items-center hover:text-accent"
                >
                  <RiLoginBoxFill className="mx-4 text-4xl" />
                  Войти
                </Link>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
