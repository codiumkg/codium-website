import Image from "next/image";

import Logo from "@/assets/codium_logo.png";
import Link from "next/link";

import { HiAcademicCap } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { RiLoginBoxFill } from "react-icons/ri";
import { MdQuestionMark } from "react-icons/md";

import MobileMenu from "./MobileMenu";
import { PLATFORM_LOGIN } from "@/constants/constants";

export default function Header() {
  return (
    <header className="md:p-4 md:px-6 w-screen h-32 flex fixed backdrop-blur-md z-10">
      <div className="flex flex-row items-center p-10 md:p-0 h-full w-full justify-between md:justify-around">
        <Link href="/#hero">
          <Image
            src={Logo}
            alt="logo"
            objectFit="cover"
            className="mb-2 w-44 md:w-80"
          />
        </Link>

        <MobileMenu />

        <div className="hidden md:flex flex-row gap-8 items-center h-full uppercase">
          <div>
            <Link
              href="/#courses"
              className="flex flex-row items-center hover:text-accent"
            >
              <HiAcademicCap className="mx-3 text-2xl" />
              Курсы
            </Link>
          </div>

          <div>
            <Link
              href="/#faq"
              className="flex flex-row items-center hover:text-accent"
            >
              <MdQuestionMark className="mx-3 text-2xl" />
              F.A.Q
            </Link>
          </div>

          <div>
            <Link
              href="/#contact"
              className="flex flex-row items-center hover:text-accent"
            >
              <HiPhone className="mx-3 text-2xl" />
              Контакты
            </Link>
          </div>

          <div>
            <Link
              href={PLATFORM_LOGIN}
              className="flex flex-row items-center hover:text-accent"
            >
              <RiLoginBoxFill className="mx-3 text-2xl" />
              Войти
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
