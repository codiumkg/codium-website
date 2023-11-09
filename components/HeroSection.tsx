"use client";

import Image from "next/image";
import Logo from "@/assets/codium_logo_solo.png";
import { AiOutlineClose } from "react-icons/ai";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { IRegRequest } from "@/interfaces/regRequest";
import { requestRegistration } from "@/requests/reqRequest";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestData, setRequestData] = useState<IRegRequest>({
    name: "",
    phone: "",
    age: null,
  });

  const handleSubmit = () => {
    requestRegistration(requestData);
  };

  return (
    <section
      className="py-20 lg:py-0 w-screen min-h-screen flex flex-col justify-center items-center"
      id="hero"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex-1">
          <Image
            src={Logo}
            alt="Logo"
            className="my-20 w-60 h-60 md:w-96 md:h-96 lg:my-0 lg:mx-20 shrink-0"
          />
        </div>

        <div className="flex flex-col flex-1 w-full text-white text-center lg:text-left text-3xl md:text-5xl items-center px-30 lg:px-0 lg:items-start font-light">
          <div>
            <span className="text-xl md:text-4xl">Добро пожаловать в мир </span>{" "}
            <br />
            <span className="text-3xl md:text-6xl text-accent-secondary font-extrabold">
              IT
            </span>
            <span className="text-2xl md:text-3xl"> где навыки становятся</span>{" "}
            <br />
            <span className="text-3xl text-accent font-bold md:text-6xl">
              возможностями!
            </span>
          </div>
          <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Trigger asChild>
              <button className="mt-12 px-8 py-4 border-2 border-accent rounded-xl text-lg text-accent font-normal hover:bg-white hover:text-primary hover:border-white">
                Записаться
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="absolute inset-0 bg-primary opacity-70 w-screen h-screen" />
              <Dialog.Content className="p-6 w-9/12 md:w-3/6 lg:w-1/4 bg-secondary min-h-min inset-y-2/4 inset-x-2/4 fixed rounded-xl -translate-x-2/4 -translate-y-2/4">
                <div className="flex justify-between">
                  <Dialog.Title className="text-2xl md:text-3xl">
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
                      onChange={(e) =>
                        setRequestData({ ...requestData, name: e.target.value })
                      }
                      required
                    ></input>
                  </div>
                  <div className="mt-1 flex-1">
                    <input
                      className="rounded-xl bg-primary h-10 outline-none p-4 w-full"
                      placeholder="Возраст *"
                      name="age"
                      type="number"
                      onChange={(e) =>
                        setRequestData({ ...requestData, age: +e.target.value })
                      }
                      required
                    ></input>
                  </div>
                  <div className="mt-1 flex-1">
                    <input
                      className="rounded-xl bg-primary h-10 outline-none p-4 w-full"
                      placeholder="Номер телефона *"
                      name="phone"
                      onChange={(e) =>
                        setRequestData({
                          ...requestData,
                          phone: e.target.value,
                        })
                      }
                      required
                    ></input>
                  </div>
                </div>

                <button
                  className="mt-6 px-8 py-3 bg-accent rounded-xl text-primary w-full"
                  onClick={handleSubmit}
                >
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
