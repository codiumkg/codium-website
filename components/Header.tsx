import Image from "next/image";

import Logo from "@/assets/codium_logo.png";
import Link from "next/link";

import { HiAcademicCap } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { RiLoginBoxFill } from "react-icons/ri";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <div className="md:p-4 md:px-6 w-screen h-36 flex fixed backdrop-blur-md">
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
              href="/developing"
              className="flex flex-row items-center hover:text-accent"
            >
              <HiAcademicCap className="mx-3 text-2xl" />
              Курсы
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
              href="/developing"
              className="flex flex-row items-center hover:text-accent"
            >
              <RiLoginBoxFill className="mx-3 text-2xl" />
              Платформа
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
