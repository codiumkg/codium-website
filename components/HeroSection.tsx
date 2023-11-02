"use client";

import Image from "next/image";
import Logo from "@/assets/codium_logo_solo.png";
import { AiOutlineClose } from "react-icons/ai";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen min-h-screen flex flex-col items-center"
      id="hero"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen">
        <Image
          src={Logo}
          width={420}
          height={420}
          alt="Logo"
          className="my-20 lg:my-0 mx-20 w-2/4"
        />

        <div className="flex flex-col text-white text-5xl w-2/8 font-light">
          <div>
            <span className="text-4xl">Добро пожаловать в мир </span> <br />
            <span className="text-accent-secondary font-extrabold">IT</span>
            <span className="text-3xl"> где навыки становятся</span> <br />
            <span className="text-accent font-bold text-6xl">
              возможностями!
            </span>
          </div>
          <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Trigger asChild>
              <button className="mt-12 px-8 py-4 border-2 lg:w-2/5 border-accent rounded-xl text-lg text-accent font-normal hover:bg-white hover:text-primary hover:border-white">
                Записаться
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="absolute inset-0 bg-primary opacity-70 w-screen h-screen" />
              <Dialog.Content className="p-6 w-1/4 min-h-min inset-y-2/4 inset-x-2/4 bg-secondary fixed rounded-xl -translate-x-2/4 -translate-y-2/4">
                <div className="flex justify-between">
                  <Dialog.Title className="text-3xl">
                    Форма для заявки
                  </Dialog.Title>

                  <Dialog.Close>
                    <AiOutlineClose className="text-xl" />
                  </Dialog.Close>
                </div>
                <Dialog.Description className="mt-4 text-xs">
                  Заполните форму для подачи заявки
                </Dialog.Description>

                <div className="flex flex-col w-full flex-wrap gap-4">
                  <div className="mt-4 flex-1">
                    <input
                      className="rounded-xl bg-primary h-10 outline-none p-4 w-full"
                      placeholder="Ф.И.О *"
                      name="name"
                      required
                    ></input>
                  </div>
                  <div className="mt-1 flex-1">
                    <input
                      className="rounded-xl bg-primary h-10 outline-none p-4 w-full"
                      placeholder="Возраст *"
                      name="age"
                      required
                    ></input>
                  </div>
                  <div className="mt-1 flex-1">
                    <input
                      className="rounded-xl bg-primary h-10 outline-none p-4 w-full"
                      placeholder="Номер телефона *"
                      name="phone"
                      required
                    ></input>
                  </div>
                </div>

                <button className="mt-6 px-8 py-3 bg-accent rounded-xl text-primary w-full">
                  Оставить заявку
                </button>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </section>
  );
}
