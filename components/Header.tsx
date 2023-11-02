import Image from "next/image";

import Logo from "@/assets/codium_logo.png";
import Link from "next/link";

import { HiAcademicCap } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { RiLoginBoxFill } from "react-icons/ri";

export default function Header() {
  return (
    <div className="p-4 px-6 w-screen h-36 flex fixed backdrop-blur-md">
      <div className="flex flex-row items-center h-full w-full justify-around">
        <Link href="/#hero">
          <Image
            src={Logo}
            alt="logo"
            width={260}
            height={20}
            className="mb-2"
          />
        </Link>

        <div className="flex flex-row items-center h-full uppercase">
          <div className="mx-3">
            <Link
              href="/developing"
              className="flex flex-row items-center hover:text-accent"
            >
              <HiAcademicCap className="mx-3 text-2xl" />
              Курсы
            </Link>
          </div>

          <div className="mx-3">
            <Link
              href="/#contact"
              className="flex flex-row items-center hover:text-accent"
            >
              <HiPhone className="mx-3 text-2xl" />
              Контакты
            </Link>
          </div>

          <div className="mx-3">
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
