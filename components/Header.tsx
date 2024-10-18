import Image from "next/image";

import Logo from "@/assets/codium_logo_solo.png";
import { Button, Link } from "@nextui-org/react";

export default function Header() {
  return (
    <header className="md:p-4 md:px-80 w-screen flex fixed backdrop-blur-md z-10">
      <div className="flex items-center justify-between p-2 h-full w-full">
        <Link href="/#hero" className="flex gap-3 items-center">
          <Image src={Logo} alt="logo" height={32} />
          <span className="text-foreground font-bold text-2xl">Codium</span>
        </Link>

        <div className="flex gap-12 items-center">
          <div className="flex items-center gap-6 font-bold">
            <Link href="/#contacts" color="foreground">
              Контакты
            </Link>
            <Link href="/#courses" color="foreground">
              Курсы
            </Link>
            <Link href="/#courses" color="foreground">
              Часто задаваемые вопросы
            </Link>
          </div>

          <div className="flex gap-4">
            <Button color="primary">Записаться</Button>
            <Link href="https://platform.codiumdev.com">
              <Button color="secondary" variant="flat">
                Войти
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
