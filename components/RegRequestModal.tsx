"use client";

import { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { IRegRequest } from "@/interfaces/regRequest";
import { AiOutlineClose } from "react-icons/ai";
import { requestRegistration } from "@/requests/reqRequest";
import { useNotification } from "@/hooks/useNotification";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

export default function RegRequestModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [requestData, setRequestData] = useState<IRegRequest>({
    name: "",
    phone: "",
    age: null,
  });

  const { showSuccessNotification, showErrorNotification } = useNotification();

  const isDisabled =
    !requestData.name || !requestData.age || requestData.phone.length < 6;

  const handleSubmit = () => {
    setIsLoading(true);
    requestRegistration(requestData)
      .then(() => {
        setIsModalOpen(false);
        showSuccessNotification();
      })
      .catch(() => showErrorNotification())
      .finally(() => setIsLoading(false));
  };

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Trigger asChild>
        <button className="mt-12 px-8 py-4 border border-accent hover:border-accent-secondary hover:text-accent-secondary rounded-xl text-lg text-accent font-normal transition">
          Записаться
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="absolute inset-0 bg-primary opacity-70 w-screen h-screen" />
        <Dialog.Content className="p-6 w-9/12 md:w-3/6 lg:w-1/4 bg-secondary min-h-min inset-y-2/4 inset-x-2/4 fixed rounded-xl -translate-x-2/4 -translate-y-2/4">
          <div className="flex justify-between items-center">
            <Dialog.Title className="text-1xl sm:text-2xl">
              Форма для заявки
            </Dialog.Title>

            <Dialog.Close className="outline-none">
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
                value={requestData.name}
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
                value={requestData.age ?? ""}
                min="12"
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
                minLength={6}
                value={requestData.phone}
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
            className={`grid place-content-center mt-6 px-8 py-3 rounded-xl text-primary w-full ${
              isDisabled ? "bg-accent-dark" : "bg-accent"
            }`}
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            {isLoading ? <LoadingSpinner /> : "Оставить заявку"}
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
