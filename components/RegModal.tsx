import { useNotification } from "@/hooks/useNotification";
import { IRegRequest } from "@/interfaces/regRequest";
import { requestRegistration } from "@/requests/reqRequest";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}

export default function RegModal({ isOpen, onOpenChange, onClose }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const [requestData, setRequestData] = useState<IRegRequest>({
    name: "",
    phone: "",
    age: null,
  });

  const { showSuccessNotification, showErrorNotification } = useNotification();

  const isDisabled =
    !requestData.name || !requestData.age || requestData.phone.length < 13;

  const handleSubmit = () => {
    setIsLoading(true);
    requestRegistration(requestData)
      .then(() => {
        setRequestData({ name: "", phone: "", age: null });
        onClose();
        showSuccessNotification();
      })
      .catch(() => showErrorNotification())
      .finally(() => setIsLoading(false));
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <div className="flex flex-col">
                <h1>Форма для заявки</h1>
                <h3 className="font-thin text-sm text-default-500">
                  Заполните форму для заявки
                </h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-3">
                <Input
                  value={requestData.name}
                  label="Ф.И.О"
                  aria-label="Ф.И.О"
                  placeholder="Введите Ф.И.О..."
                  onChange={(e) =>
                    setRequestData({ ...requestData, name: e.target.value })
                  }
                />
                <Input
                  type="number"
                  label="Возраст"
                  value={requestData.age?.toString() ?? ""}
                  aria-label="Возраст"
                  placeholder="Введите ваш возраст..."
                  onChange={(e) =>
                    setRequestData({ ...requestData, age: +e.target.value })
                  }
                />
                <PhoneInput
                  inputClass="rounded-xl bg-default-100 h-10 outline-none p-4 w-full"
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  specialLabel=""
                  alwaysDefaultMask
                  countryCodeEditable={false}
                  disableDropdown
                  defaultMask="(...) ... ..."
                  country={"kg"}
                  onlyCountries={["kg"]}
                  value={requestData.phone}
                  onChange={(phone) =>
                    setRequestData({ ...requestData, phone: `+${phone}` })
                  }
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                isDisabled={isDisabled}
                isLoading={isLoading}
                onPress={handleSubmit}
              >
                Оставить заявку
              </Button>
              <Button variant="light" onPress={onClose}>
                Отмена
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
