import { toast } from "react-hot-toast";

function showSuccessNotification(text: string = "Заявка получена") {
  toast.success(text, {
    style: { background: "var(--nextui-content1)", color: "var(--nextui-foreground)" },
  });
}

function showErrorNotification(text: string = "Ошибка") {
  toast.error(text, {
    style: { background: "var(--nextui-content1)", color: "var(--nextui-foreground)" },
  });
}

export function useNotification() {
  return {
    showSuccessNotification,
    showErrorNotification,
  };
}
